const crypto = require('crypto')
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
            payload: { type: 'field_exist', field: key },
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
          .catch(err => Promise.reject({ code: 500, msg: '数据写入失败', payload: { err } }))
      })
      // 如果用户创建成功, resove 掉本次业务逻辑
      .then(user => Promise.resolve(user))
      // 捕获以上所有错误
      .catch(err => Promise.reject(err))
  },

  /**
   * 用户密码校验
   * @param {String} email 用户邮箱
   * @param {String} password 待校验原始密码
   */
  async cryptoCheck (email, password) {
    // 尝试寻找指定 email 的用户
    return userModel.findOne({ email })
      .then(user => {
        // 如果找到这个用户 交给下一个 then 处理
        if (user) return Promise.resolve(user)

        // 找不到就交给 catch 返回上游
        return Promise.reject({ code: 400, msg: '该邮箱不存在', payload: { email } })
      })
      .then(user => {
        // 将用户输入的密码进行 sha1 加密
        const cryptoPassword = crypto.createHash('sha1').update(password).digest('hex')

        // 与数据库保存的 sha1 摘要比对
        if (user.password === cryptoPassword) return Promise.resolve(user)

        // 不匹配就交给 catch 返回上游
        return Promise.reject({ code: 400, msg: '用户密码不匹配', payload: { email } })
      })
      .catch(err => Promise.reject(err))
  },
}

module.exports = userServs
