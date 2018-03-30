const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: { type: String, trim: true, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, trim: true, unique: true },
  create_time: { type: Date, default: Date.now },
})

const UserModel = mongoose.model('User', UserSchema)

UserSchema.statics = {

  create (fields) {
    const { email, username, password } = fields
    const user = new UserModel({ email, username, password })
    return user.save()
      .then(() => Promise.resolve(user))
      .catch(err => Promise.reject({
        status: 500,
        message: '数据写入失败',
        payload: err,
      }))
  },

}

module.exports = UserModel
