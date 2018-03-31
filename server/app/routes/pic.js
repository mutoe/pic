const Router = require('koa-router')
const jwt = require('koa-jwt')
const config = require('../../config')

const router = new Router()

// 创建图片
router.post('/', jwt({ secret: config.jwt.secret }), (ctx, next) => {
  ctx.body = ctx.state
  next()
})

module.exports = router
