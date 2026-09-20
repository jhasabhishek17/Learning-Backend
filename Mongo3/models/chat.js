const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
     from:{
        type: String,
        required: true
     },
     to:{
        type: String,
        required: true
     },
      msg:{
        type: String,
        maxlength: 50
     },
      created_at:{
        type: Date,
        required: true

     },
});

// now our chat schema is ready and now we are going to create the model 

const chat = mongoose.model("Chat",chatSchema);
module.exports = chat
