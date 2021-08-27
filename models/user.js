const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    }
  },

  {
    hooks: {
      beforeCreate: async (new_user) => {
        new_user.password = await bcrypt.hash(new_user.password, 10);
        return new_user;
      },
      beforeUpdate: async (updated_user) => {
        updated_user.password = await bcrypt.hash(updated_user.password, 10);
        return updated_user;
      },
    },
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;