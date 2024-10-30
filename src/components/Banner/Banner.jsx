import React from 'react'

const Banner = () => {
  return (
    <div>
        <div className="banner z-[1] py-[257px] bg-[url(./src/assets/banner.jpg)] bg-no-repeat bg-current bg-cover relative  after:absolute after:w-[100%] after:h-[100%] after:bg-[#00000099] after:top-0 after:z-[-1]"> 
            <div className="container">
                <h1 className='text-white text-[64px] not-italic font-bold leading-[normal] max-w-[842px] mb-[31px]'>We exist since 1975 on the oil and gas industry.</h1>
                <a href="#" className='text-white  border-2 border-solid border-transparent text-center text-base not-italic font-semibold leading-[normal] bg-[#F40404] py-[13px] px-[40px] duration-300 hover:bg-transparent hover:border-2 hover:border-solid hover:border-white'>LEARN MORE</a>
            </div>
        </div>
    </div>
  )
}

export default Banner