import React from 'react'
import { IoMailUnreadOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF,FaTwitter,FaLinkedin,FaInstagram  } from "react-icons/fa";



const Header = () => {
  return (
    <div className='bg-[#282828] w-[100%] py-[16px] border-b-[1px] border-[#FFB800]'>
        <div className="container ">
            <div className="flex w-[100%] justify-between flex-wrap items-center">
                <div className="contacts flex gap-[49px] relative after:absolute after:w-[1px] after:h-[16px] after:bg-[#5C6A92] after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%]">
                    <a href="#" className='flex justify-center items-center text-white text-xs not-italic font-normal leading-[normal] gap-[7px] '><IoMailUnreadOutline className='text-[20px]'/>mail@yourcompany.com</a>
                    <a href="#" className='flex justify-center items-center text-white text-xs not-italic font-normal leading-[normal] gap-[7px]'><FiPhoneCall
                    className='text-[20px]'/>+896 120 5889 (Toll free)</a>
                </div>
                <div className="icons flex gap-[19px] text-[#fff]">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedin  />
                <FaInstagram />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Header