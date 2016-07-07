import $ from 'jquery';
import './style.scss';

let count = 0;
const incCount = () => {
  $('#main').html(`You\'ve been here for ${count} seconds`);
  count++;
};

function *func() {
  yield 'hi';
  yield 'my';
  yield 'name';
  yield 'is';
  yield 'Alma';
}
for (let iter of func()) {
  console.log(iter);
}

setInterval(incCount, 1000);
