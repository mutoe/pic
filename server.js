const Koa = require('koa')

const app = new Koa()

app.use(async next => {
  let start = new Date()
  await next
  let ms = new Date() - start
  console.log(`${this.method} ${this.url} - ${ms}ms`)
})

app.once('error', (err, ctx) => {
  console.log('server error', err)
})

app.listen(3001, () => {
  console.log('Koa is listening in port 3001...')
})

module.exports = app
