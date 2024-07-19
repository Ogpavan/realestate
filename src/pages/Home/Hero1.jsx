import React, { useState } from "react";
import blurred3 from "../../assets/blurred3.png";
import { Link } from "react-router-dom";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <div className="relative w-full h-screen">
        <article className="relative w-full h-full">
          <img
            src={blurred3}
            className={`w-full h-full object-cover contrast-[0.8] transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
            alt="Blurred Real Estate Property"
            loading="lazy"
            width="1531"
            height="1019"
          />
          <img
            src="https://static.wixstatic.com/media/82fcd3_1dcc53b4e88842c7816a8251e1102530~mv2_d_4896_3264_s_4_2.jpg/v1/fill/w_1531,h_1019,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82fcd3_1dcc53b4e88842c7816a8251e1102530~mv2_d_4896_3264_s_4_2.jpg"
            className={`w-full h-full object-cover contrast-[0.8] transition-opacity duration-500 absolute inset-0 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            alt="Real Estate Property"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            width="1531"
            height="1019"
          />
          <div className="absolute top-0 flex justify-center items-center h-full w-full bg-gradient-to-t from-black/30 via-black/50">
            <div className="flex flex-col justify-center items-center text-white space-y-5 text-center w-full">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold">New Properties</h1>
              <h2 className="text-xl sm:text-2xl">Exclusively by RealEstate</h2>
              <div className="pt-5">
                <Link to={"/properties"}>

                <button className="text-xl font-medium inline-flex h-12 animate-shimmer items-center justify-center bg-[linear-gradient(110deg,#ff0000,45%,#ff4d4d,55%,#ff0000)] bg-[length:200%_100%] px-10 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 drop-shadow-lg">
                  Explore
                </button>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default Home;
