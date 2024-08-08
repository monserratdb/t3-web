'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.Entry, { foreignKey: 'username', as: 'entries' });
    }
  };
  User.init({
    username: {type: DataTypes.STRING,
    primaryKey: true}
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};