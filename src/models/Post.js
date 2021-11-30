const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Post = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT
    }
});

module.exports = Post;