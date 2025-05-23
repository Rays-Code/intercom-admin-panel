import React, { useContext } from 'react'
import { userContext, userNumberContext} from '../contexts/userContext'
import Avator from './Avator';

const Chats = () => {
    const { user } = useContext(userContext);
    const { userNumber } = useContext(userNumberContext);

    const selectedUser = user.find(u => u.id === userNumber);

    if (!selectedUser) return <div>No chat found</div>;


  return (
    <div>
        <div>
            {selectedUser.chats.map((chat, index) => (
              <div key={index} className='w-full flex flex-col'>
             {/* Map through fromUser */}   
             {chat.fromUser.map((msg, i) => {
                return <div className='flex items-center'>
                    <div key={`from-${i}`} className='flex flex-col pl-5 pt-3 pb-2 pr-3 bg-[#c7d4f5] rounded-xl ml-102 m-3 max-w-md min-w-xs break-all w-fit'>
                      <div className='text-sm'>{msg}</div>
                      <div className='ml-55 mt-2 text-sm text-[#6b7280] '>Seen ∙ 1min</div>
                    </div>
                    <img src="/assets/images/person_avator.avif" className="h-7 w-7 rounded-full mt-8"/>
                </div>
             })}

             {/* Map through toUser */}
             {chat.toUser.map((msg, i) => {
                return <div className='flex items-center'>
                            <div className={`flex justify-center items-center rounded-full text-white text-xs font-bold font-inter w-6 h-6 mt-8 bg-[#7c84e8]`}>
                                {"Luis"[0]}
                                </div>
                        <div key={`toUser-${i}`} className='px-5 pt-3 pb-4 bg-[#eeefec] rounded-xl mr-102 m-3 max-w-md min-w-xs min-h-[72px] break-all w-fit'>
                        <div className='text-sm'>{msg}</div>
                       <div className='flex items-center gap-2 mt-2 text-sm text-[#6b7280]'>
                        <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="#6B7280"><path d="M10.3 1H1.7C1.31 1 1 1.31 1 1.7V9.3C1 9.69 1.31 10 1.7 10H8.45L10.33 11.88C10.58 12.13 11 11.95 11 11.6V1.7C11 1.31 10.69 1 10.3 1ZM8.73 6.83C7.97 7.47 7 7.82 6 7.82C5 7.82 4.03 7.47 3.27 6.83C2.95 6.56 2.91 6.09 3.18 5.77C3.45 5.45 3.92 5.41 4.24 5.68C5.23 6.51 6.79 6.51 7.78 5.68C8.1 5.41 8.57 5.45 8.84 5.77C9.11 6.09 9.07 6.56 8.75 6.83H8.73Z"></path></svg>
                        <span>1min</span>
                       </div>
                    </div>
                    </div>
             })}
              </div>
            ))}
        </div>
    </div>
  )
}

export default Chats