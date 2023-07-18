export const data = {
  minutes: 0,
  seconds: 0,
  milliseconds: 0,
  intervalId: null,
};

export const dom = {
  startButton: document.getElementById('start'),
  stopButton: document.getElementById('stop'),
  resetButton: document.getElementById('reset'),
  timeMinute: document.querySelector('.minute'),
  timeSeconde: document.querySelector('.second'),
  timeMillisecond: document.querySelector('.millisecond'),
  timeContainer: document.querySelector('.time'),
};
