import React, { useEffect, useState } from 'react'
import Sidenav from '../components/Sidenav'

const Work = () => {
  const [showText, setShowText] = useState(false);
  const [showText2, setShowText2] = useState(false);

  useEffect(() => {
      const timer = setTimeout(() => {
          setShowText(true);
      }, 0);
      const secondTimer = setTimeout(() => {
          setShowText2(true);
      }, 700);
      return () => {
          clearTimeout(timer);
          clearTimeout(secondTimer);
      };
  }, []);
  
  return (
    <>
      <Sidenav />
      <div className='flex flex-col w-full h-screen justify-center items-center gap-4'>
        <div className={`flex flex-row gap-2 text-orange-600 transition-opacity duration-700 ease-in ${showText ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className='text-3xl font-semibold'>MY</h1>
          <h1 className='text-3xl font-black'>EXPERIENCE</h1>
        </div>
        <div className={`flex flex-col items-center text-gray-300 gap-2 justify-center transition-opacity duration-700 ease-in ${showText2 ? 'opacity-100' : 'opacity-0'}`}>
          <div className='border-solid border-2 border-orange-300 shadow-lg bg-black shadow-gray-500 w-3/4 p-3 rounded-sm'>
            <h1 className='md:text-2xl text-lg font-semibold'>CBG Worlwide</h1>
            <h1 className='md:text-xl text-md'>Role based on giving the best possible experience to the client
              interacting directly with them, knowing their needs and
              preferences, and giving them orientation and assistance</h1>
            </div>
        </div>
      </div>
    </>
  )
}

export default Work