const Telegraf = require('telegraf')
// const bot = new Telegraf('493666190:AAEhSBXNz_oAE1H_Y8zkPEF2nM6mvDyYA4E')
const bot = new Telegraf(process.env.BOT_TOKEN)
const parse = require('co-body');

// First reply will be served via webhook response,
// but messages order not guaranteed due to `koa` pipeline design.
// Details: https://github.com/telegraf/telegraf/issues/294
// bot.command('image', (ctx) => ctx.replyWithPhoto({ url: 'https://picsum.photos/200/300/?random' }))

bot.hears('yo', ({reply}) => {

  reply('Hey there!')

})

bot.handleUpdateRaw  = async (ctx,response)=>{
  let update = await parse.json(ctx.req)
  bot.handleUpdate (update, response)
}

// Set telegram webhook
// npm install -g localtunnel && lt --port 3000

module.exports = bot
