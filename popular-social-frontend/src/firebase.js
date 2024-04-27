import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD7QOaSXUO23-Zdn8IW4Wx_QZBZC1R1bc4",
  authDomain: "social-media-app-mern-b9eee.firebaseapp.com",
  projectId: "social-media-app-mern-b9eee",
  storageBucket: "social-media-app-mern-b9eee.appspot.com",
  messagingSenderId: "98065498714",
  appId: "1:98065498714:web:5d84caef40e6c2fb108e63",
  measurementId: "G-NKBYSDZHWM"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db