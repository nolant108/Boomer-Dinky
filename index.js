const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.token);

bot.on('ready', () =>{
    console.log('Boomer&Dinky are Online!');
})


bot.on('message', msg=>{
    if(msg.content === 'Ok Boomer'){

        msg.reply("Hey, This is Boomer, you" + "'" +"re the boomer, not me!");
    }
    })