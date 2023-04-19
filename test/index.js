const cload = require('../src/index.js')

cload.log("Hello World!", "basicspin")

setInterval(() => {
    cload.stop()
}, 5000);

