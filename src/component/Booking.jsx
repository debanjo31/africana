import React from 'react'

function Booking() {
  return (
    <div className='mt-8  ' >
      <div className="relative">
          <div className='booking pt-2 pb-4 z-10 md:pt-6 md:pb-8'>
        </div>
        <div className='absolute inset-y-1/4 -mt-12 z-20 p-4 lg:mx-auto '>
          <h2 className='text-center  font-bold  text-xl md:text-2xl lg:text-3xl mb-2 md:mb-4'>Book a Session</h2>
            <p className='text-center text-md md:text-lg lg:text-xl   mb-4 leading-7 '>Want to have our model(s) for your event, runway shows, photoshoot and many more?</p>
            <p className='text-center text-md md:text-lg lg:text-xl  mb-4 leading-7 '>We are available at your request. Book a session with us let’s grace your event with the African spice.  </p>
            <div className='flex items-center mt-8 lg:mt-16'>
                  <button className='bg-[#141414] mx-auto text-sm text-center text-white px-6 py-2 md:mb-5 '>Book a session</button>
            </div>
        </div>
    
      </div>
    </div>
  )
}

export default Booking