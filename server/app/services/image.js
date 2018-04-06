const imageModel = require('../models/image')

const imageServs = {

  async create (user, fields) {
    const { title, description, list, scope } = fields
    return imageModel.create({
      user_id: user.id,
      title,
      description,
      list,
      scope,
    })
      .then(image => Promise.resolve(image))
      .catch(err => Promise.reject({ code: 500, msg: '数据库写入失败', payload: { err } }))
  },

  async read (imageId) {
    return imageModel.findOne({ _id: imageId })
      .then(image => Promise.resolve(image))
      .catch(err => Promise.reject({ code: 500, payload: { err } }))
  },

  async fetch (filters) {
    if (!filters) filters = {}
    Object.assign(filters, { scope: 'all' })
    return imageModel.find(filters)
      .then(images => Promise.resolve(images))
      .catch(err => Promise.reject({ code: 500, payload: { err } }))
  },

}

module.exports = imageServs
