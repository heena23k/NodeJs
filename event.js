// function fun1(){
//     console.log("I am fun 1");

// }

// function fun2(){
//     console.log("I am fun2");

// }
// function fun3(){
//     console.log("I am fun 3");

// }

// fun1();
// fun2();
// fun3();

const fs = require("fs");
// fs.readFile(__filename, () => {
//   console.log("I am file");
// });

// process.nextTick(() => console.log("I am process"));
// Promise.resolve().then(() => console.log(console.log("this is promise")));
// })
// using settimeout

setTimeout(()=>{
    console.log('I am set Timeout')},2000);
    fs.readFile(__filename,()=>{
        console.log("I am file");
        
    })

    
