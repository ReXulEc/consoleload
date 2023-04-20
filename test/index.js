const cload = require("../src/index.js");
const { setTimeout: sleep } = require("node:timers/promises");

/* New line

(async () => {
  let log = cload("Fetching user...", "basicspin");
  await sleep(2000);
  let log2 = cload("Fetching data...", "basicspin");
  await sleep(2000);
  log2.stop();
})();
*/

/* Same line

(async () => {
  let log = cload("Losssading...", "plusminus");
  await sleep(2000);
  log.stop();
  let log2 = cload("Loading more data...", "plusminus");
  await sleep(2000);
  log2.stop();
})();
*/

/* Custom animation

(async () => {
  const MyAnimation = {
    fps: 5,
    frames: [
      "-",
      "."
    ],
  }
  let log = cload("Loading with custom animation...", MyAnimation);
  await sleep(2000);
  log.stop();
})();
*/

/* Preset animation with custom fps

(async () => {
  let log = cload("Loading animation with 40fps...", "moon", 40);
  await sleep(2000);
  log.stop();
  let log2 = cload("Loading animation with default fps...", "moon");
})();
*/