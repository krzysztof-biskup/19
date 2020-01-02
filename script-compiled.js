'use strict';

var v1 = 'Hello';
var v2 = 'World';

console.log(v1 + ' ' + v2);

var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1';
  return console.log(a * b);
};
multiply(10);

var average = [2, 3, 2, 3]; // 4
console.log(average);

var averageScore = function averageScore() {
  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return numbers.reduce(function (a, b) {
    return a + b;
  }) / numbers.length;
};

var string = averageScore.apply(undefined, average).toFixed(2);

var test = Number(string);
console.log(test);

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(averageScore.apply(undefined, grades).toFixed(2));

var weird = [1, 4, 'Iwona', false, 'Nowak'];
var second = weird[2],
    fourth = weird[4];


console.log(second, fourth);
