// init router
const Router = require('koa-router')
const router = new Router()
const AuthCtrl = require('../controllers/auth')

// define routes
router.post('/login', async ctx => {
  ctx.body = ctx.request.body
})

router.post('/register', AuthCtrl.register)

// export router
module.exports = router
