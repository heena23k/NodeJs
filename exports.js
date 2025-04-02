// ------- using exports ------
// exports.sayHello = function(){
//     console.log("Hello");
    
// }
// exports.sayThanks = function(){
//     console.log("thanku");
    
// }

// --------using module exports ----------

// exports.sayHello=function(){
//     console.log("Hello word!");
    
// }
// module.exports.sayThanks = function(){
//     console.log("Thank you");
    
// }

// module.exports.sayBye = function(){
//     console.log("Bye bye ");
    
// }

// console.log(module);


exports.sayHello = 'Hello word';
function sayThanks(){
    console.log('Thank yoy');
    
}
module.exports = sayThanks;
console.log(module);
