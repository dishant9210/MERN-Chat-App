import React, { useEffect } from 'react'
import useConversation from '../zustand/useConversation'
import { useSocketContext } from '../context/SocketContext';
import notification from  '../assets/sounds/notification.mp3';
const useListenMessages = () => {
  const {messages,setMessages} = useConversation();
  const {socket} = useSocketContext();


  useEffect(()=>{

    socket?.on("newMessage", (newMessage)=>{
        newMessage.shouldShake = true;
        const sound = new Audio(notification);
        sound.play();
        setMessages([...messages , newMessage]);
    })

    return ()=>{
        socket?.off("newMessage")
    }
  },[socket,messages,setMessages])
}

export default useListenMessages