const mongoose = require('mongoose')
const crypto = require('crypto')

const UserSchema = new mongoose.Schema({
  email: { type: String, trim: true, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, trim: true, unique: true },
  create_time: { type: Date, default: Date.now },
})

// 使用 setter 将用户输入的明文密码 sha1 之后存储
UserSchema.path('password').set(function (v) {
  let shasum = crypto.createHash('sha1')
  shasum.update(v)
  return shasum.digest('hex')
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
