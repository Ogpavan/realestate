import React from 'react'
import Cards from './Card/Cards'

function Properties() {
  return (
    <div>
      <div>
      <div className='relative   flex justify-center items-center '>
              <img src='https://static.wixstatic.com/media/82fcd3_3bcb987bda4140ebae9689b9cae48c18~mv2_d_3000_1987_s_2.jpg/v1/fill/w_1378,h_352,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82fcd3_3bcb987bda4140ebae9689b9cae48c18~mv2_d_3000_1987_s_2.jpg' className='object-cover object-center w-full h-full  min-h-64  ' />
              <div className='absolute  w-full h-full bg-[rgba(15,23,42)]/80 cursor-pointer'></div>
              <p className=' absolute text-white text-4xl montserrat-font  cursor-pointer text-center text-wrap '>Our Exclusive Property</p>
              <p className=' absolute text-white text-4xl pt-sans-narrow-bold  cursor-pointer mt-32 '>All Properties</p>
            </div>
            <div className='py-8'>
            <Cards/>
            </div>

    </div>
    </div>
  )
}

export default Properties