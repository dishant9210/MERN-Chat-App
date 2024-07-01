import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetCoversation from '../../hooks/useGetConversation';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetCoversation();
  const handleChange = (e)=>{
    e.preventDefault();
    if(!search) return ;
    if(search.length < 3)
      return toast.error("search input much be at least 3 characters long");
    const conversation = conversations.find((c)=>{return c.fullName.toLowerCase().includes(search.toLowerCase())});
    
  if(conversation){
    setSelectedConversation(conversation);
    setSearch("");
  }else{
    toast.error("No such user found")
  }
    
  }

  return (
    
      <form onSubmit= {handleChange}className='flex  gap-2 items-center'>
        <input type="text" placeholder='search...' className='input input-bordered rounded-full '  
        value={search} onChange={(e)=>{setSearch(e.target.value)}}
        />
        <button className='btn btn-circle bg-sky-500 outline-none text-white'>
          <IoSearchSharp className='h-6 w-6 outline-none' />
        </button>
      </form>
   
  )
}

export default SearchInput