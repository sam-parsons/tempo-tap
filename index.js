module.exports = {
  tempo: 140,
  timeContainer: [],
  init() {
    console.log("init");
  },
  tap() {
    const timeContainer = this.timeContainer;
    if (timeContainer.length > 2) timeContainer.shift();
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
    console.log("clear");
  },
  getLastTempo() {
    console.log("last tempo");
  }
};
