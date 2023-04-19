const fs = require("node:fs");
const loader = require("./loader.js");

const animations = fs
  .readdirSync("./lib/")
  .map((animation) =>
    JSON.parse(fs.readFileSync(`./lib/${animation}`, "utf-8"))
  )
  .reduce((animations, animation) => {
    animations[animation.name] = animation;
    return animations;
  }, {});

/**
 * @type {?NodeJS.Timeout}
 */
let loaded;

module.exports = (text, animation) => {
  const _animation =
    typeof animation === "object" ? animation : animations[animation];

  if (!_animation) {
    throw new Error("Invalid animation");
  }

  if (loaded) {
    clearInterval(loaded);
    console.log("\r");
  }

  loaded = loader(_animation, text);

  return {
    stop: () => {
      clearInterval(loaded);
      loaded = null;
      return true;
    },
  };
};
