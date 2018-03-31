const Router = require('koa-router')
const authCtrl = require('../ctrls/auth')

const router = new Router()

// 注册
router.post('/register', authCtrl.register)

// 登陆
router.post('/login', authCtrl.login)

module.exports = router
