# consoleload

A fully customizable loading animation package for your Console Logs.

## Installation

```bash
npm install consoleload
```

## Usage

```js
const cload = require("consoleload");

const log = cload("Hello World!", "basicspin");

setTimeout(() => {
  cload.stop();
}, 3000);
```
