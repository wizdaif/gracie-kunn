const Discord = require('discord.js');

module.exports = (client) => {
    const channelId = '751176158443470940' // welcome channel
    client.on('guildMemberAdd', (member) => {
      const r = member.guild.roles.cache.find(r => r.id === '751171737206652928')
      //const message = `Please welcome <@${member.id}> to the server! Please check out ${member.guild.channels.cache
       // .get(targetChannelId)
        //.toString()}`
      member.roles.add(r)
        const embed = new Discord.MessageEmbed()
            .setTitle(`Welcome to Grace's party server, ${member.displayName}!  `)
            .setDescription(`Don't spoil till le last day!. `) 
            .setImage('https://media.discordapp.net/attachments/665005609581543437/751590926199029770/Untitled587_20200904180354.jpg')
            .setTimestamp()
            .setFooter(`${member.guild.memberCount.toLocaleString()} party members!`)
      const channel = member.guild.channels.cache.get(channelId)
      channel.send(embed)
    })
  }
