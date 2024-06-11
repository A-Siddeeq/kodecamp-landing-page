import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import galImage1 from '../assets/gal-image1.png'
import galImage2 from '../assets/gal-image2.png'
import galImage3 from '../assets/gal-image3.png'
import galImage4 from '../assets/gal-image4.png'
import galImage5 from '../assets/gal-image5.png'
import galImage6 from '../assets/gal-image6.png'
import galImage7 from '../assets/gal-image7.png'
import galImage8 from '../assets/gal-image8.png'
import galImage9 from '../assets/gal-image9.png'
import galImage10 from '../assets/gal-image10.png'
import back from '../assets/arrowleft.svg'
import next from '../assets/arrowright.svg'
import pageSeperator from '../assets/pageSeperator.svg'

const Gallery = () => {
  return (
    <div>

        <div className='p-6'>
          {/* PHOTO GALLERY TITLE */}
        <div className='pb-4'>
          <h1 className='font-extralight text-[64px] leading-[64px] text-[#BDBDBD]'>Photo</h1>
          <h1 className='font-bold text-[64px] leading-[64px]'>Gallery</h1>
         </div>

         {/* PHOTO GRID */}
         <div className='grid grid-cols-2 md:grid-cols-5 gap-4 items-center'>
              <img src={galImage1} alt="" className=' w-full h-full object-cover'/>
              <img src={galImage2} alt="" className=' w-full h-full object-cover'/>
              <img src={galImage3} alt="" className=' w-full h-full object-cover'/>
              <img src={galImage4} alt="" className=' w-full h-full object-cover'/>
              <img src={galImage5} alt="" className=' w-full h-full object-cover'/>
              <img src={galImage6} alt="" className=' w-full h-full object-cover'/>
              <img src={galImage7} alt="" className=' w-full h-full object-cover'/>
              <img src={galImage8} alt="" className=' w-full h-full object-cover'/>
              <img src={galImage9} alt="" className=' w-full h-full object-cover'/>
              <img src={galImage10} alt="" className=' w-full h-full object-cover'/>
            </div>
            <div className='flex flex-col md:flex-row justify-start items-center my-6'>
             <div className='flex gap-x-5 md:mr-10 py-2'>
              <span className='text-[#333333]'>01</span>
              <img src={pageSeperator} alt="" />
              <span className='text-[#BDBDBD]'>05</span>
            </div> 
            <div className='flex'>           
            <button className='w-[53px] h-[53px] border-2 mx-2 flex justify-center'>
                <img src={back} alt="" width={'24px'} height={'24px'}/>
            </button>
            <button className='w-[53px] h-[53px] border-2 mx-2 flex justify-center bg-[#F9F9F9]'>
                <img src={next} alt=""  width={'24px'} height={'24px'}/>
            </button>
            </div>
        </div>
            </div>


        <Footer/>
    </div>
  )
}

export default Gallery