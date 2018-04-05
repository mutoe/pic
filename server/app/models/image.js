const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { ObjectId } = Schema.Types

const ImageSchema = new Schema({
  user_id: { type: ObjectId, ref: 'User', required: true },
  title: { type: String },
  description: { type: String },
  list: [{
    filename: String,
    name: String,
    size: Number,
  }],
  scope: { type: String, enum: ['all', 'friends', 'private'], default: 'all', required: true },
  create_time: { type: Date, default: Date.now },
  update_time: { type: Date },
})

// 使用 middleware 每次保存都记录一下最后更新时间
ImageSchema.pre('save', function (next) {
  this.update_time = Date.now()
  next()
})

const ImageModel = mongoose.model('Image', ImageSchema)

module.exports = ImageModel
