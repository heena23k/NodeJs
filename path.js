const path = require('path');
// console.log(__filename);
// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.join('./hello','/hello','file.txt'));
// console.log(path.join('hello','hello','file.txt'));
// console.log(path.join('hello','//hello','file.txt'));


// console.log(path.resolve('./hello','/hello','file.txt'));
// console.log(path.resolve('hello','hello','file.txt'));
// console.log(path.resolve('hello','//hello','file.txt'));



const mypath = require('path'); 
const pathProps = mypath.parse('/foo/bar/node.js'); 
console.log(pathProps);
