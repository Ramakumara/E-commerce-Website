const express = require("express");
const User = require("../models/User");
const Order = require("../models/Order");
const router = express.Router();

router.get("/customers", async (req,res)=>{ res.json(await User.find({role:"user"})); });
router.get("/orders", async (req,res)=>{ res.json(await Order.find()); });

module.exports = router;
