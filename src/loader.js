/**
 *
 * @param {Object} animation
 * @param {string} text
 */
module.exports = (animation, text) => {
  let frames = 0;

  const interval = setInterval(() => {
    process.stdout.write(`\r${animation.frames[frames++]} ${text}`);

    frames %= animation.frames.length;
  }, 1000 / animation.fps);

  return interval;
};
