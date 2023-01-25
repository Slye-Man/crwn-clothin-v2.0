import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

// Actual value that needs to be accessed
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

// Actual component that's going to be used 
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = {currentUser, setCurrentUser}

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user);
        })

        return unsubscribe
    }, [])
    
    return <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
}