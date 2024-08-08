'use strict';

const { BelongsTo } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Entries', [{
      id: 0,
      title: 'eternalsunshine',
      body: 'el mejor álbum conceptual de una artista pop :*',
      date: new Date(),
      username: 'moonlightbae',
      belongsTo: 'moonlightbae',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 1,
      title: 'Cinderella',
      body: 'The Divine Femenine su masterpiece...',
      date: new Date(),
      username: 'macmiller',
      belongsTo: 'macmiller',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      title: 'lets be honest',
      body: 'i would never cry to a coldplay song, lets be honest: I AM A MAN *Sparks playing in the background ToT*',
      date: new Date(),
      username: 'coldplay',
      belongsTo: 'coldplay',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Entries', null, {})
  }
};
