import React from 'react'
import testimony from './img/quoteIcon.png'
import brand from './img/testimoniallogo.png'
import {FaQuoteRight} from 'react-icons/fa';

function Testimonial() {
  return (
    <div className='mt-8 w-5/6 mx-auto pb-12'>
        <div className="flex justify-center mb-4">
            <img src={testimony} alt="africannatestimonial " />
            <b className='mt-4 inline-block ml-2 text-lg'>Testimonial</b>
        </div>
        <div className="flex justify-between">
            <img src={brand} alt="Louis Vuiton" className='p-2 px-4 bg-black rounded-t-lg' />
            <div className="flex flex-col tracking-[.5em] text-center mr-12">
                <p className=' font-bold'>FENTY BEAUTY</p>
                <p className='text-xs text-gray-700 '>BY RIHANA</p>
            </div>
        </div>
        <div className='bg-black text-white pb-2'>
            <p className='text-sm px-2 py-2 leading-8'>Community ellipse bold arrow comment. Horizontal edit undo flatten create blur text. Figma export subtract figma strikethrough effect bullet comment font. Follower bullet vertical fill share hand fill stroke link edit.</p>
            <p className='text-sm text-right px-2'>Raheemat Treasure <sup> <FaQuoteRight className='inline ' /></sup></p>
        </div>
    </div>
  )
}

export default Testimonial