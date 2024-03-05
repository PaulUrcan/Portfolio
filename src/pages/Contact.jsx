import React, { useState , useEffect } from 'react'
import Sidenav from '../components/Sidenav'
import { FaLinkedinIn } from 'react-icons/fa'
import { DiGithubBadge } from "react-icons/di";
import { IoMdMail, IoLogoWhatsapp } from "react-icons/io";
import { Link } from 'react-router-dom';


const openLinkInNewTab = (link) => {
  window.open(link, '_blank');
};

const Contact = () => {
  const handleLinkClick = (links) => {
    Object.values(links).forEach(link => openLinkInNewTab(link));
  };

  const links = {
    linkedin: 'https://www.linkedin.com/in/john-paul-urcan-lizondo-a1662a220',
    github: 'https://github.com/PaulUrcan',
    email: 'mailto:tucorreo@dominio.com',
    whatsapp: `https://wa.me/${3816069361}`
  };

  const [showBody, setShowBody] = useState(false);

  useEffect(() =>{
    const show = setShowBody(true);
    })

  return (
    <>
      <Sidenav />
      <div className={`flex flex-col w-full h-screen justify-center items-center gap-5 transition-opacity duration-500 ease-in ${showBody ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className='font-bold text-3xl text-orange-600'>CONTACT ME!</h1>
        <div className='flex md:flex-row flex-col font-medium text-2xl gap-4 md:gap-3 text-orange-300'>
          <div className='rounded-full p-5 bg-gray-300 md:bg-inherit md:shadow-none shadow-xl shadow-gray-700'>
            <FaLinkedinIn onClick={() => handleLinkClick({ linkedin: links.linkedin })} className='hover:scale-125 transition-all duration-300 ease-in cursor-pointer opacity-70 hover:opacity-100 hover:text-orange-500' />
          </div>
          <div className='rounded-full p-5 bg-gray-300 md:bg-inherit md:shadow-none shadow-xl shadow-gray-700'>
            <DiGithubBadge onClick={() => handleLinkClick({ github: links.github })} className='hover:scale-150 transition-all duration-300 ease-in cursor-pointer opacity-70 hover:opacity-100 hover:text-orange-500' />
          </div>
          <Link to='/mail' className='rounded-full p-5 bg-gray-300 md:bg-inherit md:shadow-none shadow-xl shadow-gray-700'>
            <IoMdMail className='hover:scale-125 transition-all duration-300 ease-in cursor-pointer opacity-70 hover:opacity-100 hover:text-orange-500' />
          </Link >
          <div className='rounded-full p-5 bg-gray-300 md:bg-inherit md:shadow-none shadow-xl shadow-gray-700'>
            <IoLogoWhatsapp onClick={() => handleLinkClick({ whatsapp: links.whatsapp })} className='hover:scale-125 transition-all duration-300 ease-in cursor-pointer opacity-70 hover:opacity-100 hover:text-orange-500' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact