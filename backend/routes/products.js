const express = require('express');
const router = express.Router();
const { ProductCategoryMaster, Product, ProductVariant } = require('..');

// GET /products - Fetch nested product data
router.get('/products', async (req, res) => {
  try {
    // Fetch all categories
    const categories = await ProductCategoryMaster.findAll({
      include: {
        model: Product,
        as: 'products',
        include: {
          model: ProductVariant,
          as: 'variants',
        },
      },
    });

    // Structure the response
    const result = categories.map((category) => {
      return {
        id: category.id,
        name: category.name,
        is_active: category.is_active,
        created_at: category.created_at,
        products: category.products.map((product) => {
          return {
            id: product.id,
            name: product.name,
            category_id: product.category_id,
            created_at: product.created_at,
            img_url: product.img_url,
            variants: product.variants.map((variant) => {
              return {
                id: variant.id,
                name: variant.name,
                price: variant.price,
                is_active: variant.is_active,
                created_at: variant.created_at,
              };
            }),
          };
        }),
      };
    });

    res.json(result);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

module.exports = router;
