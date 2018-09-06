const Koa = require('koa')
const render = require('koa-ejs')
const serve = require('koa-static')
const session = require('koa-session')
const path = require('path')

const app = new Koa()

render(app, {
  root: path.join(__dirname, 'view'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: false
})

app.keys = ['koa lining secret']
app.use(session(app))

app.use(serve('.'))
app.use(serve('public'))

app.use(function (ctx, next) {
  ctx.state = ctx.state || {}
  ctx.state.now = new Date()
  ctx.state.ip = ctx.ip
  ctx.state.version = '2.0.0'
  return next()
})

app.use(async (ctx, next) => {
  // ignore
  if (ctx.path === '/favicon.ico') return

  let n = ctx.session.views || 0
  ctx.session.views = ++n
  ctx.state.viewers = n + 'views'
  await next()
})

app.use(async function (ctx) {
  const users = [{
    name: 'Dead Horse'
  }, {
    name: 'Jack'
  }]
  console.log('url ' + ctx.url)

  // set cookies
  var cuke = 'cookie is none'
  if (ctx.url === '/') {
    ctx.cookies.set(
      'cid', 'hello world', {
        domain: 'localhost',
        path: '/',
        maxAge: 60 * 60 * 1000, // ms
        expires: new Date('2018-09-04'),
        httpOnly: true,
        overwrite: false
      }
    )

    cuke = 'cookie is ok'
  } else {
    if ((cuke = ctx.cookies.get('cid'))) { }
  }

  // await ctx.render('content', {
  //     users,
  //     cuke
  // })
  await ctx.render('index')
})

app.listen(3000)
console.log('open http://localhost:6000')

app.on('error', function (err) {
  console.log(err.stack)
})
