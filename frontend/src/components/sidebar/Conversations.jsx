import React from 'react';
import Conversation from './Conversation.jsx';
import useGetConversation from '../../hooks/useGetConversation.js';
import { getRandomEmoji } from '../../utils/emoji.js';

const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  

  return (
    <div className='flex py-2 flex-col overflow-auto'>
      {conversations.map((conversation, idx) => (
        <Conversation 
          key={conversation._id}
          conversation = {conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
          id = {conversation._id}
        />
      ))}
      {loading && <span className='loading loading-spinner'></span>}
    </div>
  );
}

export default Conversations;
