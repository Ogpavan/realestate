import React, { useEffect, useState } from 'react';
import blur from '../../assets/blur.webp'



function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/Data/CardsInfo.json")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setCards(data.cards))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>    
      <div className='flex justify-center w-full lg:px-24'>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-4 ">
          {cards.length > 0 ? (
            cards.map(card => (
              <div key={card.id} className='px-5'>
                <div className="card border rounded shadow-md w-80 ">
                  <div className='relative flex'>
                    <ImageWithPlaceholder src={card.image} alt={card.title} />
                    <p className='absolute'>
                      <button className=" pt-sans-narrow-bold text-lg  inline-flex h-7 animate-shimmer items-center justify-center bg-[linear-gradient(110deg,#ff0000,45%,#ff4d4d,55%,#ff0000)] bg-[length:200%_100%] px-5 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 drop-shadow-lg">
                        {card.type}
                      </button>
                    </p>
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="text-2xl pt-sans-narrow-bold">{card.street}</h3>
                    <p className=' text-gray-700 montserrat-font text-sm'>{card.city}</p>
                    <p className=' '>{card.price}</p>
                    <hr className='py-3 pt-2'/>
                    {card.size ? (
                      <div className="flex justify-between mt-5">
                        <div className="flex items-center space-x-2">
                          <div className='flex flex-col justify-center items-center'>
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="28.153 28.153 143.693 143.693">
                              <path d="M28.153 28.153v143.693h143.693V28.153H28.153zm135.694 8v44.339H36.153V36.153h127.694zM36.153 163.847V88.492h127.693v75.354H36.153z" className='fill-gray-400' />
                              <path d="M96.246 41.723H43.661v31.262h52.585V41.723zm-8 23.261H51.661V49.723h36.585v15.261z" className='fill-gray-400' />
                              <path d="M156.339 41.723h-52.585v31.262h52.585V41.723zm-8 23.261h-36.585V49.723h36.585v15.261z" className='fill-gray-400' />
                            </svg>
                            <span className="text-xs py-2 pt-sans-narrow">Beds</span>
                            <p className='font-bold'>{card.size.beds}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <div className='flex flex-col justify-center items-center'>
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="28.932 28.931 143.122 142.137">
                              <path d="M47.107 111.33l11.498 51.738H36.932V36.932h18.14l4.775 12.734 7.49-2.809-6.723-17.926H28.932v142.137H158.78l13.274-59.738H47.107zm105.255 51.738H66.801L57.08 119.33h105.002l-9.72 43.738z" className='fill-gray-400'></path>
                            </svg>
                            <span className="text-xs py-2">Baths</span>
                            <p className='font-bold'>{card.size.baths}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <div className='flex flex-col justify-center items-center'>
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="34.57 31.149 130.859 137.702">
                              <path d="M165.429 96v8H34.57v-8h130.859z" className='fill-gray-400' />
                              <path d="M165.429 31.149v8H34.57v-8h130.859z" className='fill-gray-400' />
                              <path d="M165.429 160.851v8H34.57v-8h130.859z" className='fill-gray-400' />
                              <path d="M99.663 52.766v8H46.557v-8h53.106z" className='fill-gray-400' />
                              <path d="M119.685 74.383v8H66.579v-8h53.106z" className='fill-gray-400' />
                              <path d="M157.872 117.617v8h-53.106v-8h53.106z" className='fill-gray-400'/>
                              <path d="M133.106 139.234v8H80v-8h53.106z" className='fill-gray-400' />
                            </svg>
                            <span className="text-xs py-2">Levels</span>
                            <p className='font-bold'>{card.size.levels}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <div className='flex flex-col justify-center items-center'>
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="30.57 30.57 138.86 138.86">
                              <path d="M30.57 30.57v138.86h138.86V30.57H30.57zm130.86 130.86H38.57V38.57h122.86v122.86z" className='fill-gray-400' />
                              <path d="M87.175 112.825h-41.65v41.649h41.649v-41.649zm-8 33.65h-25.65v-25.649h25.649v25.649z" className='fill-gray-400' />
                            </svg>
                            <span className="text-xs py-2">Sqft</span>
                            <p className='font-bold'>{card.size.sqft}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p>Size information not available</p>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className='text-center text-red-500 pt-sans-narrow-bold text-xl'>Fetching New Properties...</p>
          )}
        </div>
      </div>
      <div className='flex justify-center py-10'>
        <button className="pt-sans-narrow-bold text-xl inline-flex h-12 animate-shimmer items-center justify-center bg-[linear-gradient(110deg,#ff0000,45%,#ff4d4d,55%,#ff0000)] bg-[length:200%_100%] px-10 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 drop-shadow-lg">
          VIEW MORE
        </button>
      </div>
    </>
  );
}

function ImageWithPlaceholder({ src, alt }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className='relative'>
      <img
        src={blur} // Replace with your blurred image naming convention
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
      />
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}

export default Cards;
