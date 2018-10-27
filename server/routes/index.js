// init router
const Router = require('koa-router')
const router = new Router()

// import routes
const authRouter = require('./auth')

// mount routes
router.use('/auth', authRouter.routes())

// export routes
module.exports = router
