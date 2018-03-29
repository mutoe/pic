const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: { type: String, trim: true, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, trim: true, unique: true },
  create_time: { type: Date, default: Date.now },
})

const User = mongoose.model('User', UserSchema)

module.exports = User
