'use strict';

const v1 = 'Hello';
const v2 = 'World';

console.log(`${v1} ${v2}`);


const multiply = (a, b = '1') => console.log(a * b);
multiply(10);

const average = [2, 3, 2, 3] // 4
console.log(average);

const averageScore = (...numbers) => numbers.reduce((a,b) => a + b) / numbers.length;



let string = averageScore(...average).toFixed(2);

let test = Number(string);
console.log(test);


const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

console.log(averageScore(...grades).toFixed(2));

const weird = [1, 4, 'Iwona', false, 'Nowak']
const [ , ,second, ,fourth] = weird;

console.log(second, fourth);