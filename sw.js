// self.addEventListener('push', () => {
//     self.registration.sendNotification('test message', {})
// })

// It's doing the same thing as before but more
self.addEventListener('push', function (e) {
    console.log("=> Inside sw");
    var options = {
        body: 'This notification was generated from a push!',
        icon: 'images/example.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore', title: 'Explore this new world',
                icon: 'images/checkmark.png'
            },
            {
                action: 'close', title: 'Close',
                icon: 'images/xmark.png'
            },
        ]
    };
    e.waitUntil(
        self.registration.showNotification('Hello world!', options)
    );
});