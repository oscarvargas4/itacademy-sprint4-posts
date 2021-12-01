const sequelize = require('./db');
const Post = require('../models/Post');
const User = require('../models/User');
const Address = require('../models/Address');
require('../models/associations');

// Users
const users = [
    { name: "Anton", email: "azr@azr.es", age: 18, role: 0 },
    { name: "Pepe", email: "pepe@gmail.com", age: 38, role: 1 },
    { name: "Lucia", email: "lucia@hotmail.com", age: 88, role: 0 },
];

// Addresses
const addresses = [
    { street: "Calle de la vida 2", UserId: 1 },
    { street: "Debajo del puente s/n", UserId: 2 },
    { street: "Isla de Tabarca, 5", UserId: 3 },
];

// Posts
const posts = [
    { title: "Foo", body: "Bar 1", UserId: 1 },
    { title: "Foo", body: "Bar 2", UserId: 1 }, 
    { title: "Title", body: "Bar 3", UserId: 1 },
    { title: "Yo que se", body: "Bar 4", UserId: 1 }, 
    { title: "Me da igual", body: "Bar 5", UserId: 2 }, 
    { title: "Todo", body: "Bar 6", UserId: 2 }, 
    { title: "Foo", body: "Bar 7", UserId: 3 }, 
];


sequelize.sync({ force: false }).then(() => {
    // Successful Connection
    console.log("Successful Connection");
})
// .then(() => {
//     // Fill Users
//     users.forEach(user => User.create(user));
// })
// .then(() => {
//     // Fill Addresses
//     addresses.forEach(address => Address.create(address));
// })
.then(() => {
    // Fill Posts
    posts.forEach(post => Post.create(post));
});