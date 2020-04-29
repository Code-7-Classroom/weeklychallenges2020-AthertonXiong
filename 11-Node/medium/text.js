// fs module to access physical file system
// The fs module is responsible for all the asynchronous or synchronous file I/O operations.
const fs = require('fs');

// created to log the text file and if text file not found it will show error
const readText = (err, file) => {
    if (err) console.log('Error you messed up Nathan Cha', err);
    else console.log('Result:',file);
}

//  readFile() are asynchronous and return immediately while they function in the background.
// You pass a callback function which gets called when they finish.
// The utf8 is reading the text file and outputing the characters of the text file and if utf8 is not used it will not be able to read the characters.
// readText is used to console log the text file using a function
fs.readFile('text.txt', 'utf8', readText);