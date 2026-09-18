//index.js file is must to use any dependencies or write code in node.js. It is the entry point of the application. It is used to import the required modules and start the server.

const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}))
app.set("view engine" , "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: '1234'
});
 

//error method is used to handle the error in the connection. It is used to check if the connection is successful or not. If the connection is successful, it will return the result. If the connection is not successful, it will throw an error.
//

//let q = "SHOW TABLES";

let getRandomUser = () => {

  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(), // password_hash
    faker.internet.password(), // password
  ];

};

// //inserting new data and placeholder is used to prevent SQL injection
// let q = "INSERT INTO users (id, username, email, password_hash, password) VALUES ?,?,?,?";
// let users = ["123","abhishek","abhishekbillionare@truth.com","1234","hvdeiuh"];

let data =[];
for(let i=1;i<=100;i++){
    data.push(getRandomUser());//100 fake users will be generated and inserted into the database. you can change the number of users by changing the value of i in the for loop.
}


//Home Route
app.get("/",(req,res)=>{
  let q = 'SELECT count(*) FROM users;';
  try{
    connection.query(q,[users],(err,result)=>{
    if (err) throw err;
    let count = result[0]["count(*)"];
    res.render("home.ejs", { count });
});

}catch(err){
    console.log(err);
    res.send("some error in datbase connection");
}
});
// //if we don't write connection.end() then the connection will remain open and it will cause memory leak. so it is a good practice to close the connection after the query is executed. it is used to close the connection to the database. It is used to free up the resources and avoid memory leak. It is a good practice to close the connection after the query is executed.
//connection.end();

//});

//Get all users route
app.get("/users",(req,res)=>{
  let q= 'SELECT * FROM users;';
  try{
    connection.query(q,(err,users)=>{
    if (err) throw err;
    //console.log(result);
    //res.send(result);
    res.render("showusers.ejs",{users});
});

}catch(err){
    console.log(err);
    res.send("some error in datbase connection");
}
});


//Edit Route
app.get("/users/:id/edit",(req,res)=>{
  let {id} = req.params;
  let q =`SELECT * FROM users WHERE id = '${id}'`;
  
  try{
    connection.query(q,(err,result)=>{
    if (err) throw err;
    console.log(result);
    res.render("edit.ejs",{user:result[0]});
});

}catch(err){
    console.log(err);
    res.send("some error in datbase connection");
}
});


app.listen("8080",()=>{
  console.log ("server is running on port 8080");
})

//UPDATE (DB)ROUTE
 app.patch("/users/:id",(req,res)=>{
  res.send("updated");
 });


// try{
//     connection.query(q,[data],(err,result)=>{
//     if (err) throw err;
//     console.log(result);
//     console.log(result.length);
// })

// }catch(err){
//     console.log(err);
// }

// //if we don't write connection.end() then the connection will remain open and it will cause memory leak. so it is a good practice to close the connection after the query is executed. it is used to close the connection to the database. It is used to free up the resources and avoid memory leak. It is a good practice to close the connection after the query is executed.
 connection.end();
