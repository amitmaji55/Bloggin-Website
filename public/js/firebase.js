let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyCdFlmw6RstFKQ7Rqj2kzJRcQJKnUs8r64",
    authDomain: "blog-website-46196.firebaseapp.com",
    projectId: "blog-website-46196",
    storageBucket: "blog-website-46196.appspot.com",
    messagingSenderId: "984166529989",
    appId: "1:984166529989:web:aa8d0dbd34b958c1e0e9ac"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();