import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const UserContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // ===========Create user by email and password============
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // ==============Google sign in =============
    const googleProvider = new GoogleAuthProvider();
    const googleUserCreator = () => {
        return (
            signInWithPopup(auth, googleProvider)
        )
    }

    // ============Facebook Sign In ============
    const facebookProvider = new FacebookAuthProvider();
    const facebookUserCreator = () => {
        return (
            signInWithPopup(auth, facebookProvider)
        )
    }

    // ==========Log out===========
    const logOut = () => {
        signOut(auth);
    }

    // ============user observer============
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })

        // unmount 
        return () => {
            return unsubscribe();
        }
    }, [])
    const userInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleUserCreator,
        facebookUserCreator,
        logOut
    }
    return (
        <div>
            <UserContext.Provider value={userInfo}>
                {children}
            </UserContext.Provider>
        </div>
    );
};

export default AuthProvider;