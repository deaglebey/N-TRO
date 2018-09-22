const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = new Discord.RichEmbed();
var fs = require('fs');

// -->COMMANDS<--

bot.on('guildMemberAdd',member =>{
    member.send('Destek discord.gg/6H9f9Ky\nsSyfamız sites.google.com/view/negronn/1 \nForum gist.github.com/NEGRONN \nKazancım 0');

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);

});


bot.on('guildMemberRemove', member=>{
   
});



bot.on('ready',()=> {
console.log('NEGRONN');

});

bot.login(process.env.BOT_TOKEN);
