const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({extended:true})); // this line must be written to get the data from the form in the post request
app.use(methodOverride("_method")); // this line must be written to use the method override to use the patch request


app.set("view engine", "ejs"); // this line must be written to set the view engine to ejs
app.set("views", path.join(__dirname, "views"));// this line must be written to set the views directory to the views folder in the root directory

app.use(express.static(path.join(__dirname,"public")));// this line must be written to set the static files directory to the public folder in the root directory

let posts = [
    {
        id: uuidv4(),
        username : "Abhishek",
        title : "My first post",
        content : "This is my first post"
    },
    {
        id: uuidv4(),
        username : "Akshra ",
        title : "My second post",
        content : "This is my second post"
    },
    {
        id: uuidv4(),
        username : "Maahi",
        title : "My third post",
        content : "This is my third post"
    }
];

app.get("/posts", (req,res) => {
    res.render("index.ejs",{posts});
});

//Below code is for the new post form
app.get("/posts/new", ( req, res) => {
    res.render("new.ejs");
});

//Below code is for the post request to add a new post
app.post("/posts",(req,res) => {
    let {username,content} = req.body;
    let newId = uuidv4();
    posts.push({id,username,content});
    //res.send("post request working");
    res.redirect("/posts");// redirecting to the posts page after adding a new post
});

app.get("/posts/:id",(req,res) =>{
    let {id } = req.params;
    let post = posts.find((post) => post.id == id);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("show.ejs",{post});
});

// Patch request to update a post
app.patch("/posts/:id",(req,res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((post) => post.id == id);
     if (!post) {
        return res.status(404).send("Post not found");
    }
    post.content = newContent;
    console.log(newContent);
    console.log(posts);
    res.redirect("/posts");
});

//below code is for the edit post form
app.get("/posts/:id/edit",(req,res) => {
    let {id} = req.params;
    let post = posts.find(post => post.id == id);
    res.render("edit.ejs",{post});
})

// Delete request to delete a post
app.delete("/posts/:id",(req,res) => {
    let {id} = req.params;
    posts = posts.filter(post => post.id != id);
    res.redirect("/posts");
})

app.listen(port, () => {
    console.log("listening to port : 8080");
})