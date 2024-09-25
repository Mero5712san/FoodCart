'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('product_category_master', [
      {
        name: 'All',
        is_active: true,
        created_at: new Date()
      },
      {
        name: 'Favourites',
        is_active: true,
        created_at: new Date()
      },
      {
        name: 'Burgers',
        is_active: true,
        created_at: new Date()
      },
      {
        name: 'Sandwiches',
        is_active: true,
        created_at: new Date()
      },
      {
        name: 'Juices',
        is_active: true,
        created_at: new Date()
      },
      {
        name: 'Milkshakes',
        is_active: true,
        created_at: new Date()
      },
      {
        name: 'Starters',
        is_active: true,
        created_at: new Date()
      },
      {
        name: 'New',
        is_active: true,
        created_at: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('product_category_master', null, {});
  }
};
