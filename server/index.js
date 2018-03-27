const Koa = require('koa')
const Router = require('koa-router')

const config = require('./config')

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

app.listen(config.port, () => {
  console.log(`Pic server is listening in ${config.port}...`)
})

module.exports = app
