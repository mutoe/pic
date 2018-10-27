// 加载 dotenv 配置信息
require('dotenv').config()

// 创建 koa 实例
const Koa = require('koa')
const router = require('./routes')

const app = new Koa()

app
  .use(router.routes())
  .use(router.allowedMethods())

// 启动
const port = process.env.APP_SERVER_LISTEN_PORT || 3001
app.listen(port, () => {
  console.log(`Koa is running in port ${port} successfully!`)
})
