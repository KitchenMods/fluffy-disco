const { Webhook } = require('discord-webhook-node');
const hook = new Webhook("https://discord.com/api/webhooks/1270786942350524509/Pt6B41jSv9EewQqPbJMOYQR9-UHvQvYeXDG8uwAYGITaIbpTt4PXWBHNLpwiNaimk83G");
 
hook.setUsername('Discord Webhook Node Name');
 
hook.send("Hello there!");