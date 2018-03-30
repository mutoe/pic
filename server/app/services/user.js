const userModel = require('../models/user')

const userServs = {
  /**
   * 创建用户业务
   * @param {{username: String, email: String, password: String}} fields
   * @return {Promise}
   */
  create (fields) {
    const { username, email } = fields

    // 遍历两个字段 (username, email), 检查字段是否已存在
    const promises = [{ email }, { username }].map(item => {
      // Object.keys(item)[0] 用来获取 item 对象的第一个键名
      const key = Object.keys(item)[0]
      return userModel.findOne(item)
        .then(user => {
          // 如果查询到的结果总没有找到该字段, resolve 掉这个 Promise
          if (Object.keys(user || {}).length === 0) return Promise.resolve()
          // 否则 reject 给上游, 附带提示信息
          return Promise.reject({
            status: 400,
            message: `${key} 已存在`,
            payload: { type: 'field_exist', content: key },
          })
        })
    })

    // 并发检查
    return Promise.all(promises)
      // 如果检查通过, 调用创建用户的模型方法并返回一个 Promise
      .then(() => userModel.create(fields))
      // 如果用户创建成功, resove 掉本次业务逻辑
      .then(user => Promise.resolve(user))
      // 捕获以上所有错误
      .catch(err => Promise.reject(err))
  },
}

module.exports = userServs
