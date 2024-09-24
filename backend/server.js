// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/db');
const Cart = require('./models/Cart');
const Product = require('./models/Product');
const ProductCategory = require('./models/ProductCategory');
const ProductVariant = require('./models/ProductVariant');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sync database and set associations
sequelize.sync({ alter: true })
  .then(() => {
    // Register associations
    Product.associate({ ProductVariant, ProductCategory });
    ProductVariant.associate({ Product });
    ProductCategory.associate({ Product });
    console.log('Database synced');
  })
  .catch(err => console.error('Error syncing database:', err));

// Mount routes
app.use('/api/products', require('./routes/products'));

// Route to add an item to the cart
app.post('/api/cart', async (req, res) => {
  const { product_id, category_id, quantity, total_price } = req.body;
  try {
    const cartItem = await Cart.create({ product_id, category_id, quantity, total_price });
    res.status(201).json(cartItem);
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
