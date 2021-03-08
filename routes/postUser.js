const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const User = require("../models/userSchema")


router.post("/user", (req, res) => {
    try {
        if (!req.body) {
            res.status(400)
            console.log("Ошибка 400");
        }
        const {firstName, lastName, email} = req.body;
        const user = new User({firstName, lastName, email})
        console.log(user);
        user.save((err) => {
            if (err) {
                res.status(500).json("ай бля все полетело")
                console.log(err);
            }
            mongoose.disconnect().then(() => {
                console.log('отключились от бд')
            });
        })
    } catch (e) {
        res.status(401)

    }
});

module.exports = router;