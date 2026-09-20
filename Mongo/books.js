const mongoose = require('mongoose');

main()
 .then(() => {
    console.log("connection successful");
 })

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

// to make any new collection first we have to make new schema
// Below is the first method to write the schema and it is the shorcut

// const bookSchema = new mongoose.Schema({
//   title: String,
//   author: String,
//   price: Number,
// });

const booksSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    author: {
        type:String,
        required: true
    },
    price: {
        type:String,
        required: true
    }

})

const Book = mongoose.model("Book",booksSchema);

let book1 = new Book({
    title: "Mathematics",
    author: "Abhishek Jha",
    price: 4000
});

book1.save().then( res => {
    console.log(res);

}) .catch(err => {console.log(err)});