const express = require('express');
const router = express.Router();
const ProductCategory = require('../models/ProductCategory');
const Product = require('../models/Product');
const ProductVariant = require('../models/ProductVariant');

// Get all product categories with products and variants
router.get('/', async (req, res) => {
  try {
    const categories = await ProductCategory.findAll({
      include: [
        {
          model: Product,
          include: [
            {
              model: ProductVariant
            }
          ]
        }
      ]
    });
    res.json(categories);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
