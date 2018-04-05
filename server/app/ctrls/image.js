
const { uploadFile } = require('../utils/upload')
const config = require('../../config')

const imageCtrl = {
  async upload (ctx, next) {
    const options = {
      fileType: 'tmp',
      path: config.uploadPath,
    }
    const { success, error, filename } = await uploadFile(ctx, options)

    if (success) ctx.throw({ code: 201, payload: { filename } })

    else ctx.throw({ code: 500, payload: { error } })
  },
}

module.exports = imageCtrl
