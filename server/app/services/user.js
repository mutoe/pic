const userModel = require('../models/user')

const userServs = {
  create (fields) {
    const { username, email } = fields

    return new Promise((resolve, reject) => {
      userModel.find({ email })
        .then(user => reject({ code: 400, message: '该邮箱已被注册' }))

      userModel.find({ username })
        .then(user => reject({ code: 400, message: '用户名已存在' }))

      userModel.create(fields)
        .then(user => resolve(user))
        .catch(err => reject(err))
    })
  },
}

module.exports = userServs
