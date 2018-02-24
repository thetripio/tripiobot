let bot = require('../bot')
bot.telegram.setWebhook('https://qrfucchcns.localtunnel.me/telegram-bot/webhook')

module.exports = {
  webhook: async ctx => {
    await  bot.handleUpdate(ctx.request.body, ctx.response)
    console.log(ctx.response)
    if(ctx.response.body==undefined){
      ctx.send('boring')
    }
  }
}