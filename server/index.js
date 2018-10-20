const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  ctx.body = 'Hello TimeImage'
})

app.listen(3000, () => {
  console.log(`Koa is running in port 3000 successfully!`)
})
