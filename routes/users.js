const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const users = require("./../models/userSchema")


/* GET users listing. */
router.get('/', async (req, res, next) => {
 await users.find({}, async (err, data) => {
   await mongoose.disconnect()
  if (err) res.send("Ошибка на сервере");

   res.send(data);
 })
});

module.exports = router;
