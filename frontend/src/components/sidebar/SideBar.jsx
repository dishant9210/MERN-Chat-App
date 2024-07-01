import React from 'react'
import SearchInput from './SearchInput.jsx'
import Conversations from './Conversations.jsx'
import Logout from './Logout.jsx'


const SideBar = () => {

  return (
    <div className='flex flex-col border-r border-slate-500 p-4'>
        <SearchInput/>
        <div className="divider px-3"></div>
        <Conversations/>
        <Logout/>
    </div>
  )
}

export default SideBar;