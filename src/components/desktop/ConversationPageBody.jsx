import { useContext, useState } from 'react'
import Chats from './Chats'
import { userContext, userNumberContext } from '../../contexts/userContext'

const ConversationPageBody = () => {
  const [focused, setFocused] = useState(false)
  const [message, setMessage] = useState("")
  const {user, setUser} = useContext(userContext)
  const {userNumber} = useContext(userNumberContext)


  return (
    <div className="relative max-h-[500px] overflow-y-auto w-full max-w-full border-r border-[#eeefec] flex flex-col justify-between items-center">

      {/* chats.jsx  - inside there will be chats of both parties*/}
      <div>
        <Chats />
      </div>
      {/* input component */}
      <div>
        
      </div>
      <div className='fixed right-0 bottom-0 mr-120 z-[9999]'>
        <div className='flex gap-2 justify-center items-center absolute ml-4 mt-2 pt-[2px]'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4 9H8V9h8v2zm2-4H6V5h12v2z" /></svg>
          <span className='text-sm font-bold'>Chat</span>
        </div>


        <input type='text' placeholder='Use ⌘K for shortcuts' value={message} className='rounded w-[750px] pb-18 pt-10 pr-12 pl-4 rounded-2xl mb-3 shadow-2xl focus:border-[#eeefec] bg-white'
        onChange={(e) => {setMessage(e.target.value)
          setFocused(true)
        }} 
        onKeyDown={(e) => {
          if(e.key === "Enter"){
            setUser(prevUser => prevUser.map(u => u.id === userNumber? 
            {
              ...u,
              chats: [
                ...u.chats,
                {
                  fromUser: [message],
                  toUser: []
                }
              ]
            }
            : u
          ))
          setMessage("");
          }
        }}
        />
        <div>
          <div className='fixed flex gap-2 top-170 ml-4'>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='w-4 h-4'><path d="M13 2L4.5 12.5H11L9 22L18.5 10H12L13 2Z" fill="#333333" stroke="#333333" stroke-width="0.5" stroke-linejoin="round" stroke-linecap="round"/></svg>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"><path d="M5 3C5 2.44772 5.44772 2 6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.3905 18.7693 21.7453 18.4118 21.9079C18.0542 22.0705 17.6299 22.0126 17.3289 21.7605L12 17.25L6.67105 21.7605C6.37014 22.0126 5.94584 22.0705 5.58824 21.9079C5.23065 21.7453 5 21.3905 5 21V3Z" fill="#333333"/><path d="M5 8H19V9.5H5V8Z" fill="#FFFFFF"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className='h-4 w-4' ><circle cx="32" cy="32" r="30" fill="black" /><circle cx="22" cy="24" r="4" fill="white" /><circle cx="42" cy="24" r="4" fill="white" /><path d="M20 40c3 4 9 6 12 6s9-2 12-6" fill="white" /></svg>
        </div>


        <button onClick={() => {
          setUser(prevUser => prevUser.map(u => u.id === userNumber? 
            {
              ...u,
              chats: [
                ...u.chats,
                {
                  fromUser: [message],
                  toUser: []
                }
              ]
            }
            : u
          ))
          setMessage("");
        }}
        className={`cursor-pointer absolute right-4 bottom-6 px-4 pt-2 pb-2 flex justify-center items-center gap-2 text-[#9ca3af] font-semibold text-sm font-inter ${focused? "bg-black rounded-2xl text-white": ""}`}>
          <span className='border-r border-[#dcded9] pr-3'>Send</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"/>
          </svg>
        </button> 
        </div> 
      </div>


    </div>
  )
}

export default ConversationPageBody