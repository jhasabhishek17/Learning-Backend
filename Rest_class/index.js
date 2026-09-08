const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended:true})); // this line must be written to get the data from the form in the post request

app.set("view engine", "ejs"); // this line must be written to set the view engine to ejs
app.set("views", path.join(__dirname, "views"));// this line must be written to set the views directory to the views folder in the root directory

app.set(express.static(path.join(__dirname,"public")));// this line must be written to set the static files directory to the public folder in the root directory

let posts = [
    {
        username : "Abhishek",
        title : "My first post",
        content : "This is my first post"
    },
    {
        username : "Akshra ",
        title : "My second post",
        content : "This is my second post"
    },
    {
        username : "Maahi",
        title : "My third post",
        content : "This is my third post"
    }
];

app.get("/posts", (req,res) => {
    res.render("index.ejs",{posts});
})

app.listen(port, () => {
    console.log("listening to port : 8080");
})