import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'
import { getEmoji } from '../../utils/emoji';

const Conversations = () => {
  const {conversations,loading} = useGetConversations();
  return (
    <div className='flex flex-col overflow-auto pb-5'>
      {conversations.map((conversation,index)=>(
        <Conversation
         key={conversation._id}
         conversation={conversation}
          lastIndex={index === conversations.length-1}
          emoji={getEmoji()}
          />
      ))}
    
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Conversations