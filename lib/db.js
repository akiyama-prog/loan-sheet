import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

try {
    const config = {
        apiKey: "AIzaSyAKX3Ld2qN0HHDqbcckeaXZv-FPiyrTXII",
        authDomain: "loan-sheet.firebaseapp.com",
        projectId: "loan-sheet",
        storageBucket: "loan-sheet.appspot.com",
        messagingSenderId: "901877934769",
        appId: "1:901877934769:web:6701eb23612040ff2c5090"
    };

    // Initialize Firebase(initializeを複数回走らせない)
    if (firebase.apps.length === 0) {
        firebase.initializeApp(config);
    }
} catch (error) {
    console.log(error)
}
//firebaseのインスタンスを作成
const db = firebase.firestore();
const auth = firebase.auth();
module.exports = {
    db, auth
};