const { Webhook } = require('discord-webhook-node');
const hook = new Webhook("https://discord.com/api/webhooks/1270786942350524509/Pt6B41jSv9EewQqPbJMOYQR9-UHvQvYeXDG8uwAYGITaIbpTt4PXWBHNLpwiNaimk83G");
const fs = require('node:fs');

let ChangelogVer = "";
let ChangelogBetaVer = "";

if (process.env.CHANGELOGVER) {
    ChangelogVer = process.env.CHANGELOGVER;
}

if (process.env.CHANGELOGBETA) {
    ChangelogBetaVer = process.env.CHANGELOGBETA;
}

const changelogpath = '../KitchenLib/Changelogs/' + ChangelogVer + '/Github/v' + ChangelogVer + ChangelogBetaVer + '.MD';

fs.readFile(changelogpath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    if (ChangelogBetaVer == "") {
        hook.send('***KitchenLib v' + ChangelogVer + '***\nhttps://github.com/KitchenMods/KitchenLib/releases/tag/v' + ChangelogVer + '\n\n' + data + '\n\n<@&1028210506537893918>');
    } else {
        hook.send('***KitchenLib Beta v' + ChangelogVer + ChangelogBetaVer + '***\nhttps://github.com/KitchenMods/KitchenLib/releases/tag/v' + ChangelogVer + ChangelogBetaVer + '\n\n' + data + '\n\n<@&1074702337479815249>');
    }
});