const Router = require('koa-router')
// const userCtrl = require('../ctrls/user')

const router = new Router()

// 注册
router.post('/user', (ctx, next) => {
  const payload = ctx.request.body
  if (Object.keys(payload).length === 0) ctx.throw(400)
  ctx.body = payload
})

// 登陆
router.get('/user/:user_id', (ctx, next) => {
  if (!(ctx.params.user_id > 0)) ctx.throw(400)
  ctx.body = { user_id: ctx.params.user_id }
})

module.exports = router
