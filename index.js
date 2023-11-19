const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate", (message) => {
    if (message.author.bot) { return; }
    message.reply({
        content: `Hello ${message.author.username}, kya haal chal  `
    })
    console.log(message);
});

client.login("MTE0MDE2OTI1NzM1MTY0NzMzMg.GFpXzA.H3KvrrL0I2Gy-FHusGbWDSBO5KS-DGIA_GmlXU")