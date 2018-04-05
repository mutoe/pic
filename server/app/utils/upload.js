const inspect = require('util').inspect
const path = require('path')
const fs = require('fs')
const Busboy = require('busboy')
const config = require('../../config')

/**
 * 同步创建文件目录
 * @param  {string} dirname 目录绝对地址
 * @return {boolean}        创建目录结果
 */
function mkdirsSync (dirname) {
  if (fs.existsSync(dirname)) {
    return true
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname)
      return true
    }
  }
}

/**
 * 获取上传文件的后缀名
 * @param  {string} fileName 获取上传文件的后缀名
 * @return {string}          文件后缀名
 */
function getSuffixName (fileName) {
  let nameList = fileName.split('.')
  return nameList[nameList.length - 1]
}

/**
 * 上传文件
 * @param  {object} ctx     koa上下文
 * @param  {object} options 文件上传参数 fileType文件类型， path文件存放路径
 * @return {promise}
 */
async function uploadFile (ctx, options) {
  let busboy = new Busboy({ headers: ctx.req.headers })

  // 获取类型
  let fileType = options.fileType || 'common'
  let filePath = path.join(options.path, fileType)

  mkdirsSync(filePath)

  return new Promise((resolve, reject) => {
    console.log('文件上传中...')
    let result = {
      success: false,
      formData: {},
    }

    // 解析请求文件事件
    busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
      let fileName = Math.random().toString(16).substr(2) + '.' + getSuffixName(filename)
      let _uploadFilePath = path.join(filePath, fileName)
      let saveTo = path.join(_uploadFilePath)

      // 文件保存到制定路径
      file.pipe(fs.createWriteStream(saveTo))

      // 文件写入事件结束
      file.on('end', function () {
        result.success = true
        result.filename = fileName
        result.filepath = fileType
      })
    })

    // 解析表单中其他字段信息
    busboy.on('field', function (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
      result.formData[fieldname] = inspect(val)
    })

    // 解析结束事件
    busboy.on('finish', function () {
      resolve(result)
    })

    // 解析错误事件
    busboy.on('error', function (err) {
      console.log('文件上出错')
      console.error(err)
      resolve({ success: false, error: err })
    })

    ctx.req.pipe(busboy)
  })
}

/**
 * 删除文件
 * @param {String} 目标文件路径
 */
async function deleteFile (filePath) {
  const targetPath = path.join(config.uploadPath, filePath)
  return new Promise((resolve, reject) => {
    fs.unlink(targetPath, (err) => {
      if (err) return reject(err)
      resolve()
    })
  })
}

/**
 * 移动文件
 * @param {String} 源文件路径
 * @param {String} 目标文件路径
 */
async function moveFile (from, to) {
  return new Promise((resolve, reject) => {
    fs.rename(from, to, (err) => {
      if (err) return reject(err)
      resolve()
    })
  })
}

module.exports = {
  uploadFile,
  deleteFile,
  moveFile,
}
