const Post = require('./Post');
const User = require('./User');
const Address = require('./Address');

// One-to-One: User has one Address
User.hasOne(Address);
Address.belongsTo(User);

// One-to-Many: User has many Posts
User.hasMany(Post);
Post.belongsTo(User);