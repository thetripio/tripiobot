const Telegraf = require('telegraf')
const koaBody = require('koa-body')


const bot = new Telegraf('493666190:AAEhSBXNz_oAE1H_Y8zkPEF2nM6mvDyYA4E')
// First reply will be served via webhook response,
// but messages order not guaranteed due to `koa` pipeline design.
// Details: https://github.com/telegraf/telegraf/issues/294
bot.command('image', (ctx) => ctx.replyWithPhoto({ url: 'https://picsum.photos/200/300/?random' }))
bot.on('text', ({ reply }) => reply('Hey there!'))

// Set telegram webhook
// npm install -g localtunnel && lt --port 3000
bot.telegram.setWebhook('https://bot.trip.io/telegramBot')


module.exports = strapi => {
  return {
    initialize: function(cb) {
      strapi.app.use(koaBody())

      strapi.app.use((ctx, next) =>  ctx.url === '/telegramBot'
        ? bot.handleUpdate(ctx.request.body, ctx.response)
        : next()
      )

      cb();
    }
  };
};
