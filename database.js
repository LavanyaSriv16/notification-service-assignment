const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './notifications.sqlite',
});

module.exports = sequelize;
