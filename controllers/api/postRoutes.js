const router = require('express').Router();
const { Post } = require('../../models');

// Help check if user is logged
const withAuth = require('../../utils/auth');

// GET all posts
router.get('/', async(req, res) => {
  try {
    const postData = await Post.findAll();

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one post by id
router.get('/:id', withAuth, async(req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (!postData) {
      res.status(404).json({ message: 'Unable to find a post with this id.' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE new post
router.post('/', withAuth, async(req, res) => {
  try {
    const postData = await Post.create({
      ...req.body,
      userId: req.session.userId
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE post by id
router.put('/:id', withAuth, async(req, res) => {
  try {
    const postData = await Post.update(
      {
        title: req.body.title,
        content: req.body.content
      },
      {
        where: {
          id: req.params.id
        }
      }
    );
  
    if (!postData) {
      res.status(404).json({ message: 'Unable to find a post with this id.' });
      return;
    }
  
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE post by id
router.delete('/:id', withAuth, async(req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id
      }
    });
  
    if (!postData) {
      res.status(404).json({ message: 'Unable to find a post with this id.' });
      return;
    }
  
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;