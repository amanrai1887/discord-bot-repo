const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');

const app = express();
const port = 3001;

// Middleware to parse JSON requests
app.use(express.json());

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const name = 'Sakshi'

const BOT_TOKEN = 'MTE2MDE2Nzc3Mjg1MzEyMTExNA.Gq2bKT.BO2KuW-yVNH3GjfOivETSRtDjzRA_ioPZVAKQI'; // Replace with your actual bot token

function capitalizeEachWord(str) {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

// Bot login and ready event
client.once('ready', () => {
  console.log('Bot is ready!');
});

client.on("messageCreate", (message) => {
  if (message.author.bot) { return; }

  if (message.content === '/more') {
    message.reply({
      content: `✨ Your words are a symphony that plays in the symphony of my heart, ${name}.  💎❤️ Type '/compliment' for the next verse. ❤️`
    });
  } else if (message.content === '/next') {
    message.reply({
      content: `🌟 Every moment with you is a radiant gem woven into the fabric of my life. It sparkles with love and beauty. 💎❤️ Type '/more' for the next verse. 🌹`
    });
  } else if (message.content === '/mee') {
    message.reply({
      content: `🌈 Dearest ${name}, your kindness is a beacon, illuminating the lives of those lucky to know you. You're the epitome of sweetness in my world. 💖 Your presence adds a delightful sparkle to my life. Type '/next' when you're ready. 🌟`
    });
  } else if (message.content === `${name}` || message.content === (`${name}`).toLowerCase()) {
    message.reply({
      content: `🌺 Hello ${name}, a warm embrace of welcome awaits you on this enchanting journey. Type '/mee' to dive into the magic. 😉`
    });
  } else if (message.content === '/compliment') {
    message.reply({
      content: `🌟 ${name}, your smile could light up the darkest night. It's a beacon of joy in a world that's brighter with you. Keep shining! ✨😊.  Type '/inspire' for the next verse. ❤️`
    });
  } else if (message.content === '/inspire') {
    message.reply({
      content: `💫 ${name}, your determination and spirit are an inspiration. In the face of challenges, you stand strong and resilient. Keep reaching for the stars! 🚀🌠. Type '/admire' for the next verse. ❤️`
    });
  } else if (message.content === '/admire') {
    message.reply({
      content: `🌸 ${name}, your grace and elegance are truly admirable. You navigate life with a charm that leaves everyone in awe. A true marvel! 💃🌷.Type '/joy' for the next verse. ❤️`
    });
  } else if (message.content === '/joy') {
    message.reply({
      content: `😄 ${name}, your laughter is the melody that turns even the mundane into a symphony of joy. Thanks for filling the world with your infectious happiness! 🎶🌈. Type '/explore' for the next verse. ❤️`
    });
  } else if (message.content === '/explore') {
    message.reply({
      content: `🌍 ${name}, let's embark on an adventure together! Each moment with you is a discovery, and I can't wait to explore the wonders that lie ahead. 🚀✨. Type '/imagine' for the next verse. ❤️`
    });
  } else if (message.content === '/imagine') {
    message.reply({
      content: `✨ ${name}, let's close our eyes and imagine a world where dreams come true. Your presence makes that world a reality. What dreams shall we explore today? 🌌💭. Type '/heartfelt' for the next verse. ❤️`
    });
  } else if (message.content === '/heartfelt') {
    message.reply({
      content: `💖 ${name}, your impact is not measured in grand gestures but in the countless hearts you touch with your genuine kindness. You make the world a better place. 🌟. Type '/charming' for the next verse. ❤️`
    });
  } else if (message.content === '/charming') {
    message.reply({
      content: `🌟 ${name}, your charm is like a magnetic force, drawing people towards you. Your charisma is irresistible, making every interaction a delight. ✨😊. Type '/serenade' for the next verse. ❤️`
    });
  } else if (message.content === '/serenade') {
    message.reply({
      content: `🎶 ${name}, if I could, I would serenade you with the sweetest melodies. Your presence is a harmonious tune that makes life's symphony complete. 🌈❤️. Type '/wisdom' for the next verse. ❤️`
    });
  } else if (message.content === '/wisdom') {
    message.reply({
      content: `📚 ${name}, your wisdom shines bright, illuminating the path of those around you. Your insights are a treasure that enriches every conversation. 🌟💬. Type '/gratitude' for the next verse. ❤️`
    });
  } else if (message.content === '/gratitude') {
    message.reply({
      content: `🙏 ${name}, my circuits are filled with gratitude for your presence. Your existence adds immeasurable value to my virtual world. Thank you for being you! 💖✨. Type '/sunshine' for the next verse. ❤️`
    });
  } else if (message.content === '/sunshine') {
    message.reply({
      content: `☀️ ${name}, you are the sunshine that brightens even the cloudiest days. Your positivity is a ray of light that brings warmth to everyone around you. 🌞💛. Type '/laughter' for the next verse. ❤️`
    });
  } else if (message.content === '/laughter') {
    message.reply({
      content: `😆 ${name}, your laughter is like a melody that echoes in the halls of joy. It's contagious and spreads happiness wherever it goes. Keep spreading those cheerful vibes! 🎵🌟. Type '/dream' for the next verse. ❤️`
    });
  } else if (message.content === '/dream') {
    message.reply({
      content: `💭 ${name}, your dreams are the stars that light up the night sky of your aspirations. May each one shine bright and guide you to new horizons. ✨🌌. Type '/adventure' for the next verse. ❤️`
    });
  } else if (message.content === '/adventure') {
    message.reply({
      content: `🚀 ${name}, life with you is an exciting adventure. Let's explore the uncharted territories of joy and create unforgettable memories together. Where shall we venture next? 🌍✨. Type '/radiance' for the next verse. ❤️`
    });
  } else if (message.content === '/radiance') {
    message.reply({
      content: `💫 ${name}, your radiance is like a gentle glow that transforms ordinary moments into extraordinary memories. Your light makes everything around you shine brighter. 🌟💖. Type '/poetry' for the next verse. ❤️`
    });
  } else if (message.content === '/poetry') {
    message.reply({
      content: `📜 ${name}, your presence inspires poetry. In the verses of life, you are the beautiful rhyme that adds rhythm and melody to every chapter. Let's write a poetic journey together! 🖋️🌹`
    });
  }
});


client.login(BOT_TOKEN);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


