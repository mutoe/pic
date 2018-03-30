const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: { type: String, trim: true, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, trim: true, unique: true },
  create_time: { type: Date, default: Date.now },
})

const UserModel = mongoose.model('User', UserSchema)

UserSchema.statics = {

  /**
   * 创建用户
   * @param {{email: String, username: String, password: String}} fields 创建用户所需字段
   */
  async create (fields) {
    const { email, username, password } = fields
    const user = new UserModel({ email, username, password })
    return user.save()
      .then(() => Promise.resolve(user))
      .catch(err => Promise.reject({
        code: 500,
        msg: '数据写入失败',
        payload: err,
      }))
  },

}

module.exports = UserModel
