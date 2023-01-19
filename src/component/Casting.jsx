import React from 'react'
import './homepage.css'
import mailLogo from './img/mail.png'

function Casting() {
   
  return (
    <div className='mt-8 relative ' >
        <div className='casting pt-2  '>
        </div>
        <div className='absolute inset-y-1/4 -mt-12 z-20 p-4'>    
            <h2 className='text-center font-bold  text-xl md:text-2xl lg:text-3xl    mb-2 md:mb-4 '>Casting</h2>
                <p className='text-center text-md md:text-lg lg:text-xl  mb-4 leading-7 font-bold '>Are you a  proud African woman who is 5Fft 9in  who is looking forward to becoming a model? Send your headshot and full length shot  along with your measurements to us </p>
                <div className='w-4/6 mx-auto flex flex-row mt-8 md:mt-12'>
                <input type='text' placeholder='Email Address' className='bg-white block  px-2 border-black w-5/6 lg:2/3' />
                <div className='bg-black p-2 block '> <img src={mailLogo} alt='' /></div>
            </div>
        </div>
    </div>
  )
}

export default Casting