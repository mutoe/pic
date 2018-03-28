const Koa = require('koa')

const config = require('./config')
const middlewares = require('./middlewares')
const router = require('./routes')

// 创建应用实例
const app = new Koa()

// 挂载中间件
middlewares(app)

// 挂载路由
app.use(router.routes())

// 开启监听端口
app.listen(config.port, () => {
  console.log(`==== Pic Server Start ==== (in port ${config.port})`)
})

// 导出实例
module.exports = app
