const Service = require('./index')
const UserModel = require('../models').user
const { Op } = require('../models').Sequelize

class UserService extends Service {
  /**
   * create a user
   *
   * @author mutoe <mutoe@foxmail.com>
   * @static
   * @param {string} [username]
   * @param {string} [email]
   * @param {string} [password]
   * @returns
   * @memberof UserService
   */
  static async create (username, email, password) {
    return UserModel.create({ username, email, password })
      .catch(err => Promise.reject({ code: 422, ...err }))
  }

  /**
   * find the user accroding to user information.
   *
   * @author mutoe <mutoe@foxmail.com>
   * @static
   * @param {Object} condition
   * @param {number} [condition.id]
   * @param {string} [condition.username]
   * @param {string} [condition.email]
   * @returns
   * @memberof UserService
   */
  static async findUser ({ id, username, email }) {
    const filter = []
    if (id) filter.push({ id })
    if (username) filter.push({ username })
    if (email) filter.push({ email })
    if (!filter.length) return Promise.reject({ code: 422, message: 'ParameterInputError' })

    const result = await UserModel.findOne({
      where: {
        [Op.or]: filter,
      },
    })
    return result
  }
}

module.exports = UserService
