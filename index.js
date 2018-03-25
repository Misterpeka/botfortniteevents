const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', function () {
    console.log("Je suis connecté !")
  })

  bot.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong !')
    }
  })
  
bot.login('NDI0OTIxNTI4MjMzMzYxNDE4.DZlyrA.fLNk-Ivo275J69Q0-vCPh6gNSc0')
