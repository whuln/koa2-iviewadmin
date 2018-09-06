module.exports = class RestController {
  static async getUser (ctx, next) {
    ctx.body = '{"name":"lining"}'
  }
}
