import { useState } from "react"
import { getResponse } from "../../gemini_api_integration/connect_gemini"

const MobileChatbotPanel = () => {
  const [message, setMessage] = useState("")
  const [onClickHide, setOnClickHide] = useState(false)

  const [chats, setChats] = useState([])

  async function getData(){
    const id = Date.now()

    // To update the user message instantly without waiting for the assistant's response
    setChats(chats => [
                  ...chats, 
                {
                 id,
                 user: message,
                 assistant: "..."
                }
              ])

    // Getting the assistant's response
    const data =  await getResponse(message)

    // updating the placeholder with actual response
    setChats(chats => 
      chats.map(chat => chat.id === id? {...chat, assistant: data} : chat)
    )

  }

  return (
       <div className="flex flex-col justify-between bg-gradient-to-br from-[#FFFFFF] via-[#F3F7FD] to-[#FDF0F4]">
        <div className="flex justify-between items-center pb-4 pt-3 px-4 font-inter border-b border-r border-[#eeefec]">
          <div className="flex gap-4">
            <div className="flex gap-1 text-gray-500 font-semibold text-base bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">
              <div className="mt-1">
                <img src="/assets/images/blue_intercom_logo.webp" className="w-4 h-4"/>
              </div>
                <div className="cursor-pointer">AI Copilot</div>
            </div>
            <div className="text-gray-500 font-semibold text-base cursor-pointer">Details</div>
          </div>
          <div className="cursor-pointer">
            <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
            <line x1="9" y1="4" x2="9" y2="20" />
            </svg>
          </div>
        </div>

        <div className={`flex flex-col overflow-y-auto pb-40 px-6 h-[calc(100vh-120px)] ${onClickHide? "block": "hidden"}  ml-4`}>
          {
            chats.map((chat, index) => {
              return <div className="flex flex-col mb-6 mt-5">
                <div className="flex gap-2">
                  <div>
                    <img src="/assets/images/person_avator.avif" className="w-8 h-8 rounded-full"/>
                  </div>
                  <div className="flex flex-col mb-4 gap-1">
                  <span className="font-bold text-base">You</span>
                  <span className="text-gray-600 text-xs">{chat.user}</span>
                </div> 
                </div>
                
                <div className="flex gap-2 mb-3 ml-[2px]">
                  <img src="/assets/images/intercom-logo.webp" className="h-7 w-7"/>
                  <span className="text-base font-bold">Fin</span>
                </div> 
                <div className={`p-5 rounded-lg ml-8 text-xs max-w-[320px] min-w-[260px] keep-all w-fit bg-gradient-to-br from-blue-200 via-purple-200 to-pink-100`}>
                {chat.assistant}
                </div>
              </div>
            })
          }
      
        </div>
        



        <div className={`flex justify-center ${onClickHide? "hidden": "block"} mb-20 h-screen mt-52`}>
          <div className="flex flex-col items-center gap-3">
            <div><img src="/assets/images/intercom-logo.webp" className="w-6 h-6"/></div>
            <div className="flex flex-col items-center">
              <div className="font-bold">Hi, I'm Fin AI Copilot</div>
              <div>Ask me anything about this conversation</div>
            </div>
          </div>
        </div>
         <div className="flex justify-center">
          <div className="relative">
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className="fixed bottom-0 right-0 rounded rounded-xl text-xs bg-white shadow-2xl pr-25 pl-5 py-4 mb-3 mr-10 border-2 border-[#eeefec] focus:border-indigo-600 outline-none" placeholder="Ask a question..." onKeyDown={(e) => {
              if(e.key ==="Enter"){
                getData();
                setMessage("");
                setOnClickHide(true)
              }
            }}/> 
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute fixed w-5 h-5 bottom-0 right-0 mr-6 mb-7 cursor-pointer text-gray-500 mr-15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" onClick={
                () => {
                getData();
                setMessage("");
                setOnClickHide(true)
                
                }}><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg>
          </div>
        </div>
    </div>
)
}

export default MobileChatbotPanel