import React, { createContext, useState } from 'react'

export const StartContext = createContext();

const StartContextProvider = ({ children }) => {
    const [start, setStart] = useState(false);

    return (
        <StartContext.Provider value={[start, setStart]}>
            {children}
        </StartContext.Provider>
    )
}

export default StartContextProvider