import React, { useState, useCallback } from 'react';
import { BiSend } from "react-icons/bi";
import useSendMessages from '../../../hooks/useSendMessages';

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessages();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};


  return (
    <form onSubmit={handleSubmit} className='px-3 mx-3'>
      <div className='w-auto relative'>
        <input
          type="text"
          className='border w-full text-sm p-2.5 rounded-lg block bg-gray-700 text-white border-gray-600'
          placeholder='Send a message'
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button type="submit" className='absolute inset-y-0 end-0 items-center flex pe-3' disabled={loading}>
          {loading ? <span className='loading loading-spinner'></span> : <BiSend />}
        </button>
      </div>
    </form>
  );
}

export default MessageInput;