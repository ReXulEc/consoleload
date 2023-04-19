let loaderconst;

function loader(obj, text, fps){
    let x = 0;
    loaderconst = setInterval(() => {
        process.stdout.write(`\r${obj.frames[x++]} ${text}`);
        x %= obj.frames.length;
    }, 1000 / fps);
}

function stop(){
    clearInterval(loaderconst);
}

module.exports = {loader, stop};