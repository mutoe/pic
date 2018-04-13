const _ = require('lodash/core')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const config = require('../../config')
const userServs = require('../services/user')

const authCtrl = {
  /**
   * 用户注册
   */
  async register (ctx, next) {
    const fields = _.pick(ctx.request.body, ['email', 'username', 'password'])
    if (Object.keys(fields).length !== 3) return Promise.reject({ code: 400, msg: '参数错误' })

    const result = userServs.create(fields)
      .then(user => {
        // 签发 JSON Web Token 用于保存登录状态
        const userToken = { id: user._id, email: user.email }
        const token = jwt.sign(userToken, config.jwt.secret, { expiresIn: '24h' })

        return Promise.resolve({ code: 201, payload: { email: user.email, token } })
      })
      .catch(err => {
        if (err.code) return Promise.reject(err)
        return Promise.reject({ code: 500, payload: err })
      })

    await result
      .then(res => ctx.throw(res))
      .catch(err => ctx.throw(err))
  },

  /**
   * 用户登录
   */
  async login (ctx, next) {
    const fields = _.pick(ctx.request.body, ['email', 'password'])
    if (Object.keys(fields).length !== 2) ctx.throw({ code: 400, msg: '参数错误' })

    // 检查密码是否匹配
    const { email, password } = fields
    const result = userServs.cryptoCheck(email, password)
      .then(user => {
        // 签发 JSON Web Token 用于保存登录状态
        const userToken = { id: user._id, email: user.email }
        const token = jwt.sign(userToken, config.jwt.secret, { expiresIn: '24h' })

        return Promise.resolve({ code: 200, payload: { email, token } })
      })
      .catch(err => Promise.reject(err))

    await result
      .then(res => ctx.throw(res))
      .catch(err => ctx.throw(err))
  },

  /**
   * 生成 OSS 签名
   */
  ossSign (ctx, next) {
    const oss = config.oss
    const host = oss.uri + '/'
    const expireTime = new Date().getTime() + oss.expAfter
    const expiration = new Date(expireTime).toISOString()
    const policyString = JSON.stringify({
      expiration,
      conditions: [
        ['content-length-range', 0, oss.maxSize],
        ['starts-with', '$key', oss.dirPath],
      ],
    })
    const policy = Buffer.from(policyString).toString('base64')
    const Signature = crypto.createHmac('sha1', oss.accessKeySecret).update(policy).digest('base64')
    const callbackBody = {
      'callbackUrl': `http://${oss.callbackHost}:${oss.callbackPort}/${oss.callbackPath}`,
      'callbackHost': `${oss.callbackHost}`,
      // eslint-disable-next-line no-template-curly-in-string
      'callbackBody': '{"filename": ${object},"size": ${size}}',
      'callbackBodyType': 'application/json',
    }
    const callback = Buffer.from(JSON.stringify(callbackBody)).toString('base64')
    ctx.throw({
      code: 200,
      payload: {
        Signature,
        policy,
        host,
        'OSSAccessKeyId': oss.accessKeyId,
        'success_action_status': 200,
        'dirPath': oss.dirPath,
        callback,
      },
    })
  },

  /**
   * OSS 回调
   */
  ossCallback (ctx, next) {
    ctx.throw({
      code: 200,
      payload: {
        result: ctx.request.body,
      },
    })
  },

}

module.exports = authCtrl
