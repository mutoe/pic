const Router = require('koa-router')
const jwt = require('koa-jwt')
const config = require('../../config')
const imageCtrl = require('../ctrls/image')

const router = new Router()

router.post('/', jwt({ secret: config.jwt.secret }), imageCtrl.create)

router.get('/:id', imageCtrl.read)

router.get('/', imageCtrl.fetchAll)

module.exports = router
