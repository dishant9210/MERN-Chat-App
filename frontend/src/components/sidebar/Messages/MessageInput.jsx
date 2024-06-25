import React from 'react'
import { BiSend } from "react-icons/bi";

const MessageInput = () => {
  return (
    <form className='px-3 mx-3 '>
        <div className='w-auto relative'>
            <input type="text" className='border  w-full text-sm p-2.5 rounded-lg block bg-gray-700 text-white border-gray-600'
            placeholder='send a  message'/>
            <button className='absolute inset-y-0 end-0 items-center flex pe-3'>
            <BiSend />
            </button>
        </div>
    </form>
    
  )
}

export default MessageInput