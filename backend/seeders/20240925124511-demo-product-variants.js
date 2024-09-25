'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Fetch all products from the database
    const products = await queryInterface.sequelize.query(
      'SELECT id, name FROM products',
      { type: Sequelize.QueryTypes.SELECT }
    );

    // Map product names to their UUIDs for easy access
    const productMap = {};
    products.forEach(product => {
      productMap[product.name] = product.id; // Using product name as key
    });

    // Prepare the variants data
    const variants = [
      {
        product_id: productMap['Classic Burger'], // Replace with actual product name
        name: 'Small',
        price: 5.99,
      },
      {
        product_id: productMap['Classic Burger'],
        name: 'Medium',
        price: 7.99,
      },
      {
        product_id: productMap['Classic Burger'],
        name: 'Large',
        price: 9.99,
      },
      {
        product_id: productMap['Cheese Sandwich'],
        name: 'Small',
        price: 3.49,
      },
      {
        product_id: productMap['Cheese Sandwich'],
        name: 'Medium',
        price: 5.49,
      },
      {
        product_id: productMap['Cheese Sandwich'],
        name: 'Large',
        price: 7.49,
      },
      {
        product_id: productMap['Fresh Orange Juice'],
        name: 'Small',
        price: 2.00,
      },
      {
        product_id: productMap['Fresh Orange Juice'],
        name: 'Medium',
        price: 3.50,
      },
      {
        product_id: productMap['Fresh Orange Juice'],
        name: 'Large',
        price: 4.50,
      },
      {
        product_id: productMap['Chocolate Milkshake'],
        name: 'Small',
        price: 2.99,
      },
      {
        product_id: productMap['Chocolate Milkshake'],
        name: 'Medium',
        price: 4.99,
      },
      {
        product_id: productMap['Chocolate Milkshake'],
        name: 'Large',
        price: 5.99,
      },
    ];

    // Insert the variants into the database
    await queryInterface.bulkInsert('product_variants', variants.map(variant => ({
      id: Sequelize.literal('UUID()'),
      product_id: variant.product_id,
      name: variant.name,
      is_active: true,
      created_at: new Date(),
      price: variant.price,
    })));
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('product_variants', null, {});
  }
};
