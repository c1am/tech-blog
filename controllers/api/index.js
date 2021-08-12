const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = ('./postRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;