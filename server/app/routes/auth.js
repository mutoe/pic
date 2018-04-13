const Router = require('koa-router')
const authCtrl = require('../ctrls/auth')

const router = new Router()

// 注册
router.post('/register', authCtrl.register)

// 登陆
router.post('/login', authCtrl.login)

// OSS 授权
router.get('/ossSign', authCtrl.ossSign)

// OSS 回调
router.post('/ossCallback', authCtrl.ossCallback)

module.exports = router
