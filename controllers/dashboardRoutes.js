const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

console.log("dashboardRoutes.js here");

router.get('/', withAuth, async(req, res) => {
  try {

    const postData = await Post.findAll({
      include: [{ model: User, attributes: ['username'] }]
    });


    const posts = postData.map((post) => post.get({ plain: true }));

    console.log("dashboard render start");
    res.render('dashboard', {   
      layout: 'main', posts,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/create', withAuth, (req, res) => {
  res.render('createPost', { 
    layout: 'main', 
    logged_in: req.session.logged_in 
  });
});

router.get('/edit/:id', withAuth, async(req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User, attributes: ['username'] }]
    });

    const post = postData.get({ plain: true });

    res.render('editPost', { 
      layout: 'main', 
      ...post, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;