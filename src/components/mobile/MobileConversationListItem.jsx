import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userNumberContext } from '../../contexts/userContext'
import MobileAvator from './MobileAvator'

const MobileConversationListItem = ({avatorColor, name, message, time, userId}) => {
    const Navigate = useNavigate()

    const [clicked, setclicked] = useState(false)
    const { setUserNumber } = useContext(userNumberContext);
    
  return (
    <div className={`flex gap-2 mt-5 cursor-pointer border-b border-[#eeefec] pb-2 px-2 p-1 rounded-lg ${clicked? 'bg-[#e8edf9] text-[#6e6e6e] px-3': 'text-black'}`} onClick={()=> {
        setclicked(!clicked)
        setUserNumber(userId)
        Navigate("/chat")
        }}
        > 

        <MobileAvator name={name} avatorColor={avatorColor}/>

        <div className='flex flex-col text-xs'>
            <div className='font-semibold'>{name}</div>
            <div className='flex justify-between items-center text-xs gap-5'>
                <div className='w-[260px]'>{message.slice(0, 15) + ".."}</div>
                <div className='text-[#646462] text-xs mt-[1px]'>{time}</div>
            </div>
        </div>

    </div>
  )
}

export default MobileConversationListItem