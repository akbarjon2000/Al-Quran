import React, { createContext } from 'react'
import { initializeApp, } from "firebase/app"
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCFI59CNAVEYaosfRtSGjqWZ449wsTTB4k",
    authDomain: "al-quran-auth.firebaseapp.com",
    projectId: "al-quran-auth",
    storageBucket: "al-quran-auth.appspot.com",
    messagingSenderId: "475933303491",
    appId: "1:475933303491:web:848f78860e5b4d69b37876",
    measurementId: "G-0PYPB34TJ5"
};
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    initializeApp(firebaseConfig);
    const auth = getAuth()

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;