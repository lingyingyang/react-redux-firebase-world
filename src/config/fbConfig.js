import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCG3oNXbm8HKUv6iSPXzlzHsCEZgitVui4",
    authDomain: "react-redux-firebase-world.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-world.firebaseio.com",
    projectId: "react-redux-firebase-world",
    storageBucket: "",
    messagingSenderId: "263704172541",
    appId: "1:263704172541:web:f936970f5997cc3e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase