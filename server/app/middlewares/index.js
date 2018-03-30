const BodyParser = require('koa-bodyparser')
const Logger = require('koa-logger')

module.exports = app => {
  // body parser
  app.use(BodyParser())

  /* istanbul ignore if: logger not running in the test env */
  if (process.env.NODE_ENV !== 'test') {
    // logger
    app.use(Logger())
  }

  // others
  app.use(async (ctx, next) => {
    try {
      ctx.set('x-powered-by', 'Koa2')
      await next()
    } catch (err) {
      ctx.set('x-powered-by', 'Koa2')
      ctx.status = err.status
      // ctx.message = err.message
      ctx.body = {
        message: err.message,
        payload: err.payload,
      }
    }
  })
}
