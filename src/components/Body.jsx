import ChatBotPanel from "./ChatBotPanel"
import MessagesBar from "./MessagesBar"


const Body = () => {
  return (
    <div className='grid grid-cols-[70%_30%] h-screen'>
        <MessagesBar />
        <ChatBotPanel />
    </div>
  )
}

export default Body