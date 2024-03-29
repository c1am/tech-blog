const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'userId'
});

Post.hasMany(Comment, {
    foreignKey: 'postId'
})

User.hasMany(Comment, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    hooks:true
});

Post.belongsTo(User, {
    foreignKey: 'userId'
});

Comment.belongsTo(User, {
    foreignKey: 'userId'
});

Comment.belongsTo(Post, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

module.exports = { User, Post, Comment };