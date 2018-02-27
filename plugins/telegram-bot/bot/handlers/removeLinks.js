const removeLinks = {

  handle: (bot)=>{
    bot.on('message', async (ctx) =>{
      const { message } = ctx;
      console.log(message)
      let member =  await ctx.getChatMember(message.from.id)
      let isAdmin = (member.status == "creator") || (member.status == "administrator")
      if(!isAdmin){
        if(message.text){
          const regex = /^0x[a-fA-F0-9]{40}$/g;
          const str = message.text;
          let m;
          if(regex.exec(str)!== null){
            ctx.deleteMessage(message.id)
          }
        }


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