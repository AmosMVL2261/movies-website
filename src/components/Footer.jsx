import React from 'react'
import { BiCameraMovie } from "react-icons/bi"
import { socialMedia } from '../constants'

function Footer() {
  return (
	<section id='about' className='text-white bg-primary flex flex-col max-w-[100%]'>
		{/* First Section */}
		<div className=' flex flex-col sm:flex-row justify-between m-5'>
			{/* Logo */}
			<div className='flex flex-col justify-between'>
        <div className='flex flex-row justify-start md:justify-center items-center'>
          <BiCameraMovie className='h-[32px] w-[32px]' />
          <p className='pl-2 text-xl font-bold'>Movie Streaming</p>
        </div>
        <p className='font-roboto'>Movies at your disposition</p>
			</div>
			{/* Links */}
			<div className='flex items-center mt-3 sm:mt-0'>
        <ul className='list-none flex flex-col sm:flex-row'>
          <li className='mr-5' ><a href="#">FAQ</a></li>
          <li className='mr-5'><a href="#">Help Center</a></li>
          <li className='mr-5'><a href="#">Terms of Use</a></li>
          <li className='mr-0'><a href="#">Contact Us</a></li>
        </ul>
			</div>
		</div>

    {/* Second Section */}
		<div className='flex flex-col-reverse sm:flex-row items-center justify-between mx-5 mb-5 py-5 border-t-[1px] border-t-[$3F3E45]'>
      {/* Copyright */}
			<div className=' text-gray-200'>
      2023 Movie Streaming. All Rights Reserved.
      </div>
      {/* Social Links */}
      <div className='flex flex-row mb-3 sm:mb-0'>
        {
          socialMedia.map((social, index) => (
            <img key={social.id} src={social.icon} alt={social.id} className={`h-[32px] w-[32px]  ${index !== socialMedia.length-1 ? 'mr-6' : 'mr-0'}`} />
          ))
        }
      </div>
		</div>

	</section>
  )
}

export default Footer