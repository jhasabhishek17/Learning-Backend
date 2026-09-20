const mongoose = require('mongoose');

main()
 .then(() => {
    console.log("connection successful");
 })

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

//Below all the keys start with capital note that
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// const User = mongoose.model("User", userSchema);

// const user1 = new User({
//   name: "Abhishek",
//   email:"shubha@gmail.com",
//   age: 22,
// });

// user1.save();

User.find({})
  .then((res) => {
    console.log(err);
})
.catch((err) => {
  console.log(err);
});