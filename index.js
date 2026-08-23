//EJS - Embedded JavaScript templates


const express = require("express");//here express is a function and we are calling it to create an instance of express app.
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname,"/public/js"))); // here express.static by default it is available to all the files in public file
app.use(express.static(path.join(__dirname,"/public/css")));
//app.set("views", "./views"); & view engine is set to ejs by default, so we don't need to set it explicitly unless we want to change the views directory.
// (view engine expect) in views folder we can store all the templates and we can use them in our routes.
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views")) // here we are setting the views directory to the views folder in the current directory. __dirname is a global variable that returns the directory name of the current module. path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.



// Below is the instagram route where we are using the username parameter in the url and we are using it in the template instagram.ejs. We are using the res.render() method to render the template and we are passing the username parameter to the template as a variable. In the template we can use the variable username to display the username in the template.
app.get("/ig/:username",(req,res) => {
    let {username } = req.params;
      const instaData = require("./data.json");
      const data = instaData[username];
      if(data){
      res.render("instagram.ejs",{data}); // here we are passing the username to the template instagram.ejs as a variable username.
      
      } else{
        res.render("error.ejs");
      }
      console.log(data);

    });



app.get("/", (req, res) => {
    //res.send("Hello World");
    res.render("home.ejs"); // here res.render knows that home.ejs is in views folder by default , so we don't need to give the path of the file.
});

app.get("/hello", (req, res) => {
    res.send("hello, i am abhishek jha");
});


//Below is the route for rolling a dice. We are generating a random number between 1 and 6 and passing it to the template rolldice.ejs as a variable num. In the template we can use the variable num to display the value of the dice.
app.get("/rolldice", (req, res) => {
    let diceval = Math.floor(Math.random() * 6) +1;
    res.render("rolldice.ejs",{diceval}); // here we are passing the value of dicevalue to the template rolldice.ejs as a variable num.
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

