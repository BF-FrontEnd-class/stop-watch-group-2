import { startHandler } from '../handler/startHandler.js';
import { dom } from '../data.js';

dom.startButton.addEventListener('click', function (e) {
  e.preventDefault();
  startHandler();
});
