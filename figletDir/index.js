const figlet = require('figlet');

figlet("Hello Akshuu!!", function (err, data) {
  if (err) {
    console.log("Everything will be fine..");
    console.dir(err);
    return;
  }
  console.log(data);
});