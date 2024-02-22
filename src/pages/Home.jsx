import React from 'react'
import Sidenav from '../components/Sidenav'
import Images from '../assets/imgs/Images'

const Home = () => {
    return (
        <>
            <Sidenav />
            <div className='w-full h-screen flex flex-col bg-slate-400 justify-center align-middle'>
                <div className='flex flex-row p-5'>
                    <div className=''>
                        <div className='flex flex-row gap-2 justify-center py-5'>
                            <h1 className='font-medium font-loader'>Hello! I am</h1>
                            <h1 className='font-black font-loader'>John Paul Urcan Lizondo</h1>
                        </div>
                        <div className='flex flex-col md:flex-row gap-2 justify-center items-center '>
                            <div className='w-full md:w-1/2 px-16 flex flex-row justify-center'>
                                <img className='w-3/5 h-1/5 md:w-80 md:h-80 rounded-full' src={Images.profilepic} alt="profile-pic" />
                            </div>
                            <div className='w-full h-full md:w-1/2 flex justify-center md:justify-start p-4 px-24 md:p-0 bg-slate-500'>
                                <p className='font-medium font-loader text-center md:text-left'>I am a junior Full-Stack Developer committed to creating user-friendly websites, and I'm looking forward to exploring new opportunities to enhance my skills</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home