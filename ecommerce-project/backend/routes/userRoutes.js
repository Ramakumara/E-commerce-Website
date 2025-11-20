const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

router.post("/register", async (req,res)=>{
 const {name,email,password}=req.body;
 const hashed = await bcrypt.hash(password,10);
 await new User({name,email,password:hashed}).save();
 res.json({message:"User registered"});
});

router.post("/login", async (req,res)=>{
 const {email,password}=req.body;
 const user = await User.findOne({email});
 if(!user) return res.json({message:"User not found"});
 const match = await bcrypt.compare(password,user.password);
 if(!match) return res.json({message:"Incorrect password"});
 const token = jwt.sign({userId:user._id, role:user.role},"secret123");
 res.json({message:"Login success",token});
});
module.exports = router;
