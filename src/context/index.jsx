import React, { createContext, useState } from 'react'

export const GLobalContext = createContext();

const DefinedContext = ({ children }) => {
    const [logued, setLoggued] = useState(false)
    const [userData, setUserData] = useState()

    return <GLobalContext.Provider value={{ logued, setLoggued, userData, setUserData }}>
        {children}
    </GLobalContext.Provider>
}

export { DefinedContext }