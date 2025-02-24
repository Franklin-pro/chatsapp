import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';
const SearchInput = () => {
  const [search, setSearch] = useState('');
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations(search);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }
    const conversation = conversations.find((c) => c.username.toLowerCase().includes(search.toLowerCase()));
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    } else toast.error("No user found");
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-info w-full max-w-xs"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
         />
 
      <button type='submit' className='bg-blue-400 p-3 rounded-md text-white'>
        <FaSearch />
      </button>
    </form>
  )
}

export default SearchInput

// STATER CODE FOR SEARCH INPUT 
// import React from 'react'
// import { FaSearch } from "react-icons/fa";
// const SearchInput = () => {
//   return (
//   <form className='flex items-center gap-2'>
//     <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
//     <button className='btn btn-circle bg-slate-500 border-slate-500'>
//         <FaSearch />
//     </button>
//   </form>
//   )
// }

// export default SearchInput