const express = require("express");
const app = express();

console.dir(app);

let port = 3000;

 app.listen(port,() => {
    console.log('app is listening on port 3000');
 })

 app.get("/", (req,res)=>{
    res.send("hello, i am abhishek jha");
 });

 app.get("/:username", (req,res)=>{
    console.log(req.params);
    res.send("hello, i am abhishek jha");
 });

 // To exit the server we have to use ctrl+c in the terminal.


//app.use is used to listen to the request and send the response. It is a middleware function that takes two parameters, req and res. The req parameter is the request object that contains information about the HTTP request, such as the request method, headers, and body. The res parameter is the response object that is used to send the HTTP response back to the client.

// app.get("/", (req, res) => {
//     res.send("you contacted the rooot path");

// });

// app.get("/apple", (req, res) => {
//     res.send("you contacted the apple path");
// }); 

// app.get("/banana", (req, res) => {
//     res.send("you contacted the banana path");
// }); 

// app.get("/mango", (req, res) => {
//     res.send("you contacted the mango path");
// });


// * is a wildcard character that matches any path. It is used to catch all requests that do not match any of the defined routes. In this case, it is used to send a response for any request that does not match the root, apple, banana, or mango paths. 
// app.get("*", (req, res) => {
//     res.send("you contacted the wrong path");
// });

// // The app.post() method is used to handle HTTP POST requests. It takes two parameters, the path and a callback function that is executed when a request is made to that path. In this case, it is used to send a response for any POST request made to the root path.
// app.post("/",(req, res) => {
//     res.send("you contacted the root path using post method");
// });

//  app.use((req,res) => {
//     console.log("arzi sunli tumhari bhagwaan ne ab khush rehna uske sath hmesha aur bhulna mat mera aehsaan");
//     // the res.send() method sends the HTTP response.
//     res.send({
//         name: "Abhishek Jha",
//         age: 22,
//     });
//  });


app.get("/search",(req,res) =>{
     let{q} = req.query;
      res.send(`searching for ${q}`);
})