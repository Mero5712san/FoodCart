const express = require('express');
const cors = require('cors'); // Import the cors module
const db = require('./models'); // This imports all models
const app = express();
const PORT = 3000;

// Use CORS middleware
app.use(cors());

// Middleware and routes
app.get('/products', async (req, res) => {
  try {
    const categories = await db.ProductCategoryMaster.findAll({
      include: {
        model: db.Product,
        as: 'products',
        include: {
          model: db.ProductVariant,
          as: 'variants'
        }
      }
    });

    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Sync models and start server
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
