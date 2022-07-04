import React, {useContext, useState, useEffect} from 'react'
import {auth} from './firebase.js'

//create authentication context
const AuthContext = React.createContext();

//function to use context
export function useAuth() {
  return useContext(AuthContext);
}


export function AuthProvider({ children }) {

    //state of current user
    const [currentUser, setCurrentUser] = useState()

    //returns a promise
    function signup(email, password) {
       return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        //sets current user or null
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        }
        )
        //unsubscribes when component unmounts
        return unsubscribe
    }, [])

    //values that we want to be stored in context, currentUser and signup function
    const value = {
        currentUser,
        signup
    }


  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}
