const Avator = ({name, avatorColor}) => {

  return (
    <div className={`flex justify-center items-center rounded-full text-white text-xs font-bold font-inter w-6 h-6 mt-1 
    ${avatorColor=="Red"? "bg-[#e53945]" : ""}
    ${avatorColor=="Blue"? "bg-[#7c84e8]" : ""}
    ${avatorColor=="Navy"? "bg-[#0f1023]" : ""}
    ${avatorColor=="Gray"? "bg-[#dcdcda]" : ""}
    `}>
        {name[0]}
    </div>
  )
}

export default Avator