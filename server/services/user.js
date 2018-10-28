const Service = require('./index')
const UserModel = require('../models').user

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
  }
}

module.exports = UserService
