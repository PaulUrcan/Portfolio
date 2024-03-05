import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Sidenav from '../components/Sidenav';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const Mail = () => {
  const [showText, setShowText] = useState(false);
  const [showText2, setShowText2] = useState(false);

  useEffect(() => {
      const timer = setTimeout(() => {
          setShowText(true);
      }, 0);
      const secondTimer = setTimeout(() => {
          setShowText2(true);
      }, 400);
      return () => {
          clearTimeout(timer);
          clearTimeout(secondTimer);
      };
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kpe6lfr', 'template_kh4anws', form.current, {
        publicKey: 'M6nthGULuphYO0j2o',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <Sidenav />
      <div className='flex flex-col h-screen justify-center items-center overflow-hidden'>
        <h1 className={`font-bold text-orange-600 text-3xl my-10 border-b-2 border-orange-300 cursor-default transition-opacity duration- ease-in ${showText ? 'opacity-100' : 'opacity-0'}`}>SEND ME AN EMAIL!</h1>
        <form ref={form} onSubmit={sendEmail} className={`flex flex-col justify-center items-center w-screen transition-opacity duration- ease-in ${showText2 ? 'opacity-100' : 'opacity-0'}`}>
          <label className='text-gray-300 font-semibold'>Name</label>
          <input className='w-2/6 rounded-md mb-4' type="text" name="user_name" />
          <label className='text-gray-300 font-semibold'>Email</label>
          <input className='w-2/6 rounded-md mb-4' type="email" name="user_email" />
          <label className='text-gray-300 font-semibold'>Message</label>
          <textarea name="message" className='w-2/6 h-48 rounded-md mb-4' />
          <Popup 
          trigger={<input type="submit" value="Send" className='rounded-2xl my-2 px-5 bg-orange-600 font-medium text-gray-300 p-2 hover:bg-orange-700 hover:text-white cursor-pointer ease-in duration-300' />}>
            <div className='flex font-medium justify-center items-center'>Email Sent!</div>
          </Popup>
          
        </form>
      </div>
    </>
  );
};

export default Mail