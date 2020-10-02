import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "m",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {
    auth
};