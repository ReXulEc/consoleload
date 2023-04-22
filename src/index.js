const fs = require("node:fs");
const loader = require("./loader.js");
const { fileURLToPath } = require("node:url");
const { dirname, join, resolve } = require("node:path");

/**
 * @type {string}
 */
let libPath;

try {
  libPath = join(__dirname, "lib");
} catch {
  libPath = join(dirname(fileURLToPath(import.meta.url)), "lib");
}

const animations = fs
  .readdirSync(libPath)
  .map((animation) =>
    JSON.parse(fs.readFileSync(resolve(libPath, animation), "utf-8"))
  )
  .reduce((animations, animation) => {
    animations[animation.name] = animation;
    return animations;
  }, {});

/**
 * @type {?NodeJS.Timeout}
 */
let loaded;

module.exports = (text, animation = "basicspin", fps, space) => {
  const _animation =
    typeof animation === "object" ? animation : animations[animation];

  if (!_animation) {
    throw new Error("Invalid animation");
  }
  
  let deffps = _animation.fps;

  if (loaded) {
    clearInterval(loaded);
    console.log("\r");
  }
  if (fps) {
    _animation.fps = fps;
  }
  if (space) {
    _animation.space = space;
  }


  // for testing the animation object
  // console.log(_animation)

  loaded = loader(_animation, text);

  return {
    stop: () => {
      clearInterval(loaded);
      loaded = null;
      _animation.fps = deffps;
      delete _animation.space
      return true;
    },
  };
};
