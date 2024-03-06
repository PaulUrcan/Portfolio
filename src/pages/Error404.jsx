import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <>
      <div className='flex flex-col w-full h-screen gap-2 justify-center text-center'>
        <div className='flex flex-row justify-center gap-5 my-10'>
          <h1 className='text-6xl text-gray-300 font-medium'>ERROR</h1>
          <h1 className='text-6xl text-red-500 font-black'>404</h1>
        </div>
        <Link to='/'><button className=' bg-orange-600 font-medium text-gray-300 hover:text-white p-2 hover:bg-orange-700 ease-in duration-300 py-2 px-4 rounded-2xl'>Go Home</button></Link>
      </div>
    </>
  )
}

export default Error404