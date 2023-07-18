import { stopHandler } from '../handler/stopHandlers.js';
import { dom } from '../data.js';

dom.stopButton.addEventListener('click', function (e) {
  e.preventDefault();
  stopHandler();
});
