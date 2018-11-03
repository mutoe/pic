// load dotenv configuration
const envPath = process.env.NODE_ENV === 'development' ? '.env' : '.env.test'
require('dotenv').config({ path: envPath, silent: true })

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

// bootstrap application and export app instance for API test
const port = process.env.SERVER_LISTEN_PORT || 3001
module.exports = app.listen(port, () => {
  console.log(`Koa is running in port ${port} successfully!`)
})
