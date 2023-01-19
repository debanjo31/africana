import React from 'react'
import logo from './img/logowhite.png'
import './homepage.css'

function Footer() {
  return (
    <div className='bg-[#333333] pb-24 footer'>
        <div className='w-5/6 mx-auto text-white lg:hidden'>
            <div className="flex justify-between pt-4">
                <p className='cinzel md:text-xl'>NEWSLETTER</p>
                <div className='flex gap-2 md:gap-6'>
                     <img src={logo} className="block w-12 md:w-16" alt='' />
                     <p className='font-san  text-lg mt-2 md:text-xl lg:text-2xl'>Africana</p>
                </div>
            </div>
            <div className="input">
                <input type="email" className='bg-transparent w-80 pb-2 border-b-2  border-white ' name="" id="" placeholder='Enter your email addresss' />
            </div>
            <div className='w-5/6 flex justify-between mt-8'>
                <div className='flex flex-col gap-6' >
                    <h2 className='text-xl mb-2 cinzel'>SITEMAP</h2>
                    <p>Home</p>
                    <p>About</p>
                    <p>Growers</p>
                    <p>Merchants</p>
                    <p>Contact</p>
                </div>
                <div className='flex flex-col gap-6'>
                    <h2 className='text-xl mb-2 cinzel'>SOCIALS</h2>
                    <p>Facebook</p>
                    <p>LinkedIn</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                </div>
            </div>
            <div className="address mt-8">
                <p className='mb-4 cinzel'>HEAD OFFICE</p>
                <p>4517 Washington Ave. Manchester,</p>
                <p>Kentucky 39495</p>
            </div>
            <div className="flex justify-evenly text-xs mt-8">
                <p className='underline underline-offset-8'>contact@africana.agency </p>
                <p className='underline underline-offset-8'>(234) 903-7890-634</p>
            </div>
        </div>
        {/* FOOTER LARGE */}
        <div className='hidden lg:block w-5/6 mx-auto text-white pt-12 lg:block'>
            <div className="flex justify-between">
                <div className='flex gap-4 mt-12'>
                        <img src={logo} alt="afircanna logo" className=' h-24 ' />
                        <p className='font-san text-2xl mt-8'>Africana</p>
                    </div>
                    <div className='flex flex-col gap-6 text-sm' >
                        <h2 className='text-lg mb-2 cinzel'>SITEMAP</h2>
                        <p>Home</p>
                        <p>About</p>
                        <p>Growers</p>
                        <p>Merchants</p>
                        <p>Contact</p>
                    </div>
                    <div className='flex flex-col gap-6 text-sm'>
                        <h2 className='text-lg mb-2 cinzel'>SOCIALS</h2>
                        <p>Facebook</p>
                        <p>LinkedIn</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                    </div>
                    <div className="address text-sm ">
                        <p className='mb-4 text-lg cinzel'>HEAD OFFICE</p>
                        <p>4517 Washington Ave. Manchester,</p>
                        <p>Kentucky 39495</p>
                        <div className=" pt-4">
                            <p className='cinzel text-lg'>NEWSLETTER</p>
                            <div className="input mt-4">
                                <input type="email" className='bg-transparent w-80 pb-2 border-b-2  border-white text-xs ' name="" id="" placeholder='Enter your email addresss' />
                            </div>
                    </div>
                    </div>
            </div>
                
            <div className="flex justify-between  text-sm mt-12 ">
                <p className='underline underline-offset-8'>contact@africana.agency </p>
                <p className='underline underline-offset-8'>(234) 903-7890-634</p>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default Footer