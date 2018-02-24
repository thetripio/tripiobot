let bot = require('../bot')
bot.telegram.setWebhook('https://bot.trip.io/telegram-bot/webhook')

module.exports = {
  webhook: async ctx => {
    bot.handleUpdate(ctx.request.body, ctx.response)
    console.log(ctx.request.body)
    ctx.send('ok')
  }
}