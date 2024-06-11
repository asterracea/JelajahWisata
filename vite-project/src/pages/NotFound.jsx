import React from 'react'
import lost from '../assets/lost.png'
 function NotFound() {
  return (
    <div className='bg-gray-100 flex gap-5 justify-center h-screen w-screen items-center'>
      <img src={lost} alt="lost"className='text-48  w-48' />
      <div className='text-blue-950 font-mono'>
      <a className='block font-extrabold text-8xl'> 404</a>
      <a className='block text-2xl'>The page you are trying to reach</a>
      <a className='text-2xl'>is not available</a>
      </div>
    </div>
  )
}
export default NotFound;