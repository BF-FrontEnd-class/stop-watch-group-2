import { data } from '../data.js';
import { getTimeComponents } from '../component/getTimeComponents.js';

export const stopHandler = () => {
  // debugger;
  // const watchData = getTimeComponents();
  if (data.intervalId) {
    console.log(data.intervalId);
    clearInterval(data.intervalId);
    data.intervalId = null;
  }
};
