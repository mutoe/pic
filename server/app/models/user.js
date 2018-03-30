const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: { type: String, trim: true, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, trim: true, unique: true },
  create_time: { type: Date, default: Date.now },
})

const UserModel = global.db.model('User', UserSchema)

UserSchema.statics = {

  async create (fields) {
    return new Promise((resolve, reject) => {
      const { email, username, password } = fields
      const user = new UserModel({
        email,
        username,
        password,
      })
      user.save(err => {
        if (err) return reject(err)
        resolve(user)
      })
    })
  },

}

module.exports = UserModel
