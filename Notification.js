// models/Notification.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Notification = sequelize.define('Notification', {
  recipient: {
    type: DataTypes.STRING,
    allowNull: false
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false  // 'email', 'sms', 'in-app'
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending'
  }
}, {
  timestamps: true
});

module.exports = Notification;
