const KoaBody = require('koa-body')
const Logger = require('koa-logger')

module.exports = app => {
  // body parser
  app.use(KoaBody())

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

      if (err.code && typeof err.code === 'number') {
        ctx.status = err.code
        ctx.body = {
          message: err.msg,
          ...err.payload,
        }
      } else {
        console.error(err)
        ctx.status = err.status
        ctx.body = {
          message: err.message,
          stack: err.stack,
        }
        if (process.env.NODE_ENV !== 'production') {
          ctx.body.stack = err.stack
        }
      }
    }
  })
}
