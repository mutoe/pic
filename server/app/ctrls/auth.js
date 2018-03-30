const _ = require('lodash/core')
const userServs = require('../services/user')

const authCtrl = {
  async retister (ctx) {
    const fields = _.pick(ctx.request.body, ['email', 'username', 'password'])

    await userServs.create(fields)
      .then(userInfo => {
        ctx.status = 201
        ctx.body = userInfo.userId
      })
      .catch(err => {
        ctx.throw(err.status, err.msg, err.payload)
      })
  },
}

module.exports = authCtrl
