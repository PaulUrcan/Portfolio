import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail, AiOutlinePaperClip } from 'react-icons/ai'
import { GrProjects } from 'react-icons/gr'
import { Link, useLocation } from 'react-router-dom';

const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const location = useLocation();

    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <>
            <AiOutlineMenu onClick={handleNav} className='absolute top-3 left-3 block md:hidden' />
            {nav ?
                (
                    <div className={`bg-white bg-opacity-50 fixed w-full h-screen flex flex-col justify-center items-center z-20 md:hidden transition-opacity ease-in opacity-0 duration-200 ${nav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <AiOutlineMenu onClick={handleNav} className='absolute top-3 left-3 block md:hidden' />
                        <Link to='/' className={`w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-100 shadow-gray-400 hover:bg-blue-100 text-opacity-0 hover:text-opacity-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ${location.pathname === '/' ? 'text-blue-500' : 'text-black'} `}><AiOutlineHome size={20} className={location.pathname === '/' ? 'text-blue-500' : 'text-black'} />
                            <span className='pl-4'>Home</span>
                        </Link>
                        <Link to='/work' className={`w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 hover:bg-blue-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ${location.pathname === '/work' ? 'text-blue-500' : 'text-black'}`}><GrProjects size={20} className={location.pathname === '/work' ? 'text-blue-500' : 'text-black'} />
                            <span className='pl-4'>Work</span>
                        </Link>
                        <Link to='/projects' className={`w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 hover:bg-blue-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ${location.pathname === '/projects' ? 'text-blue-500' : 'text-black'}`}><AiOutlineProject size={20} className={location.pathname === '/projects' ? 'text-blue-500' : 'text-black'} />
                            <span className='pl-4'>Projects</span>
                        </Link>
                        <Link to='/resume' className={`w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 hover:bg-blue-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ${location.pathname === '/resume' ? 'text-blue-500' : 'text-black'}`}><AiOutlinePaperClip size={20} className={location.pathname === '/resume' ? 'text-blue-500' : 'text-black'} />
                            <span className='pl-4'>Resume</span>
                        </Link>
                        <Link to='/contact' className={`w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 hover:bg-blue-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ${location.pathname === '/contact' ? 'text-blue-500' : 'text-black'}`}><AiOutlineMail size={20} className={location.pathname === '/contact' ? 'text-blue-500' : 'text-black'} />
                            <span className='pl-4'>Contact</span>
                        </Link>
                    </div>)
                :
                (<div></div>)}
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <Link to='/' className='p-2 cursor-pointer'>
                        <div className='flex flex-row items-center side-item'>
                            <div className={` rounded-full text-o shadow-lg p-4 bg-gray-100 shadow-gray-400 hover:bg-blue-100 hover:scale-110 ease-in duration-300 ${location.pathname === '/' ? 'text-blue-500' : 'text-black'}`}>
                                <AiOutlineHome size={20} />
                            </div>
                            <h1 className={`font-sm opacity-0 transition-opacity font-loader-b mx-2 ${location.pathname === '/' ? 'text-black font-bold' : ' text-gray-950'}`}>Home</h1>
                        </div>
                    </Link>
                    <Link to='/work' className='p-2 cursor-pointer '>
                        <div className='flex flex-row items-center side-item'>
                            <div className='rounded-full text-o shadow-lg p-4 bg-gray-100 shadow-gray-400 hover:bg-blue-100 hover:scale-110 ease-in duration-300'>
                                <GrProjects size={20} className={location.pathname === '/work' ? 'text-blue-500' : 'text-black'} />
                            </div>
                            <h1 className={`font-sm opacity-0 transition-opacity font-loader-b mx-2 ${location.pathname === '/work' ? 'text-black font-bold' : ' text-gray-950'}`}>Work</h1>
                        </div>
                    </Link>
                    <Link to='/projects' className='p-2 cursor-pointer side-item'>
                        <div className='flex flex-row items-center'>
                            <div className='rounded-full text-o shadow-lg p-4 bg-gray-100 shadow-gray-400 hover:bg-blue-100 hover:scale-110 ease-in duration-300'>
                                <AiOutlineProject size={20} className={location.pathname === '/projects' ? 'text-blue-500' : 'text-black'} />
                            </div>
                            <h1 className={`font-sm opacity-0 transition-opacity font-loader-b mx-2 ${location.pathname === '/projects' ? 'text-black font-bold' : ' text-gray-950'}`}>Projects</h1>
                        </div>
                    </Link>
                    <Link to='/resume' className='p-2 cursor-pointer side-item'>
                        <div className='flex flex-row items-center'>
                            <div className='rounded-full text-o shadow-lg p-4 bg-gray-100 shadow-gray-400 hover:bg-blue-100 hover:scale-110 ease-in duration-300'>
                                <AiOutlinePaperClip size={20} className={location.pathname === '/resume' ? 'text-blue-500' : 'text-black'} />
                            </div>
                            <h1 className={`font-sm opacity-0 transition-opacity font-loader-b mx-2 ${location.pathname === '/resume' ? 'text-black font-bold' : ' text-gray-950'}`}>Resume</h1>
                        </div>
                    </Link>
                    <Link to='/contact' className='p-2 cursor-pointer side-item'>
                        <div className='flex flex-row items-center'>
                            <div className='rounded-full text-o shadow-lg p-4 bg-gray-100 shadow-gray-400 hover:bg-blue-100 hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail size={20} className={location.pathname === '/contact' ? 'text-blue-500' : 'text-black'} />
                            </div>
                            <h1 className={`font-sm opacity-0 transition-opacity font-loader-b mx-2 ${location.pathname === '/contact' ? 'text-black font-bold' : ' text-gray-950'}`}>Contact</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Sidenav;
