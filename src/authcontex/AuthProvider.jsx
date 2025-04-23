import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.init";

export const authcontex = createContext()
export default function AuthProvider({ children }) {

  const [user, setuser] = useState(null)
  const [loding, setloding] = useState(true)
  console.log(user)

  //email password signin
  const emailsignup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
  }



//email password login

const handlelogin =(email, password)=>{
  return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
   
  })
  
}



// updateProfile
  const updateuser =(name, photo)=>{
    updateProfile(auth.currentUser, {
      displayName:name ,
       photoURL:photo }
    )
  }


  //handlegooglelogin
  const provider = new GoogleAuthProvider();
  const handlegooglelogin =()=>{
   return signInWithPopup(auth, provider)
  }


//signOut
  const signout=()=>{
    signOut(auth)
  }



//manage user
  useEffect(() => {
    const unsuscriber = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        setuser(currentuser)
      } else {
        setuser(null)
      }
      setloding(false)
      return () => unsuscriber();
    });

  }, [])



  const info = {
    emailsignup,
    updateuser,
    user, 
    setuser,
    signout,
    handlelogin,
    handlegooglelogin,
    loding, 
    setloding
  }



  return (
    <authcontex.Provider value={info}>
      {children}
    </authcontex.Provider>
  )
}
