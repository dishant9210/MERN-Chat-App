import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast';
import axios from 'axios';

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            const id = selectedConversation?._id;
            if (!id) {
                console.log("No selected conversation ID");
                return;
            }

            setLoading(true);
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`http://localhost:5000/api/messages/${id}`);
                const data = await res.data;

                if (data.error) {
                    throw new Error(data.error);
                }

                console.log("from the usegetMessage hook",data)
                console.log("API response:", data);
                setMessages(data);
                console.log("Messages after setting state:", messages);
            } catch (error) {
                toast.error(error.message);
                console.log("Error fetching messages:", error); // Log the error
            } finally {
                setLoading(false);
            }
        };

        if(selectedConversation?._id) getMessages();
    }, [selectedConversation?._id, setMessages]);

    

    return { loading, messages };
}

export default useGetMessages;
