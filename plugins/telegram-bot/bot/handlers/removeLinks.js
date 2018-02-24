const removeLinks = {

  handle: (bot)=>{
    bot.on('message', async (ctx) =>{
      const { message } = ctx;
      console.log(message)
      let member =  await ctx.getChatMember(message.from.id)
      let isAdmin = (member.status == "creator") || (member.status == "administrator")
      if(!isAdmin && message.text){
        if(message.entities){
          let hasUrl = false
          for(let entity of message.entities){
            if(entity.type=='url'){
              hasUrl = true
            }
          }
          if(hasUrl){
            ctx.deleteMessage(message.id)
          }
        }
      }
    })
  }

}
module.exports = removeLinks