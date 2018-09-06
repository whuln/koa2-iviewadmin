const Router = require('koa-router')
const MainController = require('./controller/main-ctrl')
const RestController = require('./controller/rest-ctrl')

var router = new Router()
var restrouter = new Router({
  prefix: '/rest'
})

router.get('/', MainController.index)

restrouter.get('/user', RestController.getUser)
router.use(restrouter.routes(), restrouter.allowedMethods())

module.exports = router
