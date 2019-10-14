importScripts('https://www.gstatic.com/firebasejs/7.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.2.0/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyB3xuRPLCjDwIjKmwkG9xbJQ85jgu0lz2c",
    authDomain: "cocktail-night-2019.firebaseapp.com",
    databaseURL: "https://cocktail-night-2019.firebaseio.com",
    projectId: "cocktail-night-2019",
    storageBucket: "cocktail-night-2019.appspot.com",
    messagingSenderId: "1068577977239",
    appId: "1:1068577977239:web:5fad95643ec8f5077f8ad2",
    measurementId: "G-05FKV7XS73"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    const title = payload.notification.title;
    const options = {
        body: payload.notification.body,
        image: payload.notification.image
    };

    return self.registration.showNotification(title, options);
});