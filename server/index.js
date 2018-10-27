// 加载 dotenv 配置信息
require('dotenv').config()

// 创建 koa 实例
const Koa = require('koa')
const app = new Koa()
const port = process.env.APP_SERVER_LISTEN_PORT || 3000

app.use(ctx => {
  ctx.body = 'Hello TimeImage'
})

app.listen(port, () => {
  console.log(`Koa is running in port ${port} successfully!`)
})
