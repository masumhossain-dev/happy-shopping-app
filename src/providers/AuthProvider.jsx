import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

export const UserContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // ===========Create user by email and password============
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }


    const userInfo = {
        auth,
        user,
        createUser,
        loginUser,
        setUser,
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