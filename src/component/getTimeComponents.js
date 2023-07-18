import { data, dom } from '../data.js';

export const getTimeComponents = () => {
  dom.timeMinute.innerText =
    data.minutes < 10 ? '0' + data.minutes : data.minutes;

  dom.timeSeconde.innerText =
    data.seconds < 10 ? '0' + data.seconds : data.seconds;

  dom.timeMillisecond.innerText =
    data.milliseconds < 10
      ? '00' + data.milliseconds
      : data.milliseconds < 100
      ? '0' + data.milliseconds
      : data.milliseconds;
};
