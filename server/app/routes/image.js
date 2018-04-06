const Router = require('koa-router')
const jwt = require('koa-jwt')
const config = require('../../config')
const imageCtrl = require('../ctrls/image')

const router = new Router()

// 上传图片
router.post('/upload', jwt({ secret: config.jwt.secret }), imageCtrl.upload)

router.post('/', jwt({ secret: config.jwt.secret }), imageCtrl.create)

router.get('/:id', imageCtrl.read)

module.exports = router
