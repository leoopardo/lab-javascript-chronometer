class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }

  start(callback) {
    const interval = setInterval(() => {this.currentTime += 1}, 1000)
    this.intervalId = interval;
    if (this.intervalId > 0){
      callback = this.intervalId + interval
    };
  };

  getMinutes() {
    let minutes = 0
    if (this.currentTime > 60 ){
      minutes += 1
    };
    return minutes
  };
  getSeconds() {
    let seconds = this.currentTime;
    if (this.currentTime > 60){
      seconds -= 60
    }
    return seconds
  }

  computeTwoDigitNumber() {
    let valueSec = this.currentTime.toString().padStart(2, '0');
    return valueSec
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let valueMin = this.getMinutes().toString().padStart(2, '0');
    return `${valueMin}:${valueSec}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
