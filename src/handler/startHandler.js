import { data } from '../data.js';
import { getWatchTime } from '../utils/getWatchTime.js';
import { getTimeComponents } from '../component/getTimeComponents.js';

export const startHandler = () => {
    if (data.intervalId !== null) {
        data.intervalId = clearInterval(data.intervalId);
    }

    data.intervalId = setInterval(() => {
        getWatchTime();
        getTimeComponents();
    }, 10);
};
