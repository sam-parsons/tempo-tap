# Tempo Tap

tap tempo object to measure speed of successive invocations

## install

`npm install tempo-tap`

## example

```js
var { TapTempo } = require('tempo-tap');

let tempo = 0;

TapTempo.tap();
setTimeout(() => (tempo = TapTempo.tap()), 1000);
setTimeout(() => (tempo = TapTempo.tap()), 2000);
setTimeout(() => (tempo = TapTempo.tap()), 3000);
setTimeout(() => (tempo = TapTempo.tap()), 4000);

console.log(tempo); // 60
```

## TapTempo.tap()

records a tap with Date.now(), stores inside TimeContainer
returns current tempo or -1 for insufficient data

## TapTempo.getLastTempo()

returns the last calculated tempo as a number

## TapTempo.clear()

clears TimeContainer, reinitiates the object

## TapTempo.setThreshold()

sets how many values TimeContainer must contain until it can make a tempo calculation - default is 3

## license

Dual-licensed under the MIT License or the Apache License, version 2.0
