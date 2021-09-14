const Discord = require('discord.js');

exports.run = async(client, message, args) => {
message.delete({ timeout: 1 });
if( !message.member.roles.cache.has('802357134960230422') && !message.member.roles.cache.has('712770368565411882') && !message.member.roles.cache.has('697152886064545832') && !message.member.roles.cache.has('712770372205805574') && !message.member.roles.cache.has('712770372877156432') && !message.member.roles.cache.has('712770373095129109') && !message.member.roles.cache.has('712770374097436743') && !message.member.roles.cache.has('738105206864216065') ) return message.channel.send(`**Bu komutu sadece yetkililer kullanabilir!**`)



return message.channel.send(`@everyone`,
	  new Discord.MessageEmbed()
	  .setTitle("**Arkadaşlarını Davet Et**")
	  .setAuthor("FDream")
	  .setColor('#FF0000')
	  .setFooter(`${message.author.username} tarafından gönderildi!`, message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
	  .setImage("https://cdn.discordapp.com/icons/834985695986057296/a_03403182ebd564fbb03a007a89ca9ffe.png?size=128")")
	  .setTimestamp()
	  .setURL("https://discord.gg/")
	  .addField("Sunucu aktif. Giriş sağlayabilirsiniz. İyi roller dileriz.","**mtasa://78.111.111.168:22003: **"))
	}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori : "admin"
};
 
exports.help = {
  name: 'aktif',
  description: 'Tüm komutları gösterir.',
  usage: 'aktif'
};

