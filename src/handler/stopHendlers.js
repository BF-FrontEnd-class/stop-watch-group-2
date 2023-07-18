import { data } from '../data.js';

export const stopHandler = () => {
  if (data.intervalId === null) {
    clearInterval(data.intervalId);
    data.intervalId = null;
  }
};
