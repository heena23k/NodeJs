// we use the mjs extension if i use the es_module

// import hello from "./example.mjs";
// hello();
// if use more than 1 function 
// --1 st approach 
// import data from './example.mjs'

// console.log(data);

// 2nd approach
import data from "./example.mjs";
const {hello,hii} = data;
hello();
hii();