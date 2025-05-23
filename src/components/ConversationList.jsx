import React from 'react'
import ConversationListItem from './ConversationListItem'

const ConversationList = () => {
  return (
    <div className='px-5 pt-3 flex flex-col w-[30%] border-r border-[#eeefec] max-h-[700px] overflow-y-auto'>
        <div className='flex justify-between'>
            <div className='flex items-center'>
                <span className="font-semibold cursor-pointer flex flex-row items-center gap-1 text-sm">5 Open</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"/>
                </svg>
            </div>

            <div className='flex items-center'>
                <span className="font-semibold cursor-pointer flex flex-row items-center gap-1 text-sm">Waiting longest</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"/>
                </svg>
            </div>
        </div>

        <ConversationListItem avatorColor={"Blue"} name={"Luis ∙ GitHub"} message={"Hey! I have idea.."} time={"45m"} userId={1}/>
        <ConversationListItem avatorColor={"Red"} name={"Ivan ∙ Nike"} message={"Hi there, I have a"} time={"30m"} userId={2}/>
        <ConversationListItem avatorColor={"Blue"} name={"Lead from New York"} message={"Good Morning, let me.."} time={"40m"} userId={3}/>
        <ConversationListItem avatorColor={"Navy"} name={"Booking API Problems"} message={"Bug report"} time={"45m"} userId={4}/>
        <ConversationListItem avatorColor={"Gray"} name={"Miracle ∙ Exemplary Bank"} message={"Hey there, I'm here to.."} time={"45m"} userId={5}/>



        <div className='mt-58 flex gap-2 rounded-lg shadow-lg p-2 w-[75px] cursor-pointer fixed bottom-0 left-0 ml-4 mb-3 bg-white'>
        <div className='shadow-sm bg-[#dcdcda] rounded px-1 py-1'>
           <svg class="w-5 h-5" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
           <rect x="10" y="5" width="10" height="30" rx="2" ry="2" fill="#333333" />
           <rect x="25" y="5" width="10" height="30" rx="2" ry="2" fill="#333333" />
           </svg>
        </div>

        <div>
           <svg class="w-5 h-5" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
           <rect x="5" y="10" width="30" height="4" rx="1" ry="1" fill="#333333" />
           <rect x="5" y="18" width="30" height="4" rx="1" ry="1" fill="#333333" />
           <rect x="5" y="26" width="30" height="4" rx="1" ry="1" fill="#333333" />
        </svg>
        </div>
        </div>        
    </div>
  )
}

export default ConversationList