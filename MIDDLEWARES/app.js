const express = require("express");
const app = express();
const expressError = require("./expressError")


// //Middleware always exists whether the path exists or not 
// app.use((req,res,next)=>{
//     // let {query} = req.query; // in this code we send the through page it get the output in the terminal 
//     // console.log(query);
//     console.log("Hi, I am middleware");
//     //res.send("middleware finished") // the middleware works only two things either send the response then execution stops or second it calls the next operation
//     next();//this next help us to move forward with the other operations
// });

//Middlewares has the powers and the authority to add new things in the req object or to manipulate the req object
//Middleware only works when the it can access before the req,res . Genrally we have to write the middlewares before the code not after the code it doesn't work if we write the middlewares after the code

// Logger - morgan
// app.use((req,res,next) =>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname , req.path , req.time);
//     next();
// });

//By the adding of token we cannot access the data without entering the token for ex: if we want to access some data we have set the token that user must be login without login it they can't access the data 
// app.use("/api",(req,res,next)=>{
//     let{token} =req.query;
//     if (token === "giveaccess") {
//         next();
//     }
//     res.send("ACCESS DENIED");
// });

//Here we made the above token as function 
const checkToken = (req,res,next)=>{
    let{token} =req.query;
    if (token === "giveaccess") {
        next();
    }
    // res.send("ACCESS DENIED");
    throw new expressError(401,"ACCESS DENIED");//CUSTOM ERROR
};


//Error Handling
app.get("/err",(req,res)=>{
    abcd=abcd;
});

app.get("/admin",(req,res)=>{
    throw new expressError(403,"Access to admin is forbidden");
});

// app.use((err,req,res,next) =>{
//     console.log("-------ERROR------");
// //  next(err);// calling error handling middlewares
//     next();//calling normal middlewares
// })

app.use((err,req,res,next) =>{
    let {status,message} = err;
    res.status(status).send(message);
});

app.get("/api",checkToken,(req,res) =>{
    res.send("data");
})


app.get("/",(req,res) =>{
    res.send("Hi,I am root");
});

app.get("/random",(req,res) =>{
    res.status(404).send("this is a random page");
});

//404
app.use((req,res) =>{
    res.send("Page not found");
});



app.listen(8080,() =>{
    console.log("server is listening to port 8080");
})