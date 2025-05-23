import ChatBotPanel from "./ChatBotPanel"
import MessagesBar from "./MessagesBar"

/**
 * Body component renders the main layout with two columns:
 * - Left: MessagesBar (70%)
 * - Right: ChatBotPanel (30%)
 */

const Body = () => {
  return (
    <div className='grid grid-cols-[70%_30%] h-screen'>
        <MessagesBar />
        <ChatBotPanel />
    </div>
  )
}

export default Body