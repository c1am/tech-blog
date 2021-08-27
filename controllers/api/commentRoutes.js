const router = require('express').Router();
const { Comment } = require('../../models');

// Helps check if user has logged in
const withAuth = require('../../utils/auth');

// All of the comments
router.get('/', async(req, res) => {
  try {
    const comment_data = await Comment.findAll();

    res.status(200).json(comment_data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// New comment
router.post('/', withAuth, async(req, res) => {
  try {
    const comment_data = await Comment.create({
      ...req.body,
      userId: req.session.userId
    });
    
    res.status(200).json(comment_data);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Export
module.exports = router;