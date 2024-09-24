// scripts/syncDB.js
const sequelize = require('../config/db'); // Adjust the path if necessary
const Product = require('../models/Product');
const ProductCategory = require('../models/ProductCategory');
const Cart = require('../models/Cart')
const ProductVariant = require('../models/ProductVariant')
// Import other models as needed

const syncDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Sync all models
    await sequelize.sync({ force: true }); // Use { alter: true } if you don't want to drop tables
    console.log('All models were synchronized successfully.');

    process.exit(0);
  } catch (error) {
    console.error('Error syncing the database:', error);
    process.exit(1);
  }
};

syncDB();
