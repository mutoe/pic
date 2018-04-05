const path = require('path')

module.exports = {

  rootPath: path.resolve(__dirname),
  uploadPath: path.join(__dirname, './uploads'),

  // 服务端监听端口
  port: 3001,

  // mongodb uri
  mongoUri: 'mongodb://localhost/pic',

  jwt: {
    secret: 'mutoe-pic-invincible!',
  },

}
