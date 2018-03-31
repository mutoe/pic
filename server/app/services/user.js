const userModel = require('../models/user')

const userServs = {
  /**
   * 创建用户业务
   * @param {{username: String, email: String, password: String}} fields
   */
  async create (fields) {
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
            code: 400,
            msg: `${key} 已存在`,
            payload: { type: 'field_exist', content: key },
          })
        })
    })

    // 并发检查
    return Promise.all(promises)
      // 如果检查通过, 调用创建用户的模型方法并返回一个 Promise
      .then(() => {
        // 字段过滤
        const { email, password, username } = fields
        return userModel.create({ email, password, username })
      })
      // 如果用户创建成功, resove 掉本次业务逻辑
      .then(user => Promise.resolve(user))
      // 捕获以上所有错误
      .catch(err => Promise.reject({ code: 500, msg: '数据写入失败', payload: err }))
  },

  /**
   * 用户登陆业务
   * @param {{email: String, password: String}} fields 用户名和密码
   */
  async login (fields) {
    const { email, password } = fields

    return userServs.cryptoCheck(email, password)
      .then(() => Promise.resolve({ code: 200 }))
      .catch(err => Promise.reject(err))
  },

  /**
   * 用户密码校验
   * @param {String} email 用户邮箱
   * @param {String} password 待校验原始密码
   */
  async cryptoCheck (email, password) {
    return userModel.findOne({ email })
      .then(user => {
        if (user) return Promise.resolve(user)
        return Promise.reject({ code: 400, msg: '该邮箱不存在', payload: { email } })
      })
      .then(user => {
        if (user.password === password) return Promise.resolve()
        else return Promise.reject({ code: 400, msg: '用户密码不匹配', payload: { email } })
      })
      .catch(err => Promise.reject(err))
  },
}

module.exports = userServs
