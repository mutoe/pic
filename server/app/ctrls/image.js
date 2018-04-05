const { uploadFile } = require('../utils/upload')
const config = require('../../config')
const imageServs = require('../services/image')

const imageCtrl = {
  /**
   * 上传图片
   * 将图片先上传至临时目录, 待保存实例后将图片由临时目录移入归档目录
   */
  async upload (ctx, next) {
    const options = {
      fileType: 'tmp',
      path: config.uploadPath,
    }
    const { success, error, filename } = await uploadFile(ctx, options)

    if (success) ctx.throw({ code: 201, payload: { filename } })

    else ctx.throw({ code: 500, payload: { error } })
  },

  /**
   * 创建印象实例
   */
  async create (ctx, next) {
    const fields = ctx.request.body
    if (fields.list.length === 0) return ctx.throw({ code: 400, msg: '请至少上传一张图片' })

    // TODO: 重复提交检查

    const user = ctx.state.user
    const result = imageServs.create(user, fields)
      .then(image => Promise.resolve({ code: 201, payload: { image } }))
      .catch(err => Promise.reject(err))

    await result
      .then(res => ctx.throw(res))
      .catch(err => ctx.throw(err))

    // TODO: 移动图片文件

  },
}

module.exports = imageCtrl
