'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Insert data into product_category_master table with the given categories
    return queryInterface.bulkInsert('product_category_masters', [
      {
        name: 'all',
        is_active: true,
        created_at: new Date()
      },
      {
        name: 'favourites',
        is_active: true,
        created_at: new Date()
      },
      {
        name: 'burger',
        is_active: true,
        created_at: new Date()
      },
      {
        name: 'sandwich',
        is_active: true,
        created_at: new Date()
      },
      {
        name: 'juice',
        is_active: true,
        created_at: new Date()
      },
      {
        name: 'startups',
        is_active: true,
        created_at: new Date()
      },
      {
        name: 'milkshake',
        is_active: true,
        created_at: new Date()
      },
      {
        name: 'new',
        is_active: true,
        created_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // Delete all entries from product_category_master
    return queryInterface.bulkDelete('product_category_masters', null, {});
  }
};
