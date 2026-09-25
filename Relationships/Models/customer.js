const mongoose = require("mongoose");
const{Schema} = mongoose; //it will come from mongoose after restructure

main().then(() => console.log("connection successful"))
       .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

}


const orderSchema = new Schema({
    item: String,
    price: Number,
});


//customer schema
const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
});

// below is the model for customer schema

const Order = mongoose.model("Order",orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async() => {
    let cust1 = new Customer({
        name: "Abhishek Jha",
    });

    let order1 = await Order.findOne({item: "Chips"});
    let order2 = await Order.findOne({item: "samosa"});

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let result = await cust1.save();
    console.log(result);

};

addCustomer();


//const Order = mongoose.model("Order",orderSchema);

// Below code is to add the orders and customer  and above that we define our order schema

//order schema
// const addOrders = async () =>{
//     let res = await Order.insertMany([
//         {item: "samosa", price: 15},
//         {item: "chocolate", price: 245},
//         {item: "Chips", price: 25},
//     ]);
//     console.log(res);
// };

// addOrders();


