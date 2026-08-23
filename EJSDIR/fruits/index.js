// this file is created to acquire all the information of other files and export it to the main file

const apple = require("./apple");
const mango = require("./mango");
const orange = require("./orange");

let fruits = [ apple, mango, orange];
module.exports = fruits; //here we are exporting the array fruits so that we can use it in other files