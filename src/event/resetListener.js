import { resetHandler } from '../handler/resetHandler.js';
import { dom } from '../data.js';

dom.resetButton.addEventListener('click', function (e) {
  debugger;
  e.preventDefault();
  resetHandler();
});
