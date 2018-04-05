const Router = require('koa-router')

const authRouter = require('./auth')
const picRouter = require('./image')

const router = new Router()

router.prefix('/api')

// 挂载路由
router.use('/auth', authRouter.routes())

router.use('/image', picRouter.routes())

module.exports = router
