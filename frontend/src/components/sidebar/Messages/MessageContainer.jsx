import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { FaRegMessage } from "react-icons/fa6";



const MessageContainer = () => {
  const notSelected = false ;
  return (
    <div className='flex flex-col md:min-w-[450px]'>
      {notSelected?NoChatSelected(): ChatSelected()}
    </div>
  )
}

const ChatSelected = ()=>{
return <>
      
<div className='bg-slate-500 px-4 py-2 mb-2'>
  <span className='lable-text'>To:</span>
  <span className='font-bold text-gray-900'>Renyera</span>
</div>

<Messages/>
<MessageInput/>

</>
}


const NoChatSelected = ()=>{
  return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 Deepanshu ❄</p>
				<p>Select a chat to start messaging</p>
				<FaRegMessage className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
}

export default MessageContainer