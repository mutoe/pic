const _ = require('lodash/core')
const userServs = require('../services/user')

const authCtrl = {
  async register (ctx, next) {
    const fields = _.pick(ctx.request.body, ['email', 'username', 'password'])
    if (Object.keys(fields).length !== 3) {
      return ctx.throw(400)
    }

    const result = await userServs.create(fields)
    result.then(userInfo => {
      ctx.status = 201
      ctx.body = userInfo.userId
    }).catch(err => {
      if (err.status) return ctx.throw(err)
      ctx.throw({ status: 500, payload: err })
    })

    await next()
  },

  async login (ctx, next) {},
}

module.exports = authCtrl
