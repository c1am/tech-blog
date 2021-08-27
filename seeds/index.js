const user_data = require('./user_data');
const post_data = require('./post_data');
const comment_data = require('./comment_data');

const sequelize = require('../config/connection');

const seed = async () => {
  await sequelize.sync({ force: true });
  console.log('\nDB Sync\'d.\n');
  
  await user_data();
  console.log('User seed populated.\n');

  await post_data();
  console.log('Post seed populated.\n');

  await comment_data();
  console.log('Comment seed populated.\n');

  process.exit(0);
};

// invocation
seed();