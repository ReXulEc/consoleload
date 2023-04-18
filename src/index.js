const fs = require('fs');

let loader;
let animations = 0

async function log(animation, text) {
    fs.readdir('./lib', (err, files) => {
        if (err) {
            console.error(err);
            return;
        }

        // Dosyaları döngüye sok
        for (const file of files) {
            // Sadece JSON dosyalarını işle
            if (file.endsWith('.json')) {
                const data = fs.readFileSync(`./lib/${file}`, 'utf8');
                const obj = JSON.parse(data);

                // Eğer objenin name değeri "test" ise, x değerini yazdır
                if (obj.name === animation) {
                    let x = 0;
                    loader = setInterval(() => {
                        process.stdout.clearLine()
                        process.stdout.cursorTo(animations)

                        process.stdout.write(`\r${obj.frames[x++]} ${text}`);
                        x %= obj.frames.length;
                    }, 1000 / obj.framepersecond);

                    break; // İşlemi durdur
                }
            }
        }
    });
}

function stop() {
    clearInterval(loader);
}

module.exports = { log, stop }