import React, { useContext, useState } from 'react'
import Avator from './Avator'
import { userNumberContext } from '../../contexts/userContext'

const ConversationListItem = ({avatorColor, name, message, time, userId}) => {
    const [clicked, setclicked] = useState(false)
    const { setUserNumber } = useContext(userNumberContext);

  return (
    <div className={`flex gap-2 mt-3 cursor-pointer border-b border-[#eeefec] pb-2 px-2 p-1 rounded-lg ${clicked? 'bg-[#e8edf9] text-[#6e6e6e] px-3': 'text-black'}`} onClick={()=> {
        setclicked(!clicked)
        setUserNumber(userId)
        }}> 
        <Avator name={name} avatorColor={avatorColor}/>
        <div className='flex flex-col text-[13px]'>
            <div className='font-semibold'>{name}</div>
            <div className='flex justify-between text-[13px] gap-5'>
                <span className='w-[120px]'>{message.slice(0, 15) + ".."}</span>
                <div className='text-[#646462] text-[13px] mt-[1px]'>{time}</div>
            </div>
        </div>
    </div>
  )
}

export default ConversationListItem