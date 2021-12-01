const express = require("express");
const Address = require("../models/Address");
const Post = require("../models/Post");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res) => {
  User.findAll({
    include: [
      {
        // Includes Foreign keys
        model: Address,
        attributes: ["street"],
      },
      {
        model: Post,
        attributes: ["title", "body"],
        where: {
          title: "Foo",
        },
      },
    ],
    attributes: ["name", "age"], // Atributes that you want to fetch
  })
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.send(error);
    });
});

// User's Address
router.get("/:id/address", (req, res) => {
  User.findByPk(req.params.id).then((user) => {
    user.getAddress().then((address) => {
      res.json(address);
    });
  });
});

// Users' Posts
router.get("/:id/posts", (req, res) => {
  User.findByPk(req.params.id).then((user) => {
    user.getPosts().then((posts) => {
      res.json(posts);
    });
  });
});

router.post("/", (req, res) => {
  User.create(
    {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      Address: {
        street: req.body.street,
      },
    },
    {
      include: Address,
    }
  )
    .then((user) => {
      // ? The code below is optional, you can set the value in the
      // ? Object provided to User.create({object}, {include: Address}) as "Address: { street: req.params.street }"
      // ! Don't forget "{include: Address}"
      // Address.create({ street: req.body.street }).then(street => {
      //   user.setAddress(street).then(() => {
      //     res.json(user);
      //   });
      // })
      res.json(user);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
