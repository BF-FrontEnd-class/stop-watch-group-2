import { data, dom } from '../data.js';
import { getWatchTime } from '../utils/getWatchTime.js';
import { getTimeComponents } from '../component/getTimeComponents.js';

export const startHandler = () => {
  const watchData = getWatchTime();
  if (watchData.intervalId !== null) {
    watchData.intervalId = clearInterval(watchData.intervalId);
  }

  watchData.intervalId = setInterval(() => {
    getTimeComponents();
  }, 10);
};
