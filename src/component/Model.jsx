import React from 'react'
import model1 from './img/model1.png'
import model2 from './img/model2.png'
import model3 from './img/model3.png'
import model4 from './img/model4.png'
import model5 from './img/model5.png'
import { FaArrowRight} from 'react-icons/fa';

function Model() {
    const Models = (props) => {
        return (
        <div>
            <div className='.model h-64 md:h-72 md:w-48 bg-[#C28E78] relative'>
                <img src={props.image} className="h-56 md:h-64  absolute bottom-0 left-0" alt='' />
            </div>
            <p className='font-bold text-lg mt-4'>View Profile <FaArrowRight className='inline-block ml-2' /></p>
        </div>
    )
    }
  return (
    <div className='bg-white pb-88 px-8 py-4'>
        <p className='font-bold text-lg md:hidden'>Meet Our Models</p>
        <p className='text-gray-500 mb-4 md:hidden'>The finest set of humans in Africa NO CAP!!!!</p>
        <div className='grid grid-cols-2 gap-8 md:flex md:flex-wrap md:justify-between'>
            <div className="hidden md:block">
            <div className='.modelh-64 md:h-72 md:w-48  relative'>
                <img src={model5} className="h-full absolute bottom-0 left-0" alt='' />
            </div>
            <p className='font-bold text-lg mt-4'>View Profile <FaArrowRight className='inline-block ml-2' /></p>  
            </div>
            <Models image={model1}/>
            <Models image={model2} />
            <Models image={model3} />
            <Models image={model4} />
        </div>

    </div>
  )
}

export default Model
