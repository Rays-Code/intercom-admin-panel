
const AppBar = () => {
  return (
    <div className="px-5 pt-2 pb-4 font-inter border-b border-r border-[#eeefec]">
         {/* Navbar Left section */}
        <div className='flex justify-between'>
            <div className="font-bold text-xs sm:text-lg">Your inbox</div>
            <div className="font-extrabold text-xs sm:text-lg mr-70">Luis Easton</div>
            <div className='flex gap-2'>
                <button className="flex flex-row items-center gap-1 rounded text-base text-[#1A1A1A] bg-[#F3F3F1] p-2 cursor-pointer">
                    <svg class="interface-icon o__standard o__standard__small-ellipsis" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 8C4.5 8.82843 3.82843 9.5 3 9.5C2.17157 9.5 1.5 8.82843 1.5 8C1.5 7.17157 2.17157 6.5 3 6.5C3.82843 6.5 4.5 7.17157 4.5 8Z"></path><path d="M9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8Z"></path><path d="M14.5 8C14.5 8.82843 13.8284 9.5 13 9.5C12.1716 9.5 11.5 8.82843 11.5 8C11.5 7.17157 12.1716 6.5 13 6.5C13.8284 6.5 14.5 7.17157 14.5 8Z"></path></svg>
                </button>
                <button className="flex flex-row items-center gap-1 rounded text-base text-[#1A1A1A] bg-[#F3F3F1] p-2 cursor-pointer">
                    <svg class="interface-icon o__standard o__standard__snooze o__by-text" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.67007 5.61C5.54007 4.42 5.73007 3.28 6.16007 2.28C6.27007 2.04 6.02007 1.8 5.77007 1.89C2.95007 2.92 1.04007 5.85 1.60007 9.14C2.06007 11.84 4.27007 14 6.97007 14.42C9.67007 14.84 11.9401 13.68 13.3001 11.78C13.4601 11.56 13.2901 11.26 13.0201 11.3C11.8601 11.47 10.6001 11.33 9.26007 10.64C7.33007 9.64 5.91007 7.77 5.67007 5.61ZM14.0001 2H9.10007V3.30999H11.9201L9.08007 7.1V8H13.9801V6.69H11.1601L14.0001 2.89999V2Z"></path></svg>
                </button>
                <button className="font-medium cursor-pointer flex flex-row items-center gap-1 text-sm px-3 rounded-md bg-[#222222]">
                    <svg class="interface-icon o__standard o__standard__close-conversation o__by-text" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M11.83 3.5L10.73 4.6L13.27 9H9.98999V11H5.98999V9H2.71002L5.25 4.6L4.15002 3.5L0.97998 8.99001V13C0.97998 13.55 1.42998 14 1.97998 14H13.98C14.53 14 14.98 13.55 14.98 13V8.99001L11.81 3.5H11.83ZM7.65002 4.85C7.75002 4.95 7.88 5 8 5C8.12 5 8.25998 4.95 8.34998 4.85L11.35 1.85C11.66 1.53 11.44 1 11 1H5C4.55 1 4.33002 1.54 4.65002 1.85L7.65002 4.85Z"></path></svg>
                    <span className="text-white">Close</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default AppBar