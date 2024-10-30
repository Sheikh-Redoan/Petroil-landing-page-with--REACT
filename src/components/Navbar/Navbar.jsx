import React from 'react'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <div>
        <div className="py-[30px] shadow-[0px_0px_43px_0px_rgba(183,183,183,0.25)] bg-[#f40404]">
            <div className="container">
                <div className="flex justify-between items-center flex-wrap">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="menu flex justify-center items-center gap-[72px]">
                        <ul className='flex justify-center items-center gap-[47px]'>
                            <li><a href="#" className='text-white text-base not-italic font-semibold leading-[normal] relative hover:after:w-[100%] after:absolute after:w-[0%] after:h-[2px] after:bg-white after:top-[100%] after:left-[50%] after:translate-x-[-50%] after:duration-300'>Home</a></li>
                            <li><a href="#" className='text-white text-base not-italic font-semibold leading-[normal] relative hover:after:w-[100%] after:absolute after:w-[0%] after:h-[2px] after:bg-white after:top-[100%] after:left-[50%] after:translate-x-[-50%] after:duration-300'>About</a></li>
                            <li><a href="#" className='text-white text-base not-italic font-semibold leading-[normal] relative hover:after:w-[100%] after:absolute after:w-[0%] after:h-[2px] after:bg-white after:top-[100%] after:left-[50%] after:translate-x-[-50%] after:duration-300'>Services</a></li>
                            <li><a href="#" className='text-white text-base not-italic font-semibold leading-[normal] relative hover:after:w-[100%] after:absolute after:w-[0%] after:h-[2px] after:bg-white after:top-[100%] after:left-[50%] after:translate-x-[-50%] after:duration-300'>Gallery</a></li>
                            <li><a href="#" className='text-white text-base not-italic font-semibold leading-[normal] relative hover:after:w-[100%] after:absolute after:w-[0%] after:h-[2px] after:bg-white after:top-[100%] after:left-[50%] after:translate-x-[-50%] after:duration-300'>Blog</a></li>
                        </ul>
                        <a href="#" className='button px-[31px] py-[14px] border-2 border-solid border-white text-white text-center text-base not-italic font-semibold leading-[normal]'>CONTACT</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar