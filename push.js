var push = require('web-push');

// let vapIdKeys = push.generateVAPIDKeys();
// console.log(vapIdKeys);

// We don't want this to regenerate everytime.
// the public key goes out to the wbe app.
let vapIdKeys = {
    publicKey: 'BBWGCHKdpCoviNGXqyRykf6wfd0Zqtpi8F11SFLQoIiq2w_1zCX3JIjNEIW5JzCWaQkjLritVuNVZxyPvCIdbDQ',
    privateKey: 'APFC3P6Sgq5DdsPkzF8Bp-WOl9Dh9UQppWJqHJMNkaI'
}

push.setVapidDetails('mailto:test@code.co.uk', vapIdKeys.publicKey, vapIdKeys.privateKey)

// let sub = {}

// Pretending that it has been pulling it pout of the db
let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/cMhv-xZ6SfE:APA91bGkVMHVE0qTBV0Td-IfNMUiU7wYfMpCKQ9Cre8OEaNhFKKATrxl09QFVQpKbjp57BBmLERxSsfWUbFY_1xgdA06YnAIaJn_VpJgp3wJqLDNZvL1jIB4IjvJker7mHER5BitLebP", "expirationTime": null, "keys": { "p256dh": "BE8rGSbiUT0kE03SLemQrXNzU-eA6Gu7G4zvYcaBxqRthuQjsHDUCbV6_dpPB-db0gXGQSyIQXKZmwJ2tUpmsJc", "auth": "HrPjhE1BzXK_ce1F33DOHw" } }

push.sendNotification(sub, 'test-message')