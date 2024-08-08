'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    static associate(models) {
      // define association here
      Entry.belongsTo(models.User, { 
        foreignKey: 'username',
        as: 'user' 
      });
    }
  };
  Entry.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    date: DataTypes.DATE,
    username: DataTypes.STRING
  },
   {
    sequelize,
    modelName: 'Entry',
  });
  return Entry;
};