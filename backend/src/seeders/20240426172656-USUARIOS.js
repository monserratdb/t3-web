'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      username: 'moonlightbae',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'macmiller',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'coldplay',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  }
};
