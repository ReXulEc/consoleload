const fs = require('fs');
const { consola } = require("consola");
const animateLoader = require('../src/loader.js');

let loader;
let animations = 0
let animationCount = 0
let totalAnimations = 0
const defobj = JSON.parse(fs.readFileSync(`./lib/basicspin.json`, 'utf8'));

async function log(text, animation) {
    if(!animation) animation = "basicspin"
    fs.readdir('./lib', (err, files) => {
        if (err) {
            console.error(err);
            return;
        }

        // Looping the files
        for (const file of files) {
            // Checking if the file is a JSON file
            if (file.endsWith('.json')) {
                const data = fs.readFileSync(`./lib/${file}`, 'utf8');
                const obj = JSON.parse(data);

                if (obj.name === animation) {
                    animateLoader.loader(obj, text, obj.framepersecond)
                    totalAnimations++
                } if(obj.name != animation) {
                    animationCount++
                    totalAnimations++
                }
            }
        }
        if (animationCount === totalAnimations) {
            consola.error(new Error(`"${animation}" animation not found! To avoid this error, you can use a valid animation name. Will use default animation.`));
            animateLoader.loader(defobj, text, defobj.framepersecond)
           /*
           animation = "basicspin"
           */
        }
    });
}

function stop() {
    animateLoader.stop()
}

module.exports = { log, stop }