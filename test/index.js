const cload = require("../src/index.js");
const { setTimeout: sleep } = require("node:timers/promises");

(async () => {
  let log = cload("Fetching user...", "basicspin");
  await sleep(2000);
  log.stop();
})();
