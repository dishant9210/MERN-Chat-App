import React from 'react'

const Converstion = () => {
  return (
    <>
    <div className='flex gap-2 p-2  items-center py-1 rounded hover:bg-sky-500 cursor-pointer '>
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    <div className='flex flex-1 flex-col '>
      <div className='flex gap-3 justify-between'>
      <p className='font-bold text-gray-200'>renyera</p>
      <span className='text-xl'>🤩</span>
      </div>
    </div>
    </div>
    <div className='divider py-0 my-0 h-1'></div>
    </>
  )
}

export default Converstion