import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
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

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => 
  signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => 
  signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};