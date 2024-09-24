const Sequelize = require('sequelize');

// Initialize the database connection
const sequelize = new Sequelize('foodcart_db', 'root', 'mero5712', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port : 3306,
});

module.exports = sequelize;
