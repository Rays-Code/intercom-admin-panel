import { useNavigate } from "react-router-dom"


const MobileAppBar = () => {
    const Navigate = useNavigate()

  return (
    <div className="flex justify-between gap-2 pb-6 pt-3 px-4 font-inter border-b border-[#eeefec] w-full">
        <div className="flex gap-4">
        <div className="font-bold text-base cursor-pointer" onClick={() => Navigate("/")}>Your inbox</div>
        <div className="font-bold text-base cursor-pointer">Luis Easton</div>
        </div>
        <div className="font-bold text-base cursor-pointer mt-1" onClick={() => {
            Navigate("/chatbot/fin")
        }}>
             <div className="flex gap-1 text-gray-500 font-semibold text-xs bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">
              <div>
                <img src="/assets/images/blue_intercom_logo.webp" className="w-4 h-4"/>
              </div>
                <div className="cursor-pointer">AI Copilot</div>
            </div>
        </div>
    </div>
  )
}

export default MobileAppBar