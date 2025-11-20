const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

router.get("/", async (req,res)=>{ res.json(await Product.find()); });

router.post("/add", async (req,res)=>{
 await new Product(req.body).save();
 res.json({message:"Product added"});
});
module.exports = router;
