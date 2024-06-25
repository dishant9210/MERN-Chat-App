import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    
      <form className='flex  gap-2 items-center'>
        <input type="text" placeholder='search...' className='input input-bordered rounded-full ' />
        <button className='btn btn-circle bg-sky-500 outline-none text-white'>
          <IoSearchSharp className='h-6 w-6 outline-none' />
        </button>
      </form>
   
  )
}

export default SearchInput