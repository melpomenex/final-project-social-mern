import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAWNs5JMcLx57_VdpQYQOjNGaYZQYN-KXE",
  authDomain: "popular-social-mern-f53c9.firebaseapp.com",
  projectId: "popular-social-mern-f53c9",
  storageBucket: "popular-social-mern-f53c9.appspot.com",
  messagingSenderId: "103606630356",
  appId: "1:103606630356:web:c5e5c21f03617c4b870841",
  measurementId: "G-R2D9N7HT1Z"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db