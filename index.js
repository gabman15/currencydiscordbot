// Require the necessary discord.js classes
const { Collection, MessageEmbed, MessageAttachment, Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const axios = require('axios');
const jsonp = require('jsonp-request');
// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
//	const channel = await client.channels.fetch('978363611846160387');

//	channel.send({ content: "Food, barb, brass, cooks (foo, bar, baz, quux)" }); 
	/*client.channels.cache.forEach(channel => {
		channel.send("some-txt, ");
	});*/
});

// Login to Discord with your client's token

client.login(token);

client.on("messageCreate", msg => {
	 if (msg.author != client.user && (msg.content.startsWith("curenc?") || msg.content.startsWith("curenc,"))){
	 	msg.channel.send(`Yes! I am CURENC, also known as LORD CURENC BTOT OF THE CURENC KNINGDOM, Aesquire. `);
	 	jsonp('https://www.statbureau.org/calculate-inflation-price-jsonp?jsoncallback=?', 
	 	{
			country:'united-states',
			start:'1940/1/1',
			end:'2022/6/13',
			amount:'1'
		}).then((res) => { 
			msg.channel.send(res)
	 	});
	}
});
console.log(client.channels);
