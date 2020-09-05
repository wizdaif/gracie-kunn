const Discord = require('discord.js');
const Canvas = require('canvas');

module.exports = {
name: 'banner',
description: 'make a text banner',
execute: async(message, args) => {
	const canvas = Canvas.createCanvas(926, 143);
	const ctx = canvas.getContext('2d');
  const me = args.splice(0).join(' ');
	const background = await Canvas.loadImage('https://media.discordapp.net/attachments/665005609581543437/751563423631933586/Untitled587_20200904180354.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
	ctx.font = '70px Amatic-SC';
	ctx.fillStyle = '#f5f7f2';
	ctx.fillText(me, canvas.width / 29.5, canvas.height / 1.5, );
	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'bannr.png');
    message.channel.send(attachment);
    message.delete()
}
}