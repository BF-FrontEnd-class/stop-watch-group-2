import { data, dom } from '../data.js';

export const getTimeComponents = () => {
  // debugger;

  dom.timeMillisecond.innerText =
    data.milliseconds < 10
      ? '00' + data.milliseconds
      : data.milliseconds < 100
      ? '0' + data.milliseconds
      : data.milliseconds;

  // console.log(data.milliseconds);

  if (data.seconds !== data.oldSeconds) {
    dom.timeSeconde.innerText =
      data.seconds < 10 ? '0' + data.seconds : data.seconds;
  }
  // console.log(data.seconds);

  if (data.minutes !== data.oldMinutes) {
    // console.log('inside : ' + data.seconds);
    dom.timeMinute.innerText =
      data.minutes < 10 ? '0' + data.minutes : data.minutes;
  }

  data.oldSeconds = data.seconds;
  data.oldMinutes = data.minutes;
};
