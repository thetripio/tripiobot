// const koaBody = require('koa-body')
const bot = require('./bot')

module.exports = strapi => {
  return {
    initialize: function(cb) {
      // bot.telegram.setWebhook('https://bot.trip.io/telegramBot')
      // strapi.app.use(koaBody())
      strapi.app.use((ctx, next) =>  ctx.url === '/telegramBot'
        ? bot.handleUpdate(ctx.request.body, ctx.response)
        : next()
      )
      cb();
    }
  };
};
