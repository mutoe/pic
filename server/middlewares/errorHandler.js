module.exports = () => async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    if (err.code && typeof err.code === 'number') {
      // 应用抛出异常
      ctx.status = err.code
      const message = err.name || err.message
      ctx.body = { message, ...err }
    } else {
      // 系统异常
      console.error(err)
      ctx.status = err.status || 500
      ctx.body = {
        message: err.message,
      }
      if (process.env.NODE_ENV !== 'production') {
        ctx.body.stack = err
      }
    }
  }
}
