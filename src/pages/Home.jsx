import React from 'react'
import Sidenav from '../components/Sidenav'
import Images from '../assets/imgs/Images'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'

const Home = () => {
    const [showText, setShowText] = useState(false);
    const [showText2, setShowText2] = useState(false);
    const [showBody, setShowBody] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(true);
        }, 0);
        const secondTimer = setTimeout(() => {
            setShowText2(true);
        }, 700);
        const thirdTimer = setTimeout(() => {
            setShowBody(true);
        }, 1200)
        return () => {
            clearTimeout(timer);
            clearTimeout(secondTimer);
            clearTimeout(thirdTimer);
        };
    }, []);
    return (
        <>
            <Sidenav />
            <div className='w-full h-screen flex flex-col justify-center align-middle '>
                <div className='flex flex-row '>
                    <div className=' md:mx-14'>
                        <div className='flex flex-row gap-2 justify-center md:justify-start md:px-20 px-10 text-orange-600'>
                            <h1 className={`md:text-4xl transition-opacity duration-700 ${showText ? 'opacity-100' : 'opacity-0'}`}>Hello! I am</h1>
                            <h1 className={`md:text-4xl font-black transition-opacity duration-700 ${showText2 ? 'opacity-100' : 'opacity-0'}`}>PAUL URCAN</h1>
                        </div>
                        <div className='line my-2 md:left-[9%] bg-orange-400'></div>
                        <div className={`flex flex-col md:flex-row gap-2 justify-center transition-opacity duration-700 ${showBody ? 'opacity-100' : 'opacity-0'}`}>
                            <div className='w-full h-full md:w-1/2 flex justify-center md:justify-start p-4 px-24 md:mx-20 md:my-10 md:p-0'>
                                <p className='text-gray-300 font-medium md:text-2xl md:bg-transparent text-center md:text-left'>I am a junior Full-Stack Web Developer committed to creating user-friendly websites, and I'm looking forward to exploring new opportunities to enhance my skills.</p>
                            </div>
                            <div className='w-full md:w-1/2 px-4 flex md:flex-row flex-col justify-center items-center md:justify-start md:my-2'>
                                <img className='avatar w-52 h-52 rounded-full md:my-4' src={Images.profilepic} alt="profile-pic" />
                                <div className='md:my-5 flex flex-col justify-center ml-5 items-center md:items-start text-gray-300'>
                                    <h1 className='font-bold md:text-2xl md:bg-transparent'>Technologies:</h1>
                                    <h1 className='font-medium md:text-2xl md:bg-transparent'>
                                        <TypeAnimation
                                            sequence={[
                                                'Html, CSS, Js',
                                                1000,
                                                'React, NodeJs',
                                                1000,
                                                'MySQL, MongoDB',
                                                1000,
                                                'Python',
                                                1000
                                            ]}
                                            wrapper="span"
                                            speed={50}
                                            style={{ fontSize: '1em', display: 'inline-block' }}
                                            repeat={Infinity}
                                        />
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row justify-center my-2 md:justify-start items-start md:mx-20'>
                            <Link to='/resume'><button className={`rounded-2xl bg-orange-600 font-medium text-gray-300 hover:text-white p-2 hover:bg-orange-700 ease-in duration-300 ${showBody ? 'opacity-100' : 'opacity-0'}`}>Check my Resume</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home