// seed.js
const sequelize = require('./config/db'); // Adjust the path to your DB config
const Product = require('./models/ProductVariant'); // Adjust the path to your Product model

const foodItems = [
    // ['all', 'favourites', 'burger', 'sandwich', 'juice', 'startups', 'milkshake', 'new'
  {
    product_id: 1,
    name:"large",
    is_active:true,
    price:750
  },
  {
    product_id: 1,
    name:"medium",
    is_active:true,
    price:750
  },
  {
    product_id: 1,
    name:"samll",
    is_active:true,
    price:750
  },
];






















const seedProducts = async () => {
  try {
    // Sync the database
    await sequelize.sync();

    // Insert data into the Product table
    for (const item of foodItems) {
      await Product.create(item);
    }

    console.log('Food items added successfully!');
  } catch (error) {
    console.error('Error adding food items:', error);
  } finally {
    // Close the database connection
    await sequelize.close();
  }
};

// Run the seeding function
seedProducts();
