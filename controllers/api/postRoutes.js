const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const new_post = await Post.create({
            ...req.body,
            userId: req.session.userId,
        });

        res.status(200).json(new_post);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const post_data = await Post.destroy({
            where: {
                id: req.params.id,
                userId: req.session.userId,
            },
        });

        if (!post_data) {
            res.status(404).json({ message: 'No post found with this ID.' });
            return;
        }
    }
});