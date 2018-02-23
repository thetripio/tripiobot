
const bot = require('./bot.js')

module.exports = strapi => {

  return {
    initialize: function (cb) {
      strapi.app.use((ctx, next) => ctx.method === 'POST' && ctx.url === '/telegramBot'
        ? bot.handleUpdateRaw(ctx, ctx.response)
        : next()
      )
      cb();
    }
  };
};
