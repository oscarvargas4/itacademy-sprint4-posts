const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "This field cannot be null"
            },
            isAlpha: {
                arg: true,
                msg: "The name can only contain letters"
            },
            len: {
                args: [3, 255],
                msg: "The name must be between 3 & 255 characters"
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: {
                args: true,
                msg: "It must be a valid email"
            }
        }
    },
    age: {
        type: DataTypes.INTEGER,
        validate: {
            isInt : {
                args: true,
                msg: "Age must be an Integer"
            },
            min : 1,
            max: 150        
        }
    },
    // 0: User, 1: Admin
    role: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});

module.exports = User;
