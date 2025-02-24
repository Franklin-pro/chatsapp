import React, { useState } from 'react'
import { BiSend } from 'react-icons/bi'
import useSendMessage from '../../hooks/useSendMessage'
const MessageInput = () => {

  const [message , setMessage] = useState("");
  const {loading,sendMessage}=useSendMessage();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
   setMessage("")
 
  }
  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className='relative'>
        <input type="text" 
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        placeholder='send message' className='border text-sm border-gray-500 rounded-lg block p-2 w-full' />
        <button
        type='submit'
        disabled={loading}
         className='absolute inset-y-0 end-0 flex items-center pe-3 right-0'> 
            {loading ? <div className='loading loading-spinner'></div> : <BiSend/>}
        </button>
        </div>
    </form>
  )
}
export default MessageInput


// STARTER CODE FOR INPUT MESSAGE
// 

// import React from 'react'
// import { BiSend } from 'react-icons/bi'
// const MessageInput = () => {
//   return (
//     <form className='px-4 my-3'>
//         <div>
//         <input type="text" placeholder='send message' className='border text-sm border-gray-500 rounded-lg block p-2 w-full' />
//         <button>
// <BiSend/>
//         </button>
//         </div>
//     </form>
//   )
// }

// export default MessageInput