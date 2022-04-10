import React, { createContext } from 'react'
import { getAuth } from 'firebase/auth'
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const auth = getAuth()

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;