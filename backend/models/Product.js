'use strict';
const { Model, UUIDV4 } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.ProductCategoryMaster, {
        foreignKey: 'category_id',
        as: 'category',
      });
      Product.hasMany(models.ProductVariant, {
        foreignKey: 'product_id',
        as: 'variants',
      });
    }
  }

  Product.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ProductCategoryMaster',
        key: 'id',
      },
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    img_url: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    timestamps: false,
  });

  return Product;
};
