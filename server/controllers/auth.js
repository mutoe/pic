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
      // check user unique
      const user = await UserService.findUser({ username })
      if (user) return Promise.reject({ code: 422, message: 'ExistUserError', error: { username } })

      // create user
      const result = await UserService.create(username, undefined, password)
      ctx.body = result
    } catch (err) {
      ctx.throw(err)
    }
  }
}

module.exports = AuthCtrl
