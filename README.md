# tempo tap

tap tempo object to measure speed of successive invocations

## install

`npm install tempo-tap`

## example

```js
const { tapTempo } = require('tempo-tap');

let tempo = 0;

// programmatically simulate one tap per second
tapTempo.tap();
setTimeout(() => (tempo = tapTempo.tap()), 1000);
setTimeout(() => (tempo = tapTempo.tap()), 2000);
setTimeout(() => (tempo = tapTempo.tap()), 3000);
setTimeout(() => (tempo = tapTempo.tap()), 4000);

console.log(tempo); // 60 taps per second
```

## api

#### Methods & Properties
* `.tap()` records a tap with Date.now(), stores inside TimeContainer
returns current tempo or -1 for insufficient data
* `.getLastTempo()` returns the last calculated tempo as a number
* `.clear()` clears TimeContainer, reinitiates the object
* `.setThreshold()` sets how many values TimeContainer must contain until it can make a tempo calculation - default is 3

## license

Dual-licensed under the MIT License or the Apache License, version 2.0
