// 加载 dotenv 配置信息
require('dotenv').config()

// 创建 koa 实例
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router
  .get('/', ctx => {
    ctx.body = 'hello koa router'
  })
  .get('/mysql', ctx => {
    ctx.body = 'hello mysql'
  })

app
  .use(router.routes())
  .use(router.allowedMethods())

// 启动
const port = process.env.APP_SERVER_LISTEN_PORT || 3001
app.listen(port, () => {
  console.log(`Koa is running in port ${port} successfully!`)
})
