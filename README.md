<div align="center">
  <h1>consoleload</h1>
  <span class="badge-npmversion">
    <a href="https://npmjs.org/package/consoleload" title="View this project on NPM">
      <img src="https://img.shields.io/npm/v/consoleload.svg" alt="NPM version" />
    </a>
  </span>
  <span class="badge-npmdownloads">
    <a href="https://npmjs.org/package/consoleload" title="View this project on NPM">
      <img src="https://img.shields.io/npm/dm/consoleload.svg" alt="NPM downloads" />
    </a>
  </span>
  <span class="badge-githubsponsors">
    <a href="https://github.com/sponsors/rexulec" title="Donate to this project using GitHub Sponsors">
      <img src="https://img.shields.io/badge/github-donate-yellow.svg" alt="GitHub Sponsors donate button" />
    </a>
  </span>
  <br class="badge-separator" />
  <p>A fully customizable loading animation package for your Console Logs.</p>
</div>

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