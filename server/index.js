const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = Router()

router.get('/', async ctx => {
  ctx.body = 'hello world'
})

router.all('*', async ctx => {
  ctx.throw(404)
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3001)

module.exports = app
