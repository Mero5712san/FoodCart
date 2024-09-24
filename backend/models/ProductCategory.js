// ProductCategory.js
const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const ProductCategory = sequelize.define('product_category_master', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  is_active: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
}, {
  timestamps: false,
});

// Define associations
ProductCategory.associate = (models) => {
  ProductCategory.hasMany(models.Product, { foreignKey: 'category_id' }); // Ensure this matches the model name
};

module.exports = ProductCategory;
