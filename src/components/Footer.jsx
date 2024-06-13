import React from 'react'
import footerlogo from '../assets/footerlogo.svg'
import facebook from '../assets/fblogo.svg'
import twitter from '../assets/twtlogo.svg'
import linkedin from '../assets/linklogo.svg'
import pinterest from '../assets/pinlogo.svg'

const Footer = () => {
  return (
    <div className='bg-[#2C2C2C]'>
     <div className='text-white flex flex-col md:flex-row items-center justify-around'>

        <div>
            <img src={footerlogo} alt="" height={94} width={145} className='py-6'/>
        </div>

        <div className='flex gap-6 md:ml[-50px] lg:ml-[-200px] mx-4'>
         <ul className='w-1/2 md:w-min'>
            <p className='leading-10 md:leading-[5] text-[16px] font-[700]'>Information</p>
            <li className='py-2'>Main</li>
            <li className='py-2'>Gallery</li>
            <li className='py-2'>Projects</li>
            <li className='py-2'>Certifications</li>
            <li className='py-2'>Contact</li>
         </ul>

         <ul className='w-1/2 md:w-min '>
            <p className='leading-10 md:leading-[5] text-[16px] font-[700]'>Contacts</p>
            <li className='py-2'>1234 Sample Street
                Austin Texas 78704</li>
            <li className='py-2'>512.333.2222</li>
            <li className='py-2'>sampleemail@gmail.com</li>
         </ul>
        </div>

        <div className='flex flex-col py-2'>
          <p className='leading-10 md:leading-[5] text-[16px] font-[700]'>Social Media</p>
           <ul className='flex justify-between'>
            <li>
                <img src={facebook} alt="Facebook icon" />
            </li>
            <li>
                <img src={twitter} alt="Twitter icon" />
            </li>
            <li>
                <img src={linkedin} alt="LinkedIn icon" />
            </li>
            <li>
                <img src={pinterest} alt="Pinterest icon" />
            </li>
          </ul>
        </div>
     </div>

     <hr />
     <p className='text-center text-[12] leading[22] py-6'>&copy; 2021. All rights reserved</p>
    </div>
  )
}

export default Footer