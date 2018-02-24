const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)
const removeLinksHandler = require('./handlers/removeLinks')


bot.hears('hi', (ctx) => ctx.reply('I am here.'))

removeLinksHandler.handle(bot)

bot.on('message',)
module.exports = bot