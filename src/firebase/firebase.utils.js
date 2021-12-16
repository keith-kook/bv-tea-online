import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: 'AIzaSyAZteP7h2YvTURrquaziQbE9XWCnc7noVc',
  authDomain: 'bv-tea-online-db.firebaseapp.com',
  projectId: 'bv-tea-online-db',
  storageBucket: 'bv-tea-online-db.appspot.com',
  messagingSenderId: '1015436597473',
  appId: '1:1015436597473:web:67abd4ee6c27e33164ffa0',
  measurementId: 'G-75CPEB5SCV'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
