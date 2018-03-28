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
    await next()
    ctx.set('X-Powered-By', 'Koa2')
  })
}
