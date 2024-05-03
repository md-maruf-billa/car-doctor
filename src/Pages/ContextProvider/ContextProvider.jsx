import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './../../Utils/FireBase/firebase.config';


export const UserContext = createContext(null);

// -----------------Social media auth providers-----------
const googleProvider = new GoogleAuthProvider();

const ContextProvider = ({ children }) => {
    // -------------Loading State------------
    const [loading, setLoading] = useState(true);

    // -------------current user state------------
    const [currentUser, setCurrentUser] = useState([]);
    // ---------------Login with Google---------
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    // ------------LogOut user----------------
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // -------------Observe User------------
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setCurrentUser(user);
            }
            else{
                setCurrentUser([])
            }
        })

    }, [loading])


    const value = {
        loginWithGoogle,
        loading,
        setLoading,
        currentUser,
        logOutUser
    }
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export default ContextProvider;