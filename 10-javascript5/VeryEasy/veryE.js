var answer1 = 'var- is a global scope and can be accessed anywhere. var variables can be updated and re-declared within its scope';
let answer2 = 'let- is a blocked scope and the variable for let can be reassigned. Also let is can only be used in the block that is assigned in and nowhere else. let variables can be updated but not re-declared';
const answer3 = 'const- is a blocked scope and the variable can not be changed. Trying to reassign a constant variable will result in a TypeError. const variables can neither be updated nor re-declared.';

console.log(answer1);
console.log(answer2);
console.log(answer3);