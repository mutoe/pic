const Router = require('koa-router')
// const userCtrl = require('../ctrls/user')

const router = new Router()

// 注册
router.post('register', '/user', (ctx, next) => {
  ctx.body = ctx.request.body
})

// 登陆
router.get('login', '/user/:user_id', (ctx, next) => {
  ctx.body = ctx.request.body
})

module.exports = router
