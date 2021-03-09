const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const User = require("../models/userSchema")


router.post("/user", async (req, res) => {
    try {
        if (!req.body) {
            await res.status(400)
            await res.send("в теле post ошибка");
        }
        const {firstName, lastName, email} = req.body;
        const user =  new User({firstName, lastName, email})
        await user.save((err) => {
            if (err) res.status(500).json("ай бля все полетело")
            mongoose.disconnect().then(() => res.status(200).send("Все ок, сохранилось"))
            });
    } catch (e) {
        res.status(400).send("еще какая-то ошибка")

    }
});

module.exports = router;