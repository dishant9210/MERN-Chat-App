import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../../hooks/useGetMessages'
import MessageSkeleton from '../../Skeletons/MessageSkeleton.jsx';

const Messages = () => {
  const { loading, messages } = useGetMessages();
  console.log("MESSAGES", messages);
  const lastMessageref = useRef();

  useEffect(()=>{
    setTimeout(()=>{
      lastMessageref.current?.scrollIntoView({behavior : "smooth"});
    }, 100)
    ;
  },[messages])
  
  return (
    <div className='flex flex-col overflow-auto px-4'>
      {loading ? (
        Array(3).fill().map((_, index) => (
          <MessageSkeleton key={index} />
        ))
      ) : messages.length > 0 ? (
        messages.map((message) => (
          <div ref= {lastMessageref} key={message._id} >
            <Message  message={message} />
          </div>
        ))
      ) : (
        <p className='text-center text-gray-500 my-4'>Send a message to start the conversation</p>
      )}
    </div>
  )
}

export default Messages