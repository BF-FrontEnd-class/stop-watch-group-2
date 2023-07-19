import { data, dom } from '../data.js';
import { getTimeComponents } from '../component/getTimeComponents.js';

export const resetHandler = () => {
  // debugger;
  if (data.intervalId === null) {
    clearInterval(data.intervalId);
    data.intervalId = null;
  }

  data.minutes = 0;
  data.seconds = 0;
  data.milliseconds = 0;

  // dom.timeMillisecond.innerText = '000';

  // getTimeComponents();

  dom.timeMinute.innerText = '00 : ';
  dom.timeSeconde.innerText = '00 : ';
  dom.timeMillisecond.innerText = '000';
};
