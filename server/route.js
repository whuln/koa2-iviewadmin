const Router = require('koa-router')
const koaBody = require('koa-body')
const session = require('koa-session')

const MainController = require('./controller/main-ctrl')
const RestController = require('./controller/rest-ctrl')
const LoginController = require('./controller/login-ctrl')

var router = new Router()
var restrouter = new Router({
  prefix: '/rest'
})
restrouter.use(koaBody())

router.get('/', MainController.index)

restrouter.get('/user', RestController.getUser)
restrouter.post('/login', LoginController.login)
restrouter.get('/get_user_info', LoginController.getUserInfo)
restrouter.post('/logout', LoginController.logout)
router.use(restrouter.routes(), restrouter.allowedMethods())

module.exports = router
