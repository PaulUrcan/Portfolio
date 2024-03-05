import React from 'react'
import Sidenav from '../components/Sidenav'
import Carousel from '../components/Carousel'

const Projects = () => {
  return (
    <>
      <Sidenav/>
      <div className='w-full h-screen'>
        <Carousel />
      </div>
    </>
  )
}

export default Projects