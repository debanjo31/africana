import React from 'react'
import './homepage.css'
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'
import img5 from './img/img5.png'
import img6 from './img/img6.png'
import {motion} from "framer-motion";

function Imageslider() {
  return (
    <motion.div  initial={{opacity:0.7, x:500}} animate={{opacity:1, x:0}} transition={{type:"tween", duration:3}} className='cards flex -ml-12 flex-nowrap gap-4 imageSlider mt-4 mb-2'>
        <img src={img1}  className="cards  " alt='africanna display ' />
        <img src={img2} className="cards " alt='africanna display ' />
        <img src={img3} className="cards " alt='africanna display ' />
        <img src={img4} className="cards " alt='africanna display ' />
        <img src={img5} className="cards " alt='africanna display ' />
        <img src={img6} className=" cards  " alt='africanna display ' />
    </motion.div>
  )
}

export default Imageslider
