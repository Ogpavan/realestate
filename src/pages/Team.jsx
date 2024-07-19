import React, { useEffect, useState } from "react";

function Team() {
  const [team, Setteam] = useState([]);

  useEffect(() => {
    fetch("/Data/TeamData.json")
      .then(res => {
        return res.json();
      })
      .then(data => {
        Setteam(data.team);
        console.log(data.team);
      });
    
  },[]);

  return (
    <div>
      <div className="relative   flex justify-center items-center ">
        <img
          src="https://static.wixstatic.com/media/82fcd3_a96152638b8b4c9185b4260a5a82063a~mv2.jpg/v1/fill/w_1378,h_350,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82fcd3_a96152638b8b4c9185b4260a5a82063a~mv2.jpg"
          className="object-cover object-center w-full h-full  min-h-64  "
        />
        <div className="absolute  w-full h-full bg-[rgba(15,23,42)]/80 cursor-pointer"></div>
        <p className=" absolute text-white text-4xl montserrat-font  cursor-pointer text-center text-wrap ">
          Our Team
        </p>
        <p className=" absolute text-white text-4xl pt-sans-narrow-bold  cursor-pointer mt-32 ">
          Agents
        </p>
      </div>
      <div className="flex flex-wrap justify-center md:px-28 py-10">
  {team.map((item) => {
    return (
      <div key={item.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className=" shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6 flex flex-col gap-y-2 bg-white">
          <p className="pt-sans-narrow-bold text-2x text-gray-900 text-xl">{item.name}</p>
          <p className="text-gray-700 montserrat-font">Realtor {item.realtor}</p>
          <img src={item.image} alt={item.name} className="w-full h-auto object-cover" />
          <p className="pt-sans-narrow-bold text-xl text-gray-900">Email</p>
          <p className="text-gray-800">{item.email}</p>
          <p className="pt-sans-narrow-bold text-xl text-gray-900">Phone</p>
          <div className="flex justify-between">
            <p className="text-gray-800">{item.phone}</p>
            <span className="text-red-500 pt-sans-narrow-bold cursor-pointer">LinkedIn</span>
          </div>
        </div>
      </div>
    );
  })}
</div>

    </div>
  );
}

export default Team;
