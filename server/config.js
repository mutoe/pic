require('dotenv').config()
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

  oss: {
    dirPath: process.env.OSS_DIR_PATH || 'uploads/',
    uri: process.env.OSS_URI,
    accessKeyId: process.env.OSS_KEY_ID,
    accessKeySecret: process.env.OSS_KEY_SECRET,
    callbackHost: process.env.OSS_CB_HOST,
    callbackPort: process.env.OSS_CB_PORT || 80,
    callbackPath: process.env.OSS_CB_PATH,
    expAfter: process.env.OSS_EXPIRE || 60 * 60 * 1000, // ms
    maxSize: process.env.OSS_MAX_SIZE || 8 * 1024 * 1024, // Byte
  },

}
