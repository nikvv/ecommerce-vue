'use strict';

const productData =  [
  {
        "name": "Trust Nobody",
        "image_url": "https://imgur.com/94IZMS8.jpg",
        "price": "110000",
        "stock": "10",
        "createdAt": new Date(),
        "updatedAt": new Date()
  },
  {
        "name": "You Should be On My Bed",
        "image_url": "https://i.imgur.com/1n3gZbj.jpg",
        "price": "110000",
        "stock": "10",
        "createdAt": new Date(),
        "updatedAt": new Date()
  },
  {
        "name": "Mrs. Rabbit Loves to Slit",
        "image_url": "https://imgur.com/P2y0C2i.jpg",
        "price": "110000",
        "stock": "10",
        "createdAt": new Date(),
        "updatedAt": new Date()
  },
  {
        "name": "Human Doesn't Bite",
        "image_url": "https://imgur.com/NdZ4K0R.jpg",
        "price": "110000",
        "stock": "10",
        "createdAt": new Date(),
        "updatedAt": new Date()
  },
  {
        "name": "I Owe You Nothing",
        "image_url": "https://imgur.com/1NWzhav.jpg",
        "price": "110000",
        "stock": "10",
        "createdAt": new Date(),
        "updatedAt": new Date()
  }

  
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Products', productData)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
