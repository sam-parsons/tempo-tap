export const TapTempo = {
  tempo: -1,
  threshold: 3,
  timeContainer: [],
  tap() {
    const timeContainer: number[] = this.timeContainer;
    if (timeContainer.length > this.threshold - 1) {
      timeContainer.shift();
    }
    timeContainer.push(Date.now());
    let tempo = Math.round(
      (1000 /
        (timeContainer
          .slice(1)
          .map((time: number, i: number) => time - timeContainer[i])
          .reduce((a: number, b: number) => a + b, 0) /
          (timeContainer.length - 1))) *
        60,
    );
    if (typeof tempo !== 'number') {
      tempo = -1;
    }
    this.tempo = tempo;
    return this.tempo;
  },
  clear() {
    this.timeContainer = [];
  },
  getLastTempo() {
    return this.tempo;
  },
  setThreshold(value: number) {
    this.threshold = value;
  },
  init() {
    return 'module exists';
  },
};
