import React from 'react'
import aboutImage1 from './img/aboutimg1.png'
import aboutImage2 from './img/aboutimg2.png'
import aboutLogo from './img/aboutlgo.png'
import logo from './img/logodark.png'
import logoWhite from './img/mediumlogo.png'

function About() {
    const AboutImage = () => {
        return(
            <div className='about-image  px-12'>
            <div className='flex justify-center w-4/6 mx-auto relative '>
               <img src={aboutImage1} className="mt-16 z-10 -mr-4 h-56" alt='Africsanna' />
               <img src={aboutImage2}  className="h-56" alt='Africsanna' />
               <div className='absolute top-28 left-50 z-20 p-2 border-white border-2 bg-black'>
                   <img src={aboutLogo} className="h-16" alt='Africanna' />  
               </div>
            </div>
            <div className='flex justify-end ml-8 -m-8 mb-4 sm:mr-24 md:hidden'>
                 <img src={logo} className="h-16" alt="africanna" />
                 <p className='font-san mt-6 text-xl mt-2 lg:text-2xl'>Africana</p>
            </div>
         </div>
        )
    }
  return (
    <div className='bg-white  px-8 py-4'>
        <div className='md:flex'> 
        <div className='md:w-1/2'>
        <p className='font-bold text-xl mb-2'>About Us</p>
        <p className='text-gray-500 mb-4'>Brief history of Africans</p>
        <div className="md:hidden">
            <AboutImage  />
        </div>
        <p>Africana is a supersonic growing modeling agency with over 40 offices and over 8,000 models spread across the continent of Africa. The agency had its roots in Lagos, Nigeria which also houses the agency's headquarters.. Africana the brain child of Simi is dedicated to spreading the beauty of African women with the rest of the world. <b className='md:hidden'> AFRICA TO THE WORLD!!!!!</b></p>
        <p className='hidden md:block mt-4 font-bold text-2xl z-10'>AFRICA TO THE WORLD!!!!!</p>
        <div className='hidden md:flex justify-evenly -m-16 mb-8 z-1'>
                <img src={logoWhite} className="block w-32" alt='' />
                <p className='font-san mt-16 text-xl text-gray-400 block text-4xl'>Africana</p>
        </div>
        </div>
        <div className="hidden md:block md:w-1/2">
             <AboutImage  />
        </div>
        </div>
        <div className='md:flex justify-between'>
        <h3 className='font-bold text-lg mt-2 md:text-xl md:w-3/6 md:pr-8'>NO 1 Leading Modelling agency in Nigeria</h3>
        <div className='flex justify-around md:w-3/6 md:justify-between md:text-xl'>
            <div >
                <p className='font-bold'>12+</p>
                <p className='text-gray-500 text-sm'>years</p>
            </div>
            <div>
                <p className='font-bold'>34</p>
                <p className='text-gray-500 text-sm'>models</p>
            </div>
            <div>
                 <p className='font-bold'>250</p>
                  <p className='text-gray-500 text-sm'>satisfied client</p>
            </div>
            </div>
        </div>   
    </div>
  )
}

export default About
