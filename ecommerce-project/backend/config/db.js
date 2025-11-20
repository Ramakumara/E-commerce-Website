const mongoose = require("mongoose");

const connectDB = async () => {
    try { await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce"); console.log("MongoDB Connected"); }
    catch (e) { console.log(e); }
};
module.exports = connectDB;
