// In our Models we are going to store our all the models and in user.js we are going to write the code of it


const mongoose = require("mongoose");
const{Schema} = mongoose; //it will come from mongoose after restructure

main().then(() => console.log("connection successful"))
       .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

}

// Below we define user schema and now we can create our model by using that schema
const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String,
        },
    ],
});

const User = mongoose.model("User",userSchema);

const addUsers = async() => {
    let user1= new User({
        username: "Sherlock homes",
        addresses: [{
            location: "2221 Baker street",
            city: "London"
        }]
    });
    user1.addresses.push({location:"P32, Wallstreet", city:"London"});
    let result = await user1.save();
    console.log(result);;
};

addUsers();