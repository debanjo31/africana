import React from 'react'
import client1 from './img/client1.png'
import client2 from './img/client2.png'
import client3 from './img/client3.png'
import client4 from './img/client5.png'
import client5 from './img/client5.png'
import client6 from './img/client6.png'

function Client() {
  return (
    <div className='mt-12 w-5/6 mx-auto'>
        <p className='bg-black text-center text-white px-2 py-2'>Existing Clients</p>
        <div className='flex justify-between mt-4'>
            <div className='flex flex-col gap-4'>
                <img src={client1} className="inline-block" alt="africanna client" />
                <img src={client4} className="inline-block" alt="africanna client" />
            </div>
            <div className='flex flex-col gap-4'>
                
            <img src={client2} className="inline-block" alt="africanna client" />
            <img src={client5} className="inline-block" alt="africanna client" />
            </div>
            <div className='flex flex-col gap-4'>
                
            <img src={client3} className="inline-block" alt="africanna client" />
            <img src={client6} className="inline-block" alt="africanna client" />
            </div>
            
        </div>
    </div>
  )
}

export default Client