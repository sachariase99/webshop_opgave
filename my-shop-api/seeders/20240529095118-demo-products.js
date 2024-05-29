'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Product 1',
        description: 'Description for product 1',
        price: 99.99,
        imageUrl: 'http://example.com/product1.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Tilføj flere produkter her
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
