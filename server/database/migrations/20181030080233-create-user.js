'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING(32),
      },
      email: {
        type: Sequelize.STRING(80),
      },
      password: {
        type: Sequelize.STRING(64),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    }, {
      indexes: [
        {
          unique: true,
          fields: ['email'],
        },
        {
          unique: true,
          fields: ['username'],
        },
      ],
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  },
}
