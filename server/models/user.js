const Utils = require('../utils')

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      validate: { len: [2, 16], notIn: ['admin', 'root'] },
    },
    email: {
      type: DataTypes.STRING,
      validate: { isEmail: true },
    },
    password: {
      type: DataTypes.STRING,
      validate: { len: [6, 16] },
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
  user.associate = function (models) {
    // associations can be defined here
  }

  user.hook('afterValidate', (user, options) => {
    user.password = Utils.cryptoPassword(user.password)
  })

  return user
}
