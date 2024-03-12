// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
require('dotenv').config()

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});


// handling message create event
client.on('messageCreate',(message)=>{
    if(message.author.bot) return;
    // console.log(message);
    message.reply(`Hello how can I help you? `)
})

// handling interaction
client.on('interactionCreate',(interaction)=>{
    interaction.reply("Pong!!")
})

// Log in to Discord with your client's token
client.login(process.env.TOKEN);