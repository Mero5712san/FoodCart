const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const ProductCategory = require('./ProductCategory');
const ProductVariant = require('./ProductVariant');

const Product = sequelize.define('products', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category_id: {
    type: Sequelize.INTEGER,
    references: {
      model: ProductCategory,
      key: 'id',
    },
  },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  img_url: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
}, {
  timestamps: false,
});

// Define associations in a separate method
Product.associate = (models) => {
  Product.belongsTo(models.ProductCategory, { foreignKey: 'category_id' });
  Product.hasMany(models.ProductVariant, { foreignKey: 'product_id' });
};

module.exports = Product;
