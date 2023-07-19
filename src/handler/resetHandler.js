import { data } from '../data.js';
import { getTimeComponents } from '../component/getTimeComponents.js';

export const resetHandler = () => {
  debugger;
  if (data.intervalId === null) {
    clearInterval(data.intervalId);
    data.intervalId = null;
  }

  data.minutes = 0;
  data.seconds = 0;
  data.milliseconds = 0;

  getTimeComponents();
};
