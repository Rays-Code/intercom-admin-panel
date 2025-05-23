import React, { createContext, useState } from 'react';

// User context for storing the users: {id: string, chats: [{toUser: [], fromUser: []}]}
export const userContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState([{
        id: 1,
        chats: [{
        toUser: ["I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you’d be able to refund me, as it is un-opened."],
        fromUser: ["Let me just look into this for you, Luis."]
    }]},
    {
        id: 2,
        chats: [{
        toUser: ["Hi there, I haven't received my Nike order from 5 days ago. Order #NK-789456123."],
        fromUser: ["Hi Ivan! Your order is being prepared and will ship within 24 hours. You'll get tracking info via email once it's dispatched."]
    }]},
        {
        id: 3,
        chats: [{
        toUser: ["Good Morning, I'm interested in bulk ordering for my retail store. Can you provide wholesale pricing?"],
        fromUser: ["Good morning! I'll connect you with our wholesale team right away. They'll send pricing and minimum order details within 2 hours."]
    }]},
        {
        id: 4,
        chats: [{
        toUser: ["Bug report - your API is returning 500 errors when I try to create bookings with multiple guests."],
        fromUser: ["Thanks for reporting this. I've escalated to our dev team immediately. Can you share your API key and a sample request? We'll have a fix within 4 hours."]
    }]},
        {
        id: 5,
        chats: [{
        toUser: ["Hey there, I'm unable to access my online banking account. It keeps saying my password is incorrect but I know it's right."],
        fromUser: ["Hi Miracle! I can help with that. For security, I'll need to verify your identity first. Can you provide your account number and the phone number on file?"]
    }]}                            
])

    return (
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}

// UserNumber context for storing the user id of the selected user.
export const userNumberContext = createContext()

export const UserNumberProvider = ({children}) => {
    const [userNumber, setUserNumber] = useState(1)

    return (
        <userNumberContext.Provider value={{userNumber, setUserNumber}}>
            {children}
        </userNumberContext.Provider>
    )
}