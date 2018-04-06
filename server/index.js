const Koa = require('koa')
const mount = require('koa-mount')
const serve = require('koa-static')
const mongoose = require('mongoose')

const config = require('./config')
const middlewares = require('./app/middlewares')
const router = require('./app/routes')

mongoose.connect(`${config.mongoUri}`)

// 创建接口实例
const api = new Koa()
middlewares(api)
api.use(router.routes())

// 创建静态服务实例
const uploads = new Koa()
uploads.use(serve('uploads'))

// 挂载实例
const app = new Koa()
app.use(mount('/api', api))
app.use(mount('/uploads', uploads))

/* istanbul ignore if */
if (process.env.NODE_ENV !== 'test') {
  // 启动服务
  app.listen(config.port, () => {
    console.log(`==== Pic Server Start ==== (in port ${config.port})`)
  })
}

// 导出实例 (用于测试)
module.exports = app
