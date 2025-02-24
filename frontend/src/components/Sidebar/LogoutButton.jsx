import React, { use } from 'react'
import { CiLogout } from "react-icons/ci";
import { useLogout } from '../../hooks/logout';

const LogoutButton = () => {
  const {loading,logout} = useLogout()
  return (
    <div className='mt-auto'>
        {loading ? <span className='loading loading-spinner'></span> : <CiLogout onClick={logout} className='w-6 h-6 text-white cursor-pointer' /> }
    </div>
  )
}

export default LogoutButton

// import React from 'react'
// import { CiLogout } from "react-icons/ci";

// const LogoutButton = () => {
//   return (
//     <div className='mt-auto'>
//         <CiLogout  className='w-6 h-6 text-white cursor-pointer' />
//     </div>
//   )
// }

// export default LogoutButton