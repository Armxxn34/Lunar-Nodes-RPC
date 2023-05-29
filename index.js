const DiscordRPC = require('discord-rpc'); 
const client = new DiscordRPC.Client({ transport: 'ipc' }); 
const config = require('./config.json')


    client.on('ready', async () => { 
         client.setActivity({ 
            buttons: [{ label: "Website", url: "https://lunarnodes.xyz"}, { label: "Discord", url: "https://discord.gg/tga4kvrgEA" }],
            details: "A free, reliable hosting!",
            largeImageKey: 'lunar'
            
        }).catch(err => console.log(err));

        console.log("Discord Rich Presence has been enabled.");
    });

 client.login({ clientId: config.applicationId }).catch(console.error); // Logging into our application.
