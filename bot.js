const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("527531840903577621")
setInterval(function() {
channel.send(`AkramAkramAkramAkramAkramAkramAkramAkram
AkramAkramAkramAkramAkramAkramAkramAkramAkram
AkramAkramAkramAkramAkramAkramAkramAkramAkram
AkramAkramAkramAkramAkramAkramAkramAkramAkram
AkramAkramAkramAkramAkramAkramAkramAkramAkram`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
