const express = require("express");
const { findByPk } = require("../models/Post");
const router = express.Router();
const Post = require("../models/Post");

// List all posts
router.get("/", (req, res) => {
  Post.findAll()
    .then((posts) => {
      res.json(posts);
    })
    .catch((error) => {
      res.send(error);
    });
});

// Create
router.post("/", (req, res) => {
  Post.create({
    title: req.body.title,
    body: req.body.body,
  })
    .then((post) => {
      res.json(post);
    })
    .catch((error) => {
      res.send(error);
    });
});

// Read
router.get("/:id", (req, res) => {
  Post.findByPk(req.params.id)
    .then((post) => {
      res.json(post);
    })
    .catch((error) => {
      res.send(error);
    });
});

// Read asyn/await
// router.get('/:id', async (req, res) => {
//     try {
//         const post = await Post.findByPk(req.params.id);
//         res.json(post);
//     } catch (error) {
//         res.send(error);
//     }
// })

// Update
router.patch("/:id", (req, res) => {
  Post.update(
    {
      title: req.body.title,
      body: req.body.body,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((post) => {
      res.send(`Post updated! Rows afected:${post}`);
    })
    .catch((error) => {
      res.send(error);
    });
});

// Delete
router.delete("/:id", (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((post) => {
      res.send(`Post id: ${req.params.id} deleted. Rows afected: ${post}`);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
