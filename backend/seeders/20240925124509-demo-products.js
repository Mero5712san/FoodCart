'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        id: Sequelize.literal('UUID()'),
        name: 'Classic Burger',
        category_id: 1, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'http://example.com/images/classic_burger.jpg',
      },
      {
        id: Sequelize.literal('UUID()'),
        name: 'Cheese Sandwich',
        category_id: 4, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'http://example.com/images/cheese_sandwich.jpg',
      },
      {
        id: Sequelize.literal('UUID()'),
        name: 'Fresh Orange Juice',
        category_id: 5, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'http://example.com/images/orange_juice.jpg',
      },
      {
        id: Sequelize.literal('UUID()'),
        name: 'Chocolate Milkshake',
        category_id: 6, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'http://example.com/images/chocolate_milkshake.jpg',
      },
      {
        id: Sequelize.literal('UUID()'),
        name: 'Veggie Burger',
        category_id: 1, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'http://example.com/images/veggie_burger.jpg',
      },
      {
        id: Sequelize.literal('UUID()'),
        name: 'BBQ Chicken Sandwich',
        category_id: 4, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'http://example.com/images/bbq_chicken_sandwich.jpg',
      },
      {
        id: Sequelize.literal('UUID()'),
        name: 'Strawberry Milkshake',
        category_id: 6, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'http://example.com/images/strawberry_milkshake.jpg',
      },
      {
        id: Sequelize.literal('UUID()'),
        name: 'Caesar Salad',
        category_id: 1, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'http://example.com/images/caesar_salad.jpg',
      },
      {
        id: Sequelize.literal('UUID()'),
        name: 'Mango Lassi',
        category_id: 5, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'http://example.com/images/mango_lassi.jpg',
      },
      {
        id: Sequelize.literal('UUID()'),
        name: 'Chocolate Brownie',
        category_id: 1, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'http://example.com/images/chocolate_brownie.jpg',
      },
      {
        id: Sequelize.literal('UUID()'),
        name: 'Fruit Smoothie',
        category_id: 5, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'http://example.com/images/fruit_smoothie.jpg',
      },
      {
        id: Sequelize.literal('UUID()'),
        name: 'Spicy Chicken Wings',
        category_id: 1, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'http://example.com/images/spicy_chicken_wings.jpg',
      },
      {
        id: Sequelize.literal('UUID()'),
        name: 'Cheese Pizza',
        category_id: 1, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'http://example.com/images/cheese_pizza.jpg',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
