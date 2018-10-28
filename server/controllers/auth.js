const Controller = require('./index')
const UserService = require('../services/user')

class AuthCtrl extends Controller {
  /**
   * register
   *
   * @author mutoe <mutoe@foxmail.com>
   * @static
   * @param {*} ctx
   * @param {function} next
   * @memberof AuthCtrl
   */
  static async register (ctx, next) {
    const { username, password } = ctx.request.body

    try {
      const result = await UserService.create(username, undefined, password)
      ctx.body = result
    } catch (err) {
      console.error(err)
      ctx.throw(err)
    }
  }
}

module.exports = AuthCtrl
