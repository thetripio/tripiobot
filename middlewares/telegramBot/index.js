// const koaBody = require('koa-body')
const bot = require('./bot')

module.exports = strapi => {
  return {
    initialize: function(cb) {
      strapi.app.use((ctx, next) =>
        {
          if(ctx.url === '/telegramBot'){
            bot.telegram.setWebhook('https://bot.trip.io/telegramBot')
            strapi.app.use(koaBody())
            return  bot.handleUpdate(ctx.request.body, ctx.response)
          }else{
            return next()
          }
        }
      )
      cb();
    }
  };
};
