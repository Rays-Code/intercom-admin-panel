import React, { createContext, useState } from 'react';

export const userContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState([{
        id: 1,
        chats: [{
        toUser: ["Hey there!"],
        fromUser: ["Good see you"]
    }]},
    {
        id: 2,
        chats: [{
        toUser: ["Hey there2!"],
        fromUser: ["Good see you2"]
    }]}                            
])

    return (
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}


export const userNumberContext = createContext()

export const UserNumberProvider = ({children}) => {
    const [userNumber, setUserNumber] = useState(1)

    return (
        <userNumberContext.Provider value={{userNumber, setUserNumber}}>
            {children}
        </userNumberContext.Provider>
    )
}