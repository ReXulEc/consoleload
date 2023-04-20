# consoleload

A fully customizable loading animation package for your Console Logs.

## Installation

```bash
npm install consoleload
```

## Usage

```js
const cload = require("consoleload");

(async () => {
  let log = cload("Fetching user...", "basicspin");
  //await sleep(2000);
  // Code..
  let log2 = cload("Fetching data...", "basicspin");
  //await sleep(2000);
  // Code..
  log2.stop();
})();
```

## Animations

| Name    | Author | Frames | Spacing |
| -------- | ------- | ------ | ------ |
| basicspin(default) | @ReXulEc | ["-", "\\", "&#124;", "/"] | default |
| plusminus | @ReXulEc | ["+", "-"] | default |
| moon | @ReXulEc | ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"] | default | 
| weather | @ReXulEc |  ["🌤️", "🌧️", "⛈️", "🌨️", "🌩️", "🌦️"] | 2 |

## Options

```js
cload(text, animationName || customAnimation, customFps, customSpace)
```
### You can use these options like this:
```js
(async () => {
  const MyAnimation = {
    fps: 5,
    frames: [
      "/",
      "-",
      "\\",
      "-"
    ],
  }
  let log = cload("Loading with custom animation with 5fps and 5 space..", MyAnimation, null, 5);
  await sleep(5000);
  log.stop();
})();
```

### Output:
<img src="https://i.imgur.com/vFACdGG.gif" alt="Output"/>

## Contribute

You can create pr to add your own json. Just dont forget to add animation's name to types.