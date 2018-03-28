const Router = require('koa-router')

const authRouter = require('./auth')

const router = new Router()

// 挂载路由
router.use('/auth', authRouter.routes())

module.exports = router
