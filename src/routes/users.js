const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post('/', (req, res) => {
    User.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    }).then(post => {
        res.json(post);
    }).catch(error => {
        res.send(error);
    });
});


module.exports = router;