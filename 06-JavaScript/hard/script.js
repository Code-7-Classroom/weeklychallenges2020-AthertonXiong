// HARD: Create 4 math functions, one called add() that adds 2 numbers,
// one called subtract() that subtracts 2 numbers
// one called multiply() to multiply 2 numbers
// and one called divide() to divide two numbers.
var num1 = 4;
var num2 = 6;
var num3 = 15;
var num4 = 40;

add(num2, num3);
function add(num5, num6) {
    console.log(num5 + ' plus ' + num6 + ' equals ' + (num5 + num6));
}

subtract(num4, num1);
function subtract(num7, num6) {
    console.log(num7 + ' minus ' + num6 + ' equals ' + (num7 - num6));
}

multiply(num3, num2);
function multiply(num4, num5) {
    console.log(num4 + ' multiplied by ' + num5 + ' equals ' + (num4 * num5));
}

divide(num4, num1);
function divide(num7, num4) {
    console.log(num7 + ' divided by ' + num4 + ' equals ' + (num7 / num4));
}