/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app);

const [user , setUser] = useState(null)
const [loading, setLoading] = useState(true)

const register = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
    .then(()=>{

    })
    .catch(() =>{

    })
}


const logIn = (email, password) =>{
    setLoading(true)
return signInWithEmailAndPassword(auth, email, password)
.then(() =>{

})
.catch(() =>{

})
}
const logOut = () => {
    setLoading(true)
    return signOut(auth)
}

useEffect( () =>{
const unsubscrib = onAuthStateChanged(auth, currentUser =>{
   setUser(currentUser)
   console.log('currentUser', currentUser); 
   setLoading(false)
});
return () => {
    return unsubscrib
}
}, [])

const authInfo = {
    user,
    loading,
    register,
    logIn,
    logOut

}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;