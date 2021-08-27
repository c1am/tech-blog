const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
            ...req.body
        });

        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again.' });
            return;
        }

        const valid_password = await userData.checkPassword(req.body.password);

        if (!valid_password) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again.' });
            return;
        }

        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are logged in.'});
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.get('/:id', async(req, res) => {
    try {
      const userData = await User.findByPk(req.params.id);
  
      if (!userData) {
        res.status(404).json({ message: 'There was no user found with that ID.' });
        return;
      }
  
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;