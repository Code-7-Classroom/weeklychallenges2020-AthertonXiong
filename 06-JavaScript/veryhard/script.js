// Create a simple calculator that prompts the user for a number,
// an operator (either +, -, * or /) and another number,
// and then uses the functions created in the hard challenge to output the value in sentence form.
// Example output: "3 + 4 = 7"
var x = parseInt(prompt('enter your first number'));
var y = prompt('enter your operator like +,-,*,/');
var z = parseInt(prompt('enter your second number'));
switch (y) {
 case ('+'):
 y=x+z;
 document.write('your answer is : ' + y);
 break;

 case ('-'):
 y=x-z;
 document.write('your answer is : '+y);
 break;

 case ('*'):
 y=x*z;
 document.write('your answer is : '+y);
 break;   

 case ('/'):
 y=x/z;
 document.write('your answer is : '+y);
 break;

 default:
 document.write('you enter incorrect symbol');
}