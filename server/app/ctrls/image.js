const path = require('path')
const upload = require('../utils/upload')
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
    const { success, error, filename } = await upload.uploadFile(ctx, options)

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
      // 创建成功后将文件从临时目录移入归档目录
      .then(image => moveFiles(image))
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

/**
 * 创建成功后移动文件
 */
async function moveFiles (image) {
  const promises = []
  for (let file of image.list) {
    const oldPath = path.join(config.uploadPath, 'tmp', file.filename)
    const newPath = path.join(config.uploadPath, 'images', file.filename)
    const promise = upload.moveFile(oldPath, newPath)
    promises.push(promise)
  }
  return Promise.all(promises)
    .then(() => Promise.resolve(image))
    .catch(err => Promise.reject(err))
}

module.exports = imageCtrl
