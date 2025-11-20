const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({ userId:String, productId:String, address:String, payment:{type:String,default:"Cash on Delivery"} });
module.exports = mongoose.model("Order", orderSchema);
