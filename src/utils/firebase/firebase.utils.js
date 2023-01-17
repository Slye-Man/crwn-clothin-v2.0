import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Firestore
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBSdfZCBjeVe32Ih5lgs6vEac_CwnbWU14",
  authDomain: "crwn-clothin-db-ad874.firebaseapp.com",
  projectId: "crwn-clothin-db-ad874",
  storageBucket: "crwn-clothin-db-ad874.appspot.com",
  messagingSenderId: "951182944822",
  appId: "1:951182944822:web:e986402630a52636364697"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef)
}