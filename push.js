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

let sub = {}

push.sendNotification(sub, 'test-message')