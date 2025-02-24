import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MessageContainer from '../../components/Messages/MessageContainer'

const Home = () => {
  return (
    <div className='w-full min-h-screen flex flex-col md:flex-row rounded-lg p-4 md:p-6 sm:p-0 shadow-md bg-gray-400 bg-clip-padding
     backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home
