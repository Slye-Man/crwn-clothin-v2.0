import { createContext, useState } from "react";

// Actual value that needs to be accessed
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

// Actual component that's going to be used 
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = {currentUser, setCurrentUser}

    
    return <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
}