import React, {useState} from 'react'
import logo from './img/logodark.png'
import { FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';
import '../../src/index.css';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

//animation on navelements

function Navbar() {
    const [openBar, setOpenBar] = useState(false);
  return (
    <nav className='shadow-lg md:shadow-none lg:w-5/6 lg:mx-auto'>
        <div className='flex px-3 py-3 lg:py-12 justify-between text mb-5'>
            <div className='flex gap-4'>
                <img src={logo} alt="africanna" />
                <p className='font-san text-lg mt-2 lg:text-2xl'>Africana</p>
            </div>
            <div className='md:hidden'>
                <FaBars onClick={() => setOpenBar(true)} className='text-xl cursor-pointer mt-3 mr-5'/>
            </div>  
            <div className='hidden md:block'>
                    <div style={{}} className=' font-bold text-md lg:text-lg gap-8 mt-2 items-center flex '>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Model</p>
                    <p>Appointment</p>
                    <div className='flex gap-4 justify-around text-2xl lg:text-3xl'>
                        <FaTwitter />
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </div>
        {openBar&& <Sidebar setOpenBar={setOpenBar} />}
    </nav>
  )
}

export default Navbar
