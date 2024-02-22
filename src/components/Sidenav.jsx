import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail, AiOutlinePaperClip } from 'react-icons/ai'
import { GrProjects } from 'react-icons/gr'
import { Link } from 'react-router-dom';

const Sidenav = () => {
    const [nav, setNav ] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        console.log('cambio')
    };
    return(
        <>
            <AiOutlineMenu onClick={handleNav} className='absolute top-3 left-3 block md:hidden' />
            {nav ? 
            (<div className='fixed w-full h-screen bg-white flex flex-col justify-center items-center z-20'>
                <Link to='/' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 hover:bg-blue-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'><AiOutlineHome size={20} />
                    <span className='pl-4'>Home</span>
                </Link>
                <Link to='/work' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 hover:bg-blue-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'><GrProjects size={20} />
                    <span className='pl-4'>Work</span>
                </Link>
                <Link to='/projects' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 hover:bg-blue-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'><AiOutlineProject size={20} />
                    <span className='pl-4'>Projects</span>
                </Link>
                <Link to='/resume' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 hover:bg-blue-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'><AiOutlinePaperClip size={20} />
                    <span className='pl-4'>Resume</span>
                </Link>
                <Link to='/contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 hover:bg-blue-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'><AiOutlineMail size={20} />
                    <span className='pl-4'>Contact</span>
                </Link>
            </div>)
            :
            (<div></div>)}
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <Link to='/' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-blue-100 hover:scale-110 ease-in duration-300'>
                        <AiOutlineHome size={20}/>
                    </Link>
                    <Link to='/work' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-blue-100 hover:scale-110 ease-in duration-300'>
                        <GrProjects size={20}/>
                    </Link>
                    <Link to='/projects' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-blue-100 hover:scale-110 ease-in duration-300'>
                        <AiOutlineProject size={20}/>
                    </Link>
                    <Link to='/resume' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-blue-100 hover:scale-110 ease-in duration-300'>
                        <AiOutlinePaperClip size={20}/>
                    </Link>
                    <Link to='/contact' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-blue-100 hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail size={20}/>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Sidenav;
