'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    // Insert the food items into the products table
    return queryInterface.bulkInsert('products', [
      {
        id: uuidv4(),
        name: 'Classic Burger',
        category_id: 3, // Assuming 'burger' has ID 3
        created_at: new Date(),
        img_url: 'https://imgs.search.brave.com/_TaZc4KEUJYO5cSIbbHXQxaqQKPitNw2CK_rGtr9qYg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgy/NzQ0OTQzL3Bob3Rv/L2J1cmdlci5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9cGky/MElpZVhmOFVOazZT/ZUp5LWNIeHViYVZE/N0w1Um53MmkwUW84/dk55TT0'
      },
      {
        id: uuidv4(),
        name: 'Cheese Burger',
        category_id: 3,
        created_at: new Date(),
        img_url: 'https://www.gettyimages.com/photos/cheeseburger'
      },
      {
        id: uuidv4(),
        name: 'Veggie Burger',
        category_id: 3,
        created_at: new Date(),
        img_url: 'https://www.inspiredtaste.net/36554/veggie-burger-recipe/'
      },
      {
        id: uuidv4(),
        name: 'Chicken Sandwich',
        category_id: 4, // Assuming 'sandwich' has ID 4
        created_at: new Date(),
        img_url: 'https://www.indianhealthyrecipes.com/mayo-chicken-sandwich-recipe/'
      },
      {
        id: uuidv4(),
        name: 'Club Sandwich',
        category_id: 4,
        created_at: new Date(),
        img_url: 'https://www.istockphoto.com/photos/club-sandwich'
      },
      {
        id: uuidv4(),
        name: 'Orange Juice',
        category_id: 5, // Assuming 'juice' has ID 5
        created_at: new Date(),
        img_url: 'https://www.freepik.com/free-photos-vectors/orange-juice'
      },
      {
        id: uuidv4(),
        name: 'Apple Juice',
        category_id: 5,
        created_at: new Date(),
        img_url: 'https://www.gettyimages.ca/photos/apple-juice'
      },
      {
        id: uuidv4(),
        name: 'Chocolate Milkshake',
        category_id: 6, // Assuming 'milkshake' has ID 6
        created_at: new Date(),
        img_url: 'https://www.bbcgoodfood.com/recipes/chocolate-milkshake'
      },
      {
        id: uuidv4(),
        name: 'Vanilla Milkshake',
        category_id: 6,
        created_at: new Date(),
        img_url: 'https://www.vegrecipesofindia.com/vanilla-milkshake/'
      },
      {
        id: uuidv4(),
        name: 'Caesar Salad',
        category_id: 7, // Assuming 'startups' has ID 7
        created_at: new Date(),
        img_url: 'https://www.istockphoto.com/photos/caesar-salad'
      },
      {
        id: uuidv4(),
        name: 'Greek Salad',
        category_id: 7,
        created_at: new Date(),
        img_url: 'https://www.loveandlemons.com/greek-salad/'
      },
      {
        id: uuidv4(),
        name: 'Fruit Salad',
        category_id: 7,
        created_at: new Date(),
        img_url: 'https://www.istockphoto.com/photos/fruit-salad'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // Delete the inserted products from the products table
    return queryInterface.bulkDelete('products', null, {});
  }
};
