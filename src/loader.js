/**
 *
 * @param {Object} animation
 * @param {string} text
 */
module.exports = (animation, text) => {
  let frames = 0;
  let space = 1;

  if (animation.space){
    space = animation.space;      
  }

  let _space = " ".repeat(space)


  const interval = setInterval(() => {
    process.stdout.write(`\r${animation.frames[frames++]}${_space}${text}`);

    frames %= animation.frames.length;
  }, 1000 / animation.fps);

  return interval;
};
