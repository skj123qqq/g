const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("479247689452879903")
setInterval(function() {
channel.send(`A7bk`);
}, 30)
})

client.login(process.env.BOT_TOKEN);