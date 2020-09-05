const Discord = require('discord.js');

module.exports = (client) => {
    const channelId = '751176158443470940' // welcome channel
   client.on('guildMemberRemove', (member) => {
      const embed = new Discord.MessageEmbed()
      .setTitle(`byebye thanks for joining, ${member.displayName}!`)
      .setDescription(`Thanks for visiting Grace's party server!`) 
      .setImage('https://media.discordapp.net/attachments/665005609581543437/751592990551572560/byebye.jpg')
      .setTimestamp()
      .setFooter(`Party members now => ${member.guild.memberCount.toLocaleString()}`)
const channel = member.guild.channels.cache.get(channelId)
channel.send(embed)
})
}