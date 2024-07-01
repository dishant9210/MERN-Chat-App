import React from 'react';
import useConversation from '../../zustand/useConversation';

const Conversation = ({ conversation, emoji, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = conversation._id === selectedConversation?._id;

  return (
    <>
      <div className={`flex gap-2 p-2 items-center py-1 rounded hover:bg-sky-500 cursor-pointer ${isSelected ? "bg-sky-500" : ""}`}
        onClick={() => { setSelectedConversation(conversation) }}
      >
        {/* Simplified avatar component */}
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt={`${conversation.fullName}'s avatar`} />
          </div>
        </div>
        <div className='flex flex-1 flex-col'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-200'>{conversation.fullName}</p>
            <span className='text-xl'>{emoji}</span>
          </div>
        </div>
      </div>

      {/* Conditional rendering of divider */}
      {!lastIdx && <div className='divider py-0 my-0 h-1' />}
    </>
  );
};

export default Conversation;
