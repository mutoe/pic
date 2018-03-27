const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  ctx.body = 'hello world'
})

app.listen(3001, () => {
  console.log('Pic server is listening in port 3001...')
})
