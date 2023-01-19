import React from 'react'
import testimony from './img/quoteIcon.png'
import testimony1 from './img/testimony1.png'
import testimony3 from './img/testimony3.png'
import testimony4 from './img/testimony4.png'
import testimony5 from './img/testimony5.png'
import brand from './img/testimoniallogo.png'
import {FaQuoteRight} from 'react-icons/fa';

function Testimonial() {
  return (
    <div className='mt-8 w-5/6 mx-auto pb-12'>
        <div className="flex justify-center mb-4 md:mb-8 lg:mb-12">
            <img src={testimony} alt="africannatestimonial " />
            <b className='mt-4 inline-block ml-2 text-lg'>Testimonial</b>
        </div>
        <div className="flex justify-between">
            <img src={testimony1} alt="Louis Vuiton" className='hidden lg:block mb-2 h-12 ' />
            <img src={brand} alt="Louis Vuiton" className='p-2 px-4 md:p-4 bg-black rounded-t-lg lg:hidden' />
            <div className="flex flex-col tracking-[.5em] text-center lg:text-xl ">
                <p className=' font-bold'>FENTY BEAUTY</p>
                <p className='text-xs text-gray-700 '>BY RIHANA</p>
            </div>
            <img src={testimony3} alt="Louis Vuiton" className='p-2 px-4 bg-black  rounded-t-lg hidden lg:block h-16 w-18' />
            <img src={testimony4} alt="Louis Vuiton" className='hidden lg:block mt-4 h-6' />
            <div className='hidden lg:block '>
                <img src={testimony5} alt="Louis Vuiton" className='' />
                <p className='font-bold text-xl mb-2'>LACOSTE</p>
            </div>
            
        </div>
        <div className='bg-black text-white pb-2 md:p-4 lg:p-8 lg:text-3xl lg:-mt-2'>
            <p className='text-sm px-4 py-4 leading-8  lg:text-lg lg:text-center'>Planning the GT Fashion week, geeting the right fit of models was a hassle but working with africana has been such an amazing experience. %years and counting. The only way is up from here.</p>
            <p className='text-sm text-right px-2 lg:text-lg '>Raheemat Treasure <sup> <FaQuoteRight className='inline ' /></sup></p>
        </div>
    </div>
  )
}

export default Testimonial