const express = require("express");
const router = express.Router();
const Address = require("../models/Address");

router.get("/", (req, res) => {
  Address.findAll()
    .then((addresses) => {
      res.json(addresses);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.post("/", (req, res) => {
  Address.create({
    street: req.body.street,
    UserId: req.body.UserId,
  })
    .then((address) => {
      res.json(address);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
