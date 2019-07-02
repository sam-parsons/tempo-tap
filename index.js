module.exports = {
  tempo: 0,
  timeContainer: [],
  threshold: 3,
  tap() {
    const timeContainer = this.timeContainer;
    if (timeContainer.length > this.threshold - 1) timeContainer.shift();
    timeContainer.push(Date.now()); //
    const tempo = Math.round(
      (1000 /
        (timeContainer
          .slice(1)
          .map((time, i) => time - timeContainer[i])
          .reduce((a, b) => a + b, 0) /
          (timeContainer.length - 1))) *
        60
    );
    this.tempo = tempo;
    return this.tempo;
  },
  clear() {
    this.timeContainer = [];
  },
  getLastTempo() {
    return this.tempo;
  },
  setThreshold(value) {
    this.threshold = value;
  }
};
