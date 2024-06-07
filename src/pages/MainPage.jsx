import React from 'react'
import Footer from '../components/Footer'
import image1 from '../assets/image1.png'
import back from '../assets/arrowleft.svg'
import next from '../assets/arrowright.svg'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'
import image8 from '../assets/image8.png'
import image9 from '../assets/image9.png'
import image10 from '../assets/image10.png'
import num1 from '../assets/num1.svg'
import num2 from '../assets/num2.svg'

const MainPage = () => {
  return (
    <div>
      <main className='px-6'>
        {/*PROJECT LORUM SECTION */}
        <div className='flex flex-col md:flex-row py-12'>
         <div className='flex flex-col items-center justify-center md:w-1/2'>
          <h1 className='font-extralight text-[64px] leading-[64px] text-[#BDBDBD]'>PROJECT</h1>
          <h1 className='font-bold text-[64px] leading-[64px]'>Lorum</h1>
          <div className='flex justify-center my-6'>
            <button className='w-[53px] h-[53px] border-2 mx-2 flex justify-center'>
                <img src={back} alt="" />
            </button>
            <button className='w-[53px] h-[53px] border-2 mx-2 flex justify-center'>
                <img src={next} alt="" />
            </button>
        </div>
         </div>
         <div className='flex justify-center items-center w-3/4 md:w-1/2'>
          <img src={image1} alt="" className='md:w-["770px"] md:h-["830px"]'/>
         </div>
        </div>

        {/*ABOUT SECTION */}
        <div className='flex flex-col-reverse md:flex-row py-12'>
          <div className='grid grid-cols-3 md:grid-cols-2 gap-4 py-4 justify-center items-center w-3/4 md:w-1/2'>
          <img src={image2} alt="" className='md:w-["770px"] md:h-["830px"] w-full h-full object-cover'/>
          <img src={image3} alt="" className='md:w-["770px"] md:h-["830px"] w-full h-full object-cover'/>
          <img src={image4} alt="" className='md:w-["770px"] md:h-["830px"] w-full h-full object-cover'/>
         </div>
         <div className='flex flex-col items-center justify-center md:w-1/2'>
          <h1 className='font-extralight text-[64px] leading-[64px] py-6 text-[#BDBDBD]'>ABOUT</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a 
              type specimen book. It has survived not only five centuries, but also the
             leap into electronic typesetting, 
            remaining essentially unchanged.</p>
            <button className='w-[200px] h-[71px] bg-slate-400'>Read More...</button>
         </div>
        </div>

        {/* MAIN FOCUS SECTION */}
        <div className='flex flex-col md:h-[270px] py-12'>
          <div>
            <h1 className='font-extralight text-[64px] leading-[64px] py-6 text-[#BDBDBD]'>Main Focus/Mission Statement</h1>

            <div className='flex flex-col md:flex-row py-4 justify-around items-center'>
              <div className='flex items-center m-6 md:m-0'>
                <img src={num1} alt="" className='px-4'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Sed efficitur, lectus et facilisis placerat.</p>
              </div>
              <div className='flex items-center m-6 md:m-0'>
                <img src={num2} alt="" className='px-4'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor,
                   a auctor est felis ut nisl.</p>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECTS SECTION */}
        <div className='flex flex-col py-12'>
          <div>
            <h1 className='font-extralight text-[64px] leading-[64px] py-6 text-[#BDBDBD]'>Our Projects</h1>

            <div className='grid grid-cols-2 md:grid-cols-6 gap-4 items-center'>
              <img src={image5} alt="" className='md:col-span-3 w-full h-full object-cover'/>
              <img src={image6} alt="" className='md:col-span-3 w-full h-full object-cover'/>
              <img src={image7} alt="" className='md:col-span-1 w-full h-full object-cover'/>
              <img src={image8} alt="" className='md:col-span-3 w-full h-full object-cover'/>
              <img src={image9} alt="" className='md:col-span-2 w-full h-full object-cover'/>
            </div>
          </div>
          <button className='w-[200px] h-[71px] text-white bg-[#2C2C2C] m-2'>ALL PROJECTS</button>
        </div>

                {/* CONTACT US SECTION */}
          <div className='flex flex-col py-12'>
          <div>
            <h1 className='font-extralight text-[64px] leading-[64px] py-6 text-[#BDBDBD]'>Contact Us</h1>

            <div className='flex flex-col-reverse lg:flex-row items-center md:justify-around'>
             <div className='w-full md:w-1/2'>
              <form className='flex flex-col items-center gap-4 py-10 md:py-2'>
                <input type="text" placeholder='Name' className='w-max-content md:w-[400px] h-[46px] bg-[#F3F3F3] leading[17] text-[14] p-4'/>
                <input type="text" placeholder='Phone Number' className='w-max-content md:w-[400px] h-[46px] bg-[#F3F3F3] leading[17] text-[14] p-4 after:absolute after:content-["*"] ' required/>
                <input type="text" placeholder='Email' className='w-max-content md:w-[400px] h-[46px] bg-[#F3F3F3] leading[17] text-[14] p-4' required/>
                <input type="text" placeholder='Interested In' className='w-max-content md:w-[400px] h-[46px] bg-[#F3F3F3] leading[17] text-[14] p-4'/>
                <textarea  placeholder='Message' className='w-max-content md:w-[400px] h-[250px] bg-[#F3F3F3] leading[17] text-[14] p-4' required/>
              </form>
             </div>
             <div>
              <img src={image10} alt="" />
             </div>
            </div>

          </div>
            <button className='w-[200px] h-[71px] text-white bg-[#2C2C2C] m-4 ml-32 md:ml-10 self-center lg:self-auto'>SEND EMAIL</button>
        </div>
       </main>
        
        <Footer />
    </div>
  )
}

export default MainPage