const {initializeApp} = require('firebase/app');
const {getAuth} = require('firebase/auth');


const firebaseConfig = {
    apiKey: "AIzaSyBqRfRK7KlPoSAzvYLagQAtV-_NncLsyUI",
    authDomain: "chat-firebase-bf8fc.firebaseapp.com",
    projectId: "chat-firebase-bf8fc",
    storageBucket: "chat-firebase-bf8fc.appspot.com",
    messagingSenderId: "290389146975",
    appId: "1:290389146975:web:fe8b3d8260b35435724aea"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

module.exports = {
    app,
    auth
}