const Router = require('koa-router')

const authRouter = require('./auth')
const picRouter = require('./pic')

const router = new Router()

router.prefix('/api')

// 挂载路由
router.use('/auth', authRouter.routes())

router.use('/pic', picRouter.routes())

module.exports = router
