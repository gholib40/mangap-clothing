import { initializeApp } from "firebase/app";
import {
getAuth,
signInWithRedirect,
signInWithPopup,
GoogleAuthProvider,
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBmlm2CxxhoiQMpofKJ6IY0u1KehuTgo-Y",
  authDomain: "mangap-clothing-db.firebaseapp.com",
  projectId: "mangap-clothing-db",
  storageBucket: "mangap-clothing-db.appspot.com",
  messagingSenderId: "990257828129",
  appId: "1:990257828129:web:afa2e076f55f873b016e60"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt : "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopUp = ()=> signInWithPopup(auth,provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async(userAuth)=> {
  const userDocRef = doc(db,'users',userAuth.uid)
  console.log(userDocRef)

  const userSnapShot = await getDoc(userDocRef)
  console.log(userSnapShot)
}