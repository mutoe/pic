const Koa = require('koa')

const config = require('./config')
const router = require('./routes')

// 创建应用实例
const app = new Koa()

// 挂载路由
app.use(router.routes())

// 开启监听端口
app.listen(config.port, () => {
  console.log(`Pic server is listening in ${config.port}...`)
})

// 导出实例
module.exports = app
