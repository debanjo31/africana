import React from 'react'
import Imageslider from './Imageslider'
import About from './About'
import Model from './Model'
import Casting from './Casting'
import VideoImg from './img/video1.png'
import playIcon from './img/playIcon.png'
import Client from './Client'
import Booking from './Booking'
import Testimonial from './Testimonial'
import './homepage.css'

function Homepage() {
  return (
    <div className='mt-8 homepage'>
        <p className='font-bold text-4xl w-5/6 mx-auto leading-12 text-center'>Exploring Africa’s  beauty in  people</p>
        <Imageslider />
        <div className='flex items-center mb-8 '>
            <button className='bg-[#141414] element mx-auto text-center text-white px-6  py-2'>Book Apointment</button>
          
        </div>
        <div className=' bg-white'>
          <About />
          <Model />
          <div className='flex items-center mt-4'>
              <button className='bg-[#141414] mx-auto text-center text-white px-6  py-2'>See All Models</button>
          </div>
          <Casting />
          <div className='md:flex flex-row-reverse w-5/6 mx-auto'>
            <div className='md:w-3/6 flex flex-col justify-around'>
              <div className='flex mt-20 md:mt-10 md:flex-col items-center text-2xl justify-center gap-4'>
                  <p className='font-san'>LIGHTS</p>
                  <p className='font-san'>CAMERA</p>
              </div>
              <p className='font-san text-center mt-4 text-3xl font-bold'>ACTION!!!</p>
              <div>
                 <p className='text-center mt-2'>Documentary: <b> A PERFECT SHOOT </b></p>
                <div className='flex items-center mt-4 hidden md:flex'>
                 <button className='bg-[#141414]  mx-auto text-center text-white px-6  py-2'>Play Video</button>
                 </div> 
              </div>
            </div>
          <div className='md:w-3/6'>
             <div className='w-5/6 md:w-full mt-8 mx-auto '>
               <div className='relative'>
                <img src={VideoImg} alt='Africanna video' className='h-64 w-full' />
                <img src={playIcon} alt="" className='playIcon' />
               </div>
            </div>
          </div>
           <div className='flex items-center mt-8 md:hidden'>
              <button className='bg-[#141414] md:hidden mx-auto text-center text-white px-6  py-2'>Play Video</button>
          </div>
          </div>
          <Client />
          <Booking />
          <Testimonial />
        </div>
    </div>
  )
}

export default Homepage
