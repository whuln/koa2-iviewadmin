module.exports = class MainController {
  static async index (ctx, next) {
    // ctx.body = 'Hello world1'
    await ctx.render('index')
  }
}
