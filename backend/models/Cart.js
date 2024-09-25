'use strict';
const { Model, UUIDV4 } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      // Define association between cart and product
      Cart.belongsTo(models.Product, {
        foreignKey: 'product_id',
        as: 'product',
      });
      // Define optional association between cart and product_category_master
      Cart.belongsTo(models.ProductCategoryMaster, {
        foreignKey: 'category_id',
        as: 'category',
      });
    }
  }

  Cart.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'id',
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ProductCategoryMaster',
        key: 'id',
      },
      allowNull: true, // Optional, as category can be inferred from the product
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Cart',
    tableName: 'carts',
    timestamps: false, // Since created_at is manually handled
  });

  return Cart;
};
