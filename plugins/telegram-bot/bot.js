const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.hears('hi', (ctx) => ctx.reply('Hey there!'))

module.exports = bot