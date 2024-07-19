import React, { useEffect, useState } from 'react'

function News() {

  const[newscard,Setnewscard] = useState([])
    
     useEffect(()=>{
      
    fetch("/Data/NewsCard.json")
    .then(res=>{
      return res.json()
    }).then(data =>{

      Setnewscard(data.newscard)
      console.log(data.newscard);
    })

     },[])

  return (
    <div>
      <div>
      <div className='relative   flex justify-center items-center '>
              <img src='https://static.wixstatic.com/media/82fcd3_0125f42844ab44f1842440a42cecd61b~mv2_d_3000_2157_s_2.jpg/v1/fill/w_1503,h_350,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82fcd3_0125f42844ab44f1842440a42cecd61b~mv2_d_3000_2157_s_2.jpg' className='object-cover object-center w-full h-full  min-h-64  ' />
              <div className='absolute  w-full h-full bg-[rgba(15,23,42)]/80 cursor-pointer'></div>
              <p className=' absolute text-white text-4xl montserrat-font  cursor-pointer text-center text-wrap '>Our Exclusive Property</p>
              <p className=' absolute text-white text-4xl pt-sans-narrow-bold  cursor-pointer mt-32 '>All Properties</p>
            </div>

          <div>
                {newscard.map((item)=>{
                  return(
                    <div key={item.id} className='py-8 px-5'>
                    <div className='max-w-xl mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-6 py-5'>
                      <div className='flex flex-col gap-y-3 '>
                        <p className='montserrat-font'>{item.date}</p>
                        <p className='pt-sans-narrow-bold md:text-3xl text-2xl text-gray-800'>{item.heading}</p>
                        <p className='montserrat-font'>{item.author}</p>
                        <img src={item.image} className='w-full h-48 object-cover object-center'/>
                        <p className='text-sm'>{item.description}</p>
                        <p className='text-red-500 pt-sans-narrow-bold'>Read More</p>
                        </div>
                    </div>
                    </div>
                  )
                })}
          </div>
      </div>
    </div>
  )
}

export default News




