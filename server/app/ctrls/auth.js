const _ = require('lodash/core')
const userServs = require('../services/user')

const authCtrl = {
  /**
   * 用户注册
   */
  async register (ctx, next) {
    const fields = _.pick(ctx.request.body, ['email', 'username', 'password'])
    if (Object.keys(fields).length !== 3) return Promise.reject({ code: 400, msg: '参数错误' })

    const result = userServs.create(fields)
      .then(userInfo => {
        return Promise.resolve({ code: 201, payload: { user_id: userInfo.user_id } })
      })
      .catch(err => {
        if (err.code) return Promise.reject(err)
        return Promise.reject({ code: 500, payload: err })
      })

    await result
      .then(res => ctx.throw(res))
      .catch(err => ctx.throw(err))
  },

  /**
   * 用户登录
   */
  async login (ctx, next) {
    const fields = _.pick(ctx.request.body, ['email', 'password'])
    if (Object.keys(fields).length !== 2) ctx.throw({ code: 400, msg: '参数错误' })

    const result = userServs.login(fields)
    await result
      .then(res => ctx.throw(res))
      .catch(err => ctx.throw(err))
  },
}

module.exports = authCtrl
