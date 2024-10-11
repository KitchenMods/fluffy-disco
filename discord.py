from discordwebhook import Discord
import os


discord = Discord(url=os.environ['https://discord.com/api/webhooks/1270786942350524509/Pt6B41jSv9EewQqPbJMOYQR9-UHvQvYeXDG8uwAYGITaIbpTt4PXWBHNLpwiNaimk83G'])
discord.post(content='hi there pal')