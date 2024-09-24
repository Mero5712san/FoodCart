// ProductVariant.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust the path as necessary

class ProductVariant extends Model {}

ProductVariant.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  product_id: {
    type: DataTypes.UUID,
    references: {
      model: 'products', // Ensure this matches the model name defined in Product.js
      key: 'id',
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'product_variants', // Model name
  timestamps: false,
});

// Define associations outside of init
ProductVariant.associate = (models) => {
  ProductVariant.belongsTo(models.Product, { foreignKey: 'product_id' }); // Ensure this matches the model name
};

module.exports = ProductVariant;
