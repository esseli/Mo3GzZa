const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
client.login('NTIwNTQ0ODQ0MTM4MDIwODY0.Duvb5w.B3nO5cHGcFPhZBa8KBeKcYK8GrY');
