import React from 'react'

const Message = () => {
  return (
    <div>
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className="chat-bubble bg-blue-500 text-white">.</div>
            <div className="chat-footer opacity-50">Delivered</div>
        </div>        
    </div>
  )
}

export default Message