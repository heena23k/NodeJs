// console.log('welcome here');
// function hello() {
//     console.log("hello,welcome here");
    
    
// }
// hello()

//  const add = require("./add.js")
//  const sum =add(5,8);
//  console.log(sum);
 
// require("./hello")
// console.log("Subscribe to our community");

//  multiple exports 
const imp = require("./add.js")
console.log(imp);
//  to call the key we returen the value
console.log(imp.d);
const data  = require("./example.js")
console.log(data);

//for example 2 file
const msg = require("./example2") 
msg.sayHello()
msg.sayThanks()
