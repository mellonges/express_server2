const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const User = require("../models/userSchema")

router.delete("/", async (req, res) => {
   const userDelete = req.body
    User.deleteOne(userDelete, async (error, result) => {
        if (error) res.status(500).send(`Ошибка - ${error}`)
        await mongoose.disconnect().then(() => res.send("Пользователь успешно удален из бд"));
        })
    })

module.exports = router
