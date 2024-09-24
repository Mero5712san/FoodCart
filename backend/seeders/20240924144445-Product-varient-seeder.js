'use strict';

// Import the uuid library
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    
    const products = await queryInterface.sequelize.query(
      `SELECT id FROM products;`
    );
    
    const productRows = products[0]; // Grabs the product IDs

    // Step 2: Map over the products to create 3 variants per product
    const variants = productRows.map(product => {
      return [
        {
          id: uuidv4(), // Use uuidv4() for generating UUID
          product_id: product.id,
          name: 'Small',
          is_active: true,
          created_at: new Date(),
          price: Math.random() * 50 + 5  // Random price between 5 and 55
        },
        {
          id: uuidv4(), // Use uuidv4() for generating UUID
          product_id: product.id,
          name: 'Medium',
          is_active: true,
          created_at: new Date(),
          price: Math.random() * 50 + 8  // Random price between 8 and 58
        },
        {
          id: uuidv4(), // Use uuidv4() for generating UUID
          product_id: product.id,
          name: 'Large',
          is_active: true,
          created_at: new Date(),
          price: Math.random() * 50 + 10 // Random price between 10 and 60
        }
      ];
    }).flat(); // Flatten the array of arrays

    // Step 3: Insert all the variants into the 'product_variants' table
    await queryInterface.bulkInsert('product_variants', variants, {});
  },

  async down (queryInterface, Sequelize) {
    // Step 4: Remove the inserted variants when undoing the seeder
    await queryInterface.bulkDelete('product_variants', null, {});
  }
};
