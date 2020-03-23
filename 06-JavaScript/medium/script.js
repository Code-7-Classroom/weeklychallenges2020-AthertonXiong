// MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither.
// Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.
var talk = prompt('please write in all caps for shouting or write in all lowercase for whisper or use caps and lowercase for talking normal');
var talk2 = ' is whispering';
var talk3 = ' is shouting';
var talk4 = ' is talking normal';
if (talk !== talk.toUpperCase() && talk !== talk.toLowerCase()) {
    // talking normal
    console.log(talk + talk4)
}
else if (talk === talk.toLowerCase()) {
         console.log(talk + talk2);
}
else { (talk === talk.toUpperCase()) 
     console.log(talk + talk3);
}