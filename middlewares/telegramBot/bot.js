const Telegraf = require('telegraf')
// const bot = new Telegraf('493666190:AAEhSBXNz_oAE1H_Y8zkPEF2nM6mvDyYA4E')
const bot = new Telegraf(process.env.BOT_TOKEN)

// First reply will be served via webhook response,
// but messages order not guaranteed due to `koa` pipeline design.
// Details: https://github.com/telegraf/telegraf/issues/294
// bot.command('image', (ctx) => ctx.replyWithPhoto({ url: 'https://picsum.photos/200/300/?random' }))

bot.hears('hey', ({reply}) => {

  reply('Hey there!')

})

// Set telegram webhook
// npm install -g localtunnel && lt --port 3000
bot.telegram.setWebhook('https://bot.trip.io/telegramBot')

module.exports = bot
