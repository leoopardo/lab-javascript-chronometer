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

  computeTwoDigitNumber(value) {
    value = this.currentTime.toString()
    if(value.length < 2){
      return 0 + value
    } else {
      return value
    }
    
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
