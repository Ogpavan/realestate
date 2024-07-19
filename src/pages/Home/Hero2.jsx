import React from 'react'

function Hero2() {
  return (
    <div className=''>
        <div className='pt-8 pb-4'>
           <p className='text-xl text-center montserrat-font'> WHAT ARE YOU LOOKING FOR? </p>
        </div>

        <div className='md:flex justify-center items-center md:space-x-4'>
            <div className='md:w-1/3  h-28 md:h-full flex justify-center items-center '>
              <img src='https://static.wixstatic.com/media/82fcd3_48d7bda4accf4beea4cad4e58588a4c6~mv2_d_3000_2002_s_2.jpg/v1/fill/w_764,h_698,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82fcd3_48d7bda4accf4beea4cad4e58588a4c6~mv2_d_3000_2002_s_2.jpg' className='object-cover object-center w-full h-full   ' />
              <div className='absolute  w-full md:w-1/3 h-28 bg-[rgba(15,23,42)]/80 cursor-pointer'></div>
              <span className=' absolute text-white text-5xl pt-sans-narrow-bold  cursor-pointer '>Buy</span>
            </div>
            <div className='md:w-1/3 h-28 md:h-full  flex justify-center items-center '>
              <img src='https://static.wixstatic.com/media/82fcd3_5a0a204eb6d04dd7b6e8685c35d8691b~mv2_d_3000_2000_s_2.jpg/v1/fill/w_767,h_698,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82fcd3_5a0a204eb6d04dd7b6e8685c35d8691b~mv2_d_3000_2000_s_2.jpg' className='object-cover object-center w-full h-full'/>
              <div className='absolute  w-full  md:w-1/3 h-28 bg-red-400/80 cursor-pointer'></div>
              <span className=' absolute text-white text-5xl pt-sans-narrow-bold  cursor-pointer '>Rent</span>
            </div>
</div>
            <div className='text-center py-8'>
              <p className='text-2xl  montserrat-font pb-3'>New Properties</p>
              <p className='text-5xl pt-sans-narrow-bold text-gray-800  '>For Sale</p>
            </div>
        </div>
    
  )
}

export default Hero2