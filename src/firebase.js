import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC8ugelZmuFq8SXw1QHefnVksfAIhmwbkU",
    authDomain: "netflix-clone-redux-8e431.firebaseapp.com",
    projectId: "netflix-clone-redux-8e431",
    storageBucket: "netflix-clone-redux-8e431.appspot.com",
    messagingSenderId: "713143126870",
    appId: "1:713143126870:web:5429b634ce565c4c4b24f7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;