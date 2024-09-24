const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Cart = sequelize.define('cart', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  product_id: {
    type: Sequelize.UUID,
    references: {
      model: 'products',
      key: 'id',
    },
  },
  category_id: {
    type: Sequelize.INTEGER,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  total_price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = Cart;
