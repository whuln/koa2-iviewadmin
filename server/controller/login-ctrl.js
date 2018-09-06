const util = require('../libs/util')

const USER_MAP = {
  super_admin: {
    name: 'super_admin',
    user_id: '1',
    access: ['super_admin', 'admin'],
    token: 'super_admin',
    avator: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png'
  },
  admin: {
    name: 'admin',
    user_id: '2',
    access: ['admin'],
    token: 'admin',
    avator: 'https://avatars0.githubusercontent.com/u/20942571?s=460&v=4'
  }
}

module.exports = class LoginController {
  static async login (ctx, next) {
    console.log(ctx.url)
    console.log(ctx.request.body)
    // let req = JSON.parse(ctx.req.body)
    ctx.body = { token: USER_MAP['admin'].token }
    // ctx.body = { 'name': 'lining' }
  }

  static async getUserInfo (ctx, next) {
    const params = util.getParams(ctx.req.url)
    ctx.body = USER_MAP[params.token]
  }

  static async logout (ctx, next) {
    ctx.body = null
  }
}
