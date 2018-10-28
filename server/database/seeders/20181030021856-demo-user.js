'use strict'
const Utils = require('../../utils')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      username: 'admin',
      password: Utils.cryptoPassword('admin!@#'),
      created_at: new Date(),
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  },
}
