const Koa = require('koa')
const render = require('koa-ejs')
const serve = require('koa-static')
const path = require('path')
const router = require('./route')

const app = new Koa()

render(app, {
  root: path.join(__dirname, 'view'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: false
})

app.use(serve(path.join(__dirname, '.')))
app.use(serve(path.join(__dirname, 'public')))

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(5555)
console.log('open http://localhost:5555')

app.on('error', function (err) {
  console.log(err.stack)
})
