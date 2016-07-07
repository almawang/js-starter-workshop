import $ from 'jquery';
import './style.scss';

let count = 0;
const incCount = () => {
  $('#main').html(`You\'ve been here for ${count} seconds`);
  count++;
};
setInterval(incCount, 1000);
