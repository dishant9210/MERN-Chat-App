import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useConversation from '../zustand/useConversation';

const useSendMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    const url = process.env.URL;
    setLoading(true);
    const id = selectedConversation?._id;
    if (!id) {
      toast.error("Conversation ID not found");
      setLoading(false);
      return;
    }
  
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(`${url}/api/messages/send/${id}`, { message }); // Send message as an object
      const data = res.data;
      if (data.error) {
        throw new Error(data.error);
      }
      console.log("in the sendmessage",data);
      setMessages([...messages, data.newMessage]);
      console.log(" after setting ",data);
    } catch (error) {
      toast.error(error.message); // Corrected to error.message
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessages;
