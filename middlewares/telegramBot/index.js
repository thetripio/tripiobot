
const bot = require('./bot.js')

module.exports = strapi => {

  return {
    initialize: function (cb) {
      strapi.app.use((ctx, next) => ctx.method === 'POST' && ctx.url === '/telegramBot'
        ? bot.handleUpdate(ctx.request.body, ctx.response)
        : next()
      )
      cb();
    }
  };
};
