var contentType = require('content-type')
var getRawBody = require('raw-body')
const koaBody = require('koa-body')
const bot = require('./bot.js')
const multer = require('koa-multer');
const parse = require('co-body');

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
