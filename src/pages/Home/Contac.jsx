import React from 'react'
import { IoCall, IoMail } from 'react-icons/io5'
import { MdLocationPin } from 'react-icons/md'

function Contac() {
  return (

    <div className='flex justify-center items-center bg-slate-100  pb-20 '>
        <div>
            <p className='text-center md:pb-24 pb-10 montserrat-font text-xl pt-10'>YOUR DREAM HOUSE IS ONE STEP AWAY!</p>
            <div className='flex flex-wrap gap-x-32 justify-center gap-y-10'>          
            <div  className='flex flex-col justify-center items-center gap-y-2'>
                <IoCall className='text-3xl text-red-500'/>
                <p className='pt-sans-narrow-bold text-xl text-gray-800'>CALL US</p>
                <p >123-456-7890</p>
            </div>
            <div  className='flex flex-col justify-center items-center gap-y-2'>
                <IoMail  className='text-3xl text-red-500 '/>
                <p  className='pt-sans-narrow-bold text-xl text-gray-800'>EMAIL US</p>
                <p>7HdLZ@example.com</p>
            </div>
            <div  className='flex flex-col justify-center items-center gap-y-2'>
                <MdLocationPin  className='text-3xl text-red-500'/>
                <p  className='pt-sans-narrow-bold text-xl text-gray-800'>LOCATION</p>
                <p>123 Main St, Anytown USA</p>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Contac