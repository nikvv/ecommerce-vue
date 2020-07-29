'use strict';

const { encrypt } = require("../helpers/bcrypt");

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
    const dataAdmin = [{
      username: 'admin',
      email: 'admin@mail.com',
      password: encrypt('admin'),
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }]

    await queryInterface.bulkInsert('Users', dataAdmin)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users');
  }
};
