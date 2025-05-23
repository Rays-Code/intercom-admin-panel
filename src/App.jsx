import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminPanel from './pages/AdminPanel'
import { UserNumberProvider, UserProvider } from './contexts/userContext'
import ConversationList from "./components/ConversationList"

const App = () => {
  return (
    <BrowserRouter>
    <UserProvider>
      <UserNumberProvider>
    <div className='font-inter'>
      <Routes>
        <Route path="/" element={<AdminPanel />}></Route>
      </Routes>
    </div>
    </UserNumberProvider>
    </UserProvider>
    </BrowserRouter>
  )
}

export default App