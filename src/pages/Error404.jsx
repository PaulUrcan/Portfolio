import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <>
      <div className='flex flex-col w-full h-screen gap-2 justify-center text-center'>
        <div className='flex flex-row justify-center gap-5 my-10'>
          <h1 className='text-6xl font-medium'>ERROR</h1>
          <h1 className='text-6xl text-red-500 font-black'>404</h1>
        </div>
        <Link to='/'><button className='bg-gray-200 border-1 border-slate-600 hover:bg-slate-400 duration-300 text-black font-bold py-2 px-4 rounded-2xl'>Go Home</button></Link>
      </div>
    </>
  )
}

export default Error404