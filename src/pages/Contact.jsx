import React from "react";
import GoogleMap from "../components/GoogleMap";



function Contact() {
  return (
    <div>
      <div>
        <div className="relative   flex justify-center items-center ">
          <img
            src="https://static.wixstatic.com/media/82fcd3_b1eb371bc78c4a7b85c1c47b9b7e5eca~mv2_d_2993_1457_s_2.jpg/v1/fill/w_1378,h_350,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/82fcd3_b1eb371bc78c4a7b85c1c47b9b7e5eca~mv2_d_2993_1457_s_2.jpg"
            className="object-cover object-center w-full h-full  min-h-64  "
          />
          <div className="absolute  w-full h-full bg-[rgba(15,23,42)]/80 cursor-pointer"></div>
          <p className=" absolute text-white text-4xl montserrat-font  cursor-pointer text-center text-wrap ">
            Be In Touch
          </p>
          <p className=" absolute text-white text-4xl pt-sans-narrow-bold  cursor-pointer mt-32 ">
            Contact Us
          </p>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="flex gap-x-16 flex-wrap text-center w-1/2 md:w-full justify-center gap-y-6 py-20">
          <p className="pt-sans-narrow-bold text-xl  ">Our Office</p>
          <p className="flex flex-col pt-sans-narrow-regular text-lg">
            <span>500 Terry Francine Street</span>
            <span>San Francisco, CA 94158</span>
          </p>
          <p className="flex flex-col pt-sans-narrow-regular text-lg">
            <span>Tel: 123-456-7890</span>
            <span>Fax: 123-456-7890</span>
          </p>
          <p className="pt-sans-narrow-regular text-lg">0C6oD@example.com</p>
        </div>
      </div>
      
      <GoogleMap/>
    </div>
  );
}

export default Contact;
