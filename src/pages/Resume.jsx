import React, { useEffect } from 'react'
import Sidenav from '../components/Sidenav'
import Images from '../assets/imgs/Images'
import { useState } from 'react'

const Resume = () => {
  const [showBody, setShowBody] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const show = setShowTitle(true);
    const timer = setTimeout(() => {
      setShowBody(true);
    }, 300);
    return () =>{
      clearTimeout(timer);
    }
  })


  const [pdfUrl] = useState([
    { name: 'PaulUrcan-Curriculum.pdf', url: '/PaulUrcan-Curriculum.pdf' },
    { name: 'PaulUrcan-Resume.pdf', url: '/PaulUrcan-Resume.pdf' }
  ]);

  const handleViewPdf = (url) => {
    window.open(url, '_blank');
  };

  const handleDownloadPdf = (pdfUrl, pdfName) => {
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.download = pdfName;
    anchor.click();
  };
  return (
    <>
      <Sidenav />
      <div className={`h-screen transition-opacity duration-700 ease-in ${showTitle ? 'opacity-100' : 'opacity-0'}`}>
        <div className='flex flex-col gap-2 justify-end items-center h-32'>
          <div className='flex flex-row gap-2 justify-center'>
            <h1 className='text-orange-600 text-4xl font-medium'>MY</h1>
            <h1 className='text-orange-600 text-4xl font-bold'>RESUME</h1>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-orange-300 text-xl font-medium'>SPANISH / ENGLISH</h1>
            <h1 className='text-orange-300 text-xl font-medium'>Versions</h1>
          </div>
        </div>
        <div className={`flex flex-col md:flex-row opacity-0 h-2/3 transition-opacity duration-700 ease-in justify-center items-center overflow-hidden gap-5 ${showBody ? 'opacity-100' : 'opacity-0'}`}>
          <div className='relative flex flex-row justify-center items-center md:w-1/2 w-3/4 md:mb-0 mb-5'>
            <div className='md:h-1/2 overflow-hidden md:opacity-80 hover:opacity-100 md:hover:scale-105 ease-in duration-200 md:rounded-full shadow-md shadow-black border-solid border-8 border-white'>
              <img className=' h-full' src={Images.spflag} alt="" />
              <div className='flex flex-row md:flex-col absolute top-1/2 left-1/2 duration-200 transform -translate-x-1/2 -translate-y-1/2'>
                <div class='relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12'>
                  <div class="rounded-md flex flex-col md:flex-row items-center justify-between border-solid border-white border-2 bg-red-600 p-3 gap-2 md:opacity-100 opacity-90">
                    <div class="text-lg font-bold text-gray-100">PaulUrcanCurriculum.pdf</div>
                    <div class="flex items-center space-x-2 text-gray-100">
                      <svg onClick={() => handleViewPdf(pdfUrl[0].url)} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className='h-6 w-6 cursor-pointer' viewBox="0 0 442.04 442.04">
                        <g>
                          <g>
                            <path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203    c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219    c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367    c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021    c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212    c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071    c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z" />
                          </g>
                          <g>
                            <path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188    c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993    c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5    s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z" />
                          </g>
                          <g>
                            <path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z" />
                          </g>
                        </g>
                      </svg>
                      <svg onClick={() => handleDownloadPdf(pdfUrl[0].url, pdfUrl[0].name)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 cursor-pointer">
                        <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm5.845 17.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V12a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z" clip-rule="evenodd" />
                        <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='relative flex flex-row justify-center items-center md:w-1/2 w-3/4'>
            <div className='md:h-1/2 overflow-hidden md:opacity-80 hover:opacity-100 md:hover:scale-105 ease-in duration-200 md:rounded-full shadow-md shadow-black border-solid border-8 border-white'>
              <img className='h-full' src={Images.ukflag} alt="" />
              <div className='flex flex-row md:flex-col absolute top-1/2 left-1/2 duration-200 transform -translate-x-1/2 -translate-y-1/2'>
                <div class='relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12'>
                  <div class="rounded-md flex flex-col md:flex-row items-center justify-between border-solid border-white border-2 bg-red-600 p-3 gap-2 md:opacity-100 opacity-90">
                    <div class="text-lg font-bold text-gray-100">PaulUrcanResume.pdf</div>
                    <div class="flex items-center space-x-2 text-gray-100">
                      <svg onClick={() => handleViewPdf(pdfUrl[1].url)} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className='h-6 w-6 cursor-pointer' viewBox="0 0 442.04 442.04">
                        <g>
                          <g>
                            <path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203    c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219    c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367    c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021    c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212    c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071    c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z" />
                          </g>
                          <g>
                            <path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188    c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993    c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5    s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z" />
                          </g>
                          <g>
                            <path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z" />
                          </g>
                        </g>
                      </svg>
                      <svg onClick={() => handleDownloadPdf(pdfUrl[1].url, pdfUrl[1].name)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                        <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm5.845 17.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V12a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z" clip-rule="evenodd" />
                        <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default Resume; 