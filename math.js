// const sum = (a,b) => a+b;
// const multiply =(a,b) => a*b;
// const g= 9.8;
// const Pi = 3.14159;


//Below is the short hand way of exporting the object without creating a variable obj

// module.exports.sum = (a,b) => a+b;
// module.exports.multiply = (a,b) => a*b;
// module.exports.g = 9.8;
// module.exports.Pi = 3.14159;

// let obj ={
//     sum: sum,
//     multiply:multiply,
//     g:g,
//     Pi:Pi,
// }

// module.exports = obj; //here we are exporting the object obj so that we can use it in other files

// below is the short hand way of exporting the object without creating a variable obj
// module.exports ={
//     sum: sum,
//     multiply:multiply,
//     g:g,
//     Pi:Pi,
// }

// either we have to import or require we cannot use require and improt together in the same file because require is used in common js and import is used in es6 module
// to import the file we have to use the export keyword in the file which we want to import and then we can use the import keyword in the file where we want to use the exported file

export const sum = (a,b) => a+b;
export const multiply =(a,b) => a*b;
export const g= 9.8;
export const Pi = 3.14159;