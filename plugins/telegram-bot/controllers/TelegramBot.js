let bot = require('../bot')
bot.telegram.setWebhook('https://bot.trip.io/telegram-bot/webhook')

module.exports = {
  webhook: async ctx => {
    await  bot.handleUpdate(ctx.request.body, ctx.response)
    console.log(ctx.response)
    if(ctx.response.body==undefined){
      ctx.send('boring')
    }
  }
}