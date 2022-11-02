import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //user create
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //user login
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //user stay
    useEffect ( () => {
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
        })
        return () => {
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;