import React from 'react'
import Footer from '../components/Footer'
import projImg1 from '../assets/proj-img1.png'
import projImg2 from '../assets/proj-img2.png'
import projImg3 from '../assets/proj-img3.png'
import back from '../assets/arrowleft.svg'
import next from '../assets/arrowright.svg'
import pageSeperator from '../assets/pageSeperator.svg'

const Projects = () => {
  return (
    <div>

    <div className='px-6'>
      {/* OUR PROJECTS TITLE */}
    <div className='pb-4'>
      <h1 className='font-extralight text-[64px] leading-[64px] text-[#BDBDBD]'>Our</h1>
      <h1 className='font-bold text-[64px] leading-[64px]'>Projects</h1>
     </div>

     {/* SAMPLE PROJECTS */}
     <div className='flex flex-col'>
     <div className='flex flex-col lg:flex-row-reverse items-center md:items-stretch lg:w-[1200px] py-12'>
     <div className='w-3/4 lg:w-1/2  bg-[#FBFBFB] flex flex-col justify-between items-center lg:ml-20'>
     <img src={projImg1} alt="" className='lg:w-["670px"] lg:h-["435px"] inline-block lg:hidden'/>
      <h1 className='font-extralight text-[40px] leading-[46px] text-[#BDBDBD] py-2 lg:py-0'>Sample Project 1</h1>
      <p className='font-light leading-[25px] text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and
         scrambled it to make a type specimen book.</p>
         <button className='w-[200px] h-[71px] bg-white tracking-widest'>View More</button>
     </div>
         <div className='flex justify-center items-center w-3/4 lg:w-1/2'>
          <img src={projImg1} alt="" className='lg:w-["670px"] lg:h-["435px"] hidden lg:inline-block'/>
         </div>
        </div>

        <div className='flex flex-col items-center md:items-stretch lg:flex-row-reverse lg:w-[1200px] py-12 bg-[#FBFBFB] lg:h-fit'>
     <div className='w-3/4 lg:w-1/2   flex flex-col justify-between items-center lg:ml-20'>
     <img src={projImg2} alt="" className='lg:w-["670px"] lg:h-["435px"] inline-block lg:hidden'/>
      <h1 className='font-extralight text-[40px] leading-[46px] text-[#BDBDBD]  py-2 lg:py-0'>Sample Project 2</h1>
      <p className='font-light leading-[25px] text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and
         scrambled it to make a type specimen book.</p>
         <button className='w-[200px] h-[71px] bg-white tracking-widest'>View More</button>
     </div>
         <div className='flex justify-center items-center w-3/4 lg:w-1/2'>
          <img src={projImg2} alt="" className='lg:w-["670px"] lg:h-["435px"] hidden lg:inline-block'/>
         </div>
        </div>

        <div className='flex flex-col items-center md:items-stretch lg:flex-row-reverse lg:w-[1200px] py-12'>
     <div className='w-3/4 lg:w-1/2  bg-[#FBFBFB] flex flex-col justify-between items-center lg:ml-20'>
     <img src={projImg3} alt="" className='lg:w-["670px"] lg:h-["435px"] inline-block lg:hidden'/>
      <h1 className='font-extralight text-[40px] leading-[46px] text-[#BDBDBD] py-2 lg:py-0'>Sample Project 3</h1>
      <p className='font-light leading-[25px] text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and
         scrambled it to make a type specimen book.</p>
         <button className='w-[200px] h-[71px] bg-white tracking-widest'>View More</button>
     </div>
         <div className='flex justify-center items-center w-3/4 lg:w-1/2'>
          <img src={projImg3} alt="" className='lg:w-["670px"] lg:h-["435px"] hidden lg:inline-block'/>
         </div>
        </div>
    </div>
       

            {/**PREV AND NEXT BUTTON */}
            <div className='flex flex-col md:flex-row justify-start items-center my-6'>
             <div className='flex gap-x-5 md:mr-10 py-2'>
              <span className='text-[#333333]'>01</span>
              <img src={pageSeperator} alt="" />
              <span className='text-[#BDBDBD]'>05</span>
            </div> 
            <div className='flex'>           
            <button className='w-[53px] h-[53px] border-2 mx-2 flex justify-center items-center'>
                <img src={back} alt="" width={'24px'} height={'24px'} />
            </button>
            <button className='w-[53px] h-[53px] border-2 mx-2 flex justify-center items-center bg-[#F9F9F9]'>
                <img src={next} alt=""  width={'24px'} height={'24px'} />
            </button>
            </div>
        </div>
        </div>


    <Footer/>
    </div>
  )
}

export default Projects