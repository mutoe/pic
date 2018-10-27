// init router
const Router = require('koa-router')
const router = new Router()

// define routes
router.post('/login', async ctx => {
  ctx.body = 'successfully!'
})

// export router
module.exports = router
