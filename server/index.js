// load dotenv configuration
require('dotenv').config()

// create koa instance
const Koa = require('koa')
const app = new Koa()

// mount koa middlewares
const koaBody = require('koa-body')
const router = require('./routes')
const errorHandler = require('./middlewares/errorHandler')
app
  .use(errorHandler())
  .use(koaBody({ multipart: true }))
  .use(router.routes())
  .use(router.allowedMethods())

// bootstrap application
const port = process.env.APP_SERVER_LISTEN_PORT || 3001
app.listen(port, () => {
  console.log(`Koa is running in port ${port} successfully!`)
})
