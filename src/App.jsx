import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminPanel from './pages/desktop/AdminPanel'
import { UserNumberProvider, UserProvider } from './contexts/userContext'
import useIsMobile from "./hooks/useIsMobile"
import MobileAdminPanel from "./pages/mobile/MobileAdminPanel"
import MobileConversationPageBody from "./components/mobile/MobileConversationPageBody"
import MobileChatbotPanel from "./components/mobile/MobileChatbotPanel"

const App = () => {

  const isMobile = useIsMobile()

  return (
    <BrowserRouter>
    <UserProvider>
      <UserNumberProvider>
    <div className='font-inter'>
      <Routes>
        <Route path="/" element={isMobile? <MobileAdminPanel />: <AdminPanel />}></Route>
        <Route path="/chat" element={isMobile? <MobileConversationPageBody />: <AdminPanel />}></Route>
        <Route path="/chatbot/fin" element={isMobile? <MobileChatbotPanel />: <AdminPanel />}></Route>

      </Routes>
    </div>
    </UserNumberProvider>
    </UserProvider>
    </BrowserRouter>
  )
}

export default App