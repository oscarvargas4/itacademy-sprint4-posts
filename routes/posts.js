const express = require('express');
const { findByPk } = require('../database/models/Post');
const router = express.Router();
const Post = require('../database/models/Post');

router.get('/', (req,res) => {
    res.send('Hola');
});

// Create
router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        body: req.body.body
    }).then(post => {
        res.json(post);
    }).catch(error => {
        res.send(error);
    });
});

// Read
router.get('/:id', (req, res) => {
    Post.findByPk(req.params.id).then(post => {
        res.json(post);
    }).catch(error => {
        res.send(error);
    });
});

// Update

// Delete

module.exports = router;