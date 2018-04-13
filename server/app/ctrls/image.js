const imageServs = require('../services/image')

const imageCtrl = {

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
  },

  async read (ctx, next) {
    const imageId = ctx.params.id

    const result = imageServs.read(imageId)
      .then(image => Promise.resolve({ code: 200, payload: { image } }))

    await result
      .then(res => ctx.throw(res))
      .catch(err => ctx.throw(err))
  },

  async fetchAll (ctx, next) {
    const result = imageServs.fetch()
      .then(images => Promise.resolve({ code: 200, payload: { images } }))

    await result
      .then(res => ctx.throw(res))
      .catch(err => ctx.throw(err))
  },

}

module.exports = imageCtrl
