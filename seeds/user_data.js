const { User } = require('../models');

const seed_users = [
  {
    username: 'Username1',
    password: 'Password1',
  },
  {
    username: 'Username2',
    password: 'Password2',
  },
  {
    username: 'Username3',
    password: 'Password3',
  },
  {
    username: 'Username4',
    password: 'Password4',
  },
  {
    username: 'Username5',
    password: 'Password5',
  }
];

const user_data = () => User.bulkCreate(seed_users, {
  individualHooks: true
});

module.exports = user_data;