const _ = require('lodash/core')
const userServs = require('../services/user')

const authCtrl = {
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

  async login (ctx, next) {},
}

module.exports = authCtrl
