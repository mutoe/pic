const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pic',
})

const port = process.env.APP_SERVER_LISTEN_PORT || 3000

connection.connect(err => {
  if (err) return console.error(err)
  console.log('mysql is connected successfully!')
})

const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  ctx.body = 'Hello TimeImage'
})

app.listen(3000, () => {
  console.log(`Koa is running in port 3000 successfully!`)
})
