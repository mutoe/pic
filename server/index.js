// 加载 dotenv 配置信息
require('dotenv').config()

// 连接 mysql
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USERNAME || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'pic',
})

connection.connect(err => {
  if (err) return console.error(err)
  console.log('mysql is connected successfully!')
})

// 创建 koa 实例
const Koa = require('koa')
const app = new Koa()
const port = process.env.APP_SERVER_LISTEN_PORT || 3000

app.use(ctx => {
  ctx.body = 'Hello TimeImage'
})

app.listen(port, () => {
  console.log(`Koa is running in port ${port} successfully!`)
})
