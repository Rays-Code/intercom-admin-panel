import AppBar from './AppBar'
import ConversationList from './ConversationList'
import ConversationPageBody from './ConversationPageBody'

const MessagesBar = () => {
  return (
    <div className='flex flex-col'>
        <AppBar />
    <div className='flex w-full h-full'>
        <ConversationList />
        <ConversationPageBody />
    </div>
    </div>
  )
}

export default MessagesBar