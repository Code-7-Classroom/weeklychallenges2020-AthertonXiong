//MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. 
//For example: if the user enters the number 3, then it should return the month “March.” 
//Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

var monthNumber = parseInt(prompt('Please enter a number in between 1-12'));
var month = ['NOT a month', 'January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December' ];


( 12 >= monthNumber && monthNumber >= 1 )
   ? alert(`Month number ${monthNumber} is ${month[monthNumber]}`)
   : alert(`You've entered an invalid value. What you entered is ${month[0]}. Please Refresh and type the given values from the prompt.`);