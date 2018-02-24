console.log("Standalone bot test")
const bot = require('../plugins/telegram-bot/bot/index')
bot.telegram.setWebhook('')

bot.startPolling()