const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Address = sequelize.define('Address', {
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UserId: {
        type: DataTypes.INTEGER
    }
});

module.exports = Address;