const { Comment } = require('../models');

const seed_comments = [
        {
        comment: "Wow that's cool!",
        postId: 2,
        userId: 3
        },
        {
        comment: 'This is great, thank you.',
        postId: 1,
        userId: 2
        },
        {
        comment: 'Could you tell me more?',
        postId: 3,
        userId: 4
        },
        {
        comment: 'Astounding.',
        postId: 4,
        userId: 5
        },
        {
        comment: 'Looks good!',
        postId: 5,
        userId: 5
        },
        {
        comment: 'Could I hear more about this?',
        postId: 3,
        userId: 2
        }
    ];

  const commentSeedData = () => Comment.bulkCreate(seed_comments);

  module.exports = commentSeedData;