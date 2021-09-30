// function addTwoNumbers(x, y) {
//   return x + y;

// }

// var sum = addTwoNumbers(4, 4);
// console.log('sum', sum);

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var addTwoNumbersResult = addTwoNumbers(1, 2);
console.log('adding two numbers:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var howManyMinutesInAnHour = convertHoursToMinutes(1);
console.log('hours to minutes:', howManyMinutesInAnHour);

function getGreeting(name) {
  return name;
}

var helloWorld = getGreeting('Hello World!');
console.log('greeting:', helloWorld);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}
var divide = multiplyAndDivideBy5(10, 9);
console.log('divide:', divide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtract = subtractTwoNumbers(12, 10);
console.log('subtract Two Numbers:', subtract);

function getCircleCircumference(radius) {
  return Math.PI * 2 * radius;
}
var circumference = getCircleCircumference(10);
console.log('Radius:', circumference);

function getFullName(firstName, lastName) {
  return firstName + lastName;
}
var myName = getFullName('Moamel ', 'Hashim');
console.log('full Name:', myName);

function cube(number) {
  return Math.pow(number, 3);
}
var cubeResult = cube(2);
console.log('cube equals to:', cubeResult);
