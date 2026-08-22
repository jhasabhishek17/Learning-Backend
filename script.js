// let n = 5;

// for (let i =0;i<n;i++){
//     console.log( "hello akshuu",i);

// }

// console.log("monday sab thik ho jayega");


// let args = process.argv;

// for(let i=2; i<args.length; i++){
//     console.log("hello akshuu", args[i]);

// }

//  how to use different file fucntion 

// so we use module.exports

// const math = require("./math"); //here require keyword is used to impprt the file math.js and store the value in somevalue variable 

// console.log(math);

// console.log(math.sum(2,2));


// const info = require("./Fruits");

// console.log(info);

 // now we are going to import the file using import keyword in es6 module

 import {sum, multiply, g, Pi} from "./math.js";

console.log(sum (1,2));