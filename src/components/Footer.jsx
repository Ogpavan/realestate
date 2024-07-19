import React from "react";

function Footer() {
  return (
    <>
      <div>
        <div className=" md:flex  bg-slate-800 text-white">
          <div className="flex flex-col justify-center p-7 md:w-1/2">
            <p className="text-3xl montserrat-font">Find your</p>
            <p className="text-3xl montserrat-font pb-4"> Next Home</p>
            <p className="montserrat-font ">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.{" "}
            </p>
          </div>
          <div className=" w-full flex md:px-20 py-10  justify-center">
            <div className="  w-3/4">
              <p className="text-3xl montserrat-font pb-7">Get In Touch</p>
              <form className="flex flex-col ">
                <div className=" md:flex md:gap-x-16  ">
                  <div className="flex flex-col py-3 ">
                    <label htmlFor="fname" className=" pt-sans-narrow-bold">
                     
                      First Name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      className="bg-slate-800 border-b border-white outline-none "
                    />
                  </div>
                  <div className="flex flex-col py-3">
                    <label htmlFor="lname" className=" pt-sans-narrow-bold">
                     
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lname"
                      className="bg-slate-800 border-b border-white outline-none"
                    />
                  </div>
                </div>
                <div className="py-3 flex flex-col">
                  <label htmlFor="email" className=" pt-sans-narrow-bold">
                   
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="bg-slate-800 border-b border-white outline-none "
                  />
                </div>
                <div>
                  <div className="md:flex  justify-between  py-4">
                    <div className="pt-sans-narrow-bold">Interested in:</div>
                    <div className="flex ">
                      <input type="radio" id="buy" />
                      <label htmlFor="buy" className="px-3 pt-sans-narrow-bold">
                       
                        Buy
                      </label>
                      <input type="radio" id="rent" />
                      <label
                        htmlFor="rent"
                        className="px-3  pt-sans-narrow-bold"
                      >
                       
                        Rent
                      </label>

                      <input type="radio" id="other" />

                      <label
                        htmlFor="other"
                        className="px-3 pt-sans-narrow-bold"
                      >
                       
                        Other
                      </label>
                    </div>
                  </div>
                </div>
                <div className="py-3 flex flex-col pt-sans-narrow-bold">
                  <label htmlFor="message"> Message</label>
                  <input
                    type="text"
                    id="message"
                    className="bg-slate-800 border-b border-white py-4 outline-none"
                  />
                </div>
                <div className="py-3 flex justify-end">
                  <button className=" pt-sans-narrow-bold text-xl   inline-flex h-12 animate-shimmer items-center justify-center bg-[linear-gradient(110deg,#ff0000,45%,#ff4d4d,55%,#ff0000)] bg-[length:200%_100%] px-10 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 drop-shadow-lg">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-between  p-8 flex-wrap  bg-slate-900">
          <div className="hidden md:block">
            <div className="flex space-x-4 items-center ">
              <svg
                preserveAspectRatio="xMidYMid meet"
                viewBox="7.767 51.693 183.51 85.375"
                height="50"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Homepage"
              >
                <g>
                  <path
                    className="fill-white"
                    d="M178.752 121.175h-8V92.854l-42.739-31.219L99.51 82.877H29.201v38.298h-8V74.877h75.655l31.109-23.184 50.787 37.099v32.383z"
                  ></path>
                  <path
                    className="fill-white"
                    d="M191.277 129.068v8H7.767v-8h183.51z"
                  ></path>
                  <path
                    className="fill-white"
                    d="M131.794 91.26v15.298h-8V91.26h8z"
                  ></path>
                  <path
                    className="fill-white"
                    d="M75.724 91.26v15.298h-8V91.26h8z"
                  ></path>
                  <path
                    className="fill-white"
                    d="M51.213 91.26v15.298h-8V91.26h8z"
                  ></path>
                </g>
              </svg>
              <span className="md:text-2xl text-white text-lg font-sans font-bold ">
                RealEstate
              </span>
              <span className="text-xl  text-white font-thin">Properties</span>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <ul className="text-white text-center  py-5 md:py-0  text-lg font-sans font-normal gap-x-8 ">
              <li>Home</li>
              <li>Properties</li>
              <li>Team</li>
              <li>Contact</li>
              <li>News</li>
            </ul>
          </div>

          <p className="text-white text-lg font-sans font-normal md:w-1/4 text-center">
            500 Terry Francine Street San Francisco, CA 94158 info@mysite.com
          </p>
        </div>
        <p className="text-white text-lg font-sans font-normal py-5 bg-slate-900 text-center">
          © 2022 RealEstate. All rights reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
