import { data, dom } from '../data.js';
import { getWatchTime } from '../utils/getWatchTime.js';

export const getTimeComponents = () => {
  const watchData = getWatchTime();

  dom.timeMinute.innerText =
    watchData.minutes < 10
      ? '0' + watchData.minutes + ' : '
      : watchData.minutes + ' : ';

  dom.timeSeconde.innerText =
    watchData.seconds < 10
      ? '0' + watchData.seconds + ' : '
      : watchData.seconds + ' : ';

  dom.timeMillisecond.innerText =
    watchData.milliseconds < 10
      ? '00' + watchData.milliseconds
      : watchData.milliseconds < 100
      ? '0' + watchData.milliseconds
      : watchData.milliseconds;
};
