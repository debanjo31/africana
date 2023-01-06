import React from 'react'
import logo from './img/logowhite.png'
import './homepage.css'

function Footer() {
  return (
    <div className='bg-[#333333] pb-24 footer'>
        <div className='w-5/6 mx-auto text-white'>
            <div className="flex justify-between pt-4">
                <p className='cinzel'>NEWSLETTER</p>
                <div className='flex'>
                     <img src={logo} className="block w-12" alt='' />
                     <p className='font-san text-lg mt-2 lg:text-2xl'>Africana</p>
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
    </div>
  )
}

export default Footer