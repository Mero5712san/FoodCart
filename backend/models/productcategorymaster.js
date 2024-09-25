'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductCategoryMaster extends Model {
    static associate(models) {
      ProductCategoryMaster.hasMany(models.Product, {
        foreignKey: 'category_id',
        as: 'products',
      });
    }
  }

  ProductCategoryMaster.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'ProductCategoryMaster',
    tableName: 'product_category_master',
    timestamps: false,
  });

  return ProductCategoryMaster;
};
