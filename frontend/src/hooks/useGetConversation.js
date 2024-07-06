import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import toast from 'react-hot-toast';


const useGetCoversation = () => {
  const url = import.meta.env.VITE_API_URL;
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);
  
    useEffect(() => {
      const getConversations = async () => {
        setLoading(true);
      
  
        try {
          axios.defaults.withCredentials = true;
          const res = await axios.get(`${url}/api/user/`);
          const data = res.data;
          if (data.error) {
            throw new Error(data.error);
          }
          
          setConversations(data);
        } catch (error) {
          toast.error(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      getConversations();
    }, []); // The side effect will only be executed when the component mounts
  
    return { loading, conversations };
  };

export default useGetCoversation