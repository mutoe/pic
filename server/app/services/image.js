const imageModel = require('../models/image')

const imageServs = {

  async create (user, fields) {
    const { title, description, list, scope } = fields
    console.log(user)
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
}

module.exports = imageServs
