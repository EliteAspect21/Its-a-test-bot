var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('message', message => {

    var sender = message.author;
    var msg = message.content.toUpperCase();
    var prefix = '>'

    if (sender.id === '771374431553454132') {
        return;
    }

    if (msg === prefix + 'PING') {
        message.channel.send('I dunno how to play ping pong')
    }

    if (msg === '69420') {
        message.channel.send('Haha. Funny numbers go brrrrrrrr')
    }


    if (message.channel.id === '771379374292860979') {
        if (isNaN(message.content)) {
            message.delete()
            message.author.send('Sorry, you can only send numbers in this channel!')
        }
    }

    //Word Filter
    if (msg.includes('bad word')) {
        message.delete();
        message.author.send('You said a bad word!')
    }

});

bot.on('ready', () => {
    console.clear()
    console.log('Bot is online... maybe?')
    console.log('Running ISAO_CORE v6')
});

bot.on('guildMemberAdd', member => {
    console.log('User ' + member.user.username + ' has joined the server!')
    var role = member.guild.roles.find('name', 'TEST')
    member.addRole(role)
});

bot.login('Token goes brrr')
