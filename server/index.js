const Koa = require('koa')
const BodyParser = require('koa-bodyparser')
const Logger = require('koa-logger')

const config = require('./config')
const router = require('./routes')

// 创建应用实例
const app = new Koa()

app.use(BodyParser())
app.use(Logger())

app.use(async (ctx, next) => {
  await next()
  ctx.set('X-Powered-By', 'Koa2')
})

// 挂载路由
app.use(router.routes())

// 开启监听端口
app.listen(config.port, () => {
  console.log(`==== Pic Server Start ==== (in port ${config.port})`)
})

// 导出实例
module.exports = app
