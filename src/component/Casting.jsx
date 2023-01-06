import React from 'react'
import './homepage.css'
import mailLogo from './img/mail.png'

function Casting() {
   
  return (
    <div className='mt-8 ' >
        <div className='casting pt-2 '>
            <h2 className='text-center text-lg mb-2 '>Casting</h2>
            <p className='text-center text-sm mb-4 leading-7'>Are you a  proud African woman who is 5Fft 9in  who is looking forward to becoming a model? Send your headshot and full length shot  along with your measurements to us </p>
            <div className='w-4/6 mx-auto flex flex-row '>
             <input type='text' placeholder='Email Address' className='bg-white block border-2 px-2 border-black w-64' />
             <div className='bg-black p-2 block '> <img src={mailLogo} alt='' /></div>
        </div>
        </div>    
    </div>
  )
}

export default Casting