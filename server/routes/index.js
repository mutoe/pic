const Router = require('koa-router')

const authRouter = require('./auth')

const router = new Router()

router.prefix('/api')

// 挂载路由
router.use('/auth', authRouter.routes())

module.exports = router
