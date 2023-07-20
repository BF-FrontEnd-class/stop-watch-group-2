import { data } from '../data.js';

export const stopHandler = () => {
    if (data.intervalId) {
        clearInterval(data.intervalId);
        data.intervalId = null;
    }
};
