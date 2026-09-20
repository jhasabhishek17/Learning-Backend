const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const chat = require("./models/chat.js");

main().then(() => {
    console.log("connection successful");
 })

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}


let allChats = [
{
    from: "neha",
    to: "priya",
    msg: "send your exam sheets",
    created_at: new Date(),
},
{
    from: "rohit",
    to: "neha",
    msg: "send your",
    created_at: new Date(),
},
{
    from: "shubh",
    to: "akshra",
    msg: "exam sheets",
    created_at: new Date(),
},
{
    from: "akshra",
    to: "shubh",
    msg: "send sheets",
    created_at: new Date(),
},
];

Chat.insertMany(allChats);