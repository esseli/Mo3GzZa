# Discord
اهلاً بكم فى **Discord.js**
# عن
ديسكورد جى اس هى عباره عن شبه من المعلومات والبرمجيات التى تتيح لك التواصل مع الكل
# التحميلات المطلوبه
Note++
 NODE.js Command prompt
# مثال لوضعه
 ```d.js
 const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});
client.login('408620940323192832');
```
