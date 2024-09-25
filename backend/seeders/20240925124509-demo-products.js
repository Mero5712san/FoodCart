'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        id: Sequelize.literal('UUID()'),
        name: 'Classic Burger',
        category_id: 41, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'https://www.eatingwell.com/thmb/UY5N-tQKYgA91XJBwiolc_1nbJ0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3757723-7c4020ccc47240138323b9bc5b730e8d.jpg',
      },
      {
        id: Sequelize.literal('UUID()'),
        name: 'Cheese Sandwich',
        category_id: 44, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'https://www.sargento.com/assets/Uploads/Recipe/Image/burger_0.jpg',
      },
      {
        id: Sequelize.literal('UUID()'),
        name: 'Fresh Orange Juice',
        category_id: 45, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8jG6wRlt4ftSCKawftxxgayByDUJG7W2JQ&s',
      },
      {
        id: Sequelize.literal('UUID()'),
        name: 'Chocolate Milkshake',
        category_id: 46, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'https://www.sharmispassions.com/wp-content/uploads/2012/07/chocolate-milkshake1.jpg',
      },
      {
        id: Sequelize.literal('UUID()'),
        name: 'Veggie Burger',
        category_id: 41, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'http://example.com/images/veggie_burger.jpg',
      },
      {
        id: Sequelize.literal('UUID()'),
        name: 'BBQ Chicken Sandwich',
        category_id: 44, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'https://amandacooksandstyles.com/wp-content/uploads/2020/03/20190427_203853-3.jpg',
      },
      {
        id: Sequelize.literal('UUID()'),
        name: 'Strawberry Milkshake',
        category_id: 46, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'https://foodwithfeeling.com/wp-content/uploads/2021/06/strawberry-milkshake-9.jpg',
      },
      {
        id: Sequelize.literal('UUID()'),
        name: 'Caesar Salad',
        category_id: 41, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg',
      },
      {
        id: Sequelize.literal('UUID()'),
        name: 'Mango Lassi',
        category_id: 45, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZhunnl1ajQE9QZhj8h4o6FXsanf8cc2Fgng&s',
      },
      {
        id: Sequelize.literal('UUID()'),
        name: 'Chocolate Brownie',
        category_id: 41, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'https://thecreativecottage.net/wp-content/uploads/2015/03/brownie-dessert-cake-sweet-45202.jpeg',
      },
      {
        id: Sequelize.literal('UUID()'),
        name: 'Fruit Smoothie',
        category_id: 45, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'https://cookingformysoul.com/wp-content/uploads/2022/05/triple-berry-smoothie-feat-min-500x500.jpg',
      },
      {
        id: Sequelize.literal('UUID()'),
        name: 'Spicy Chicken Wings',
        category_id: 41, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNFPB3KX2z4IeuqqK80zdknHSll5u78QnoKg&s',
      },
      {
        id: Sequelize.literal('UUID()'),
        name: 'Cheese Pizza',
        category_id: 41, // Use the actual ID from product_category_master
        created_at: new Date(),
        img_url: 'https://www.yummytummyaarthi.com/wp-content/uploads/2015/11/chicken-pizza-1.jpeg',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
