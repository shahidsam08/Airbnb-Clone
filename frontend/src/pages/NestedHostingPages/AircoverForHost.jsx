import React from "react";
import Footer from "../../components/Footer";
import { FaAirbnb } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdOutlineAddHome } from "react-icons/md";

function AircoverForHost() {
  return (
    <div>
      <div className="flex flex-col gap-10 px-5 py-5 sticky top-0 backdrop-blur-md">
        <div className="flex flex-row items-center justify-between sticky top-0 ">
          <div>
            <Link to="/">
              <FaAirbnb size={40} color="red" />
            </Link>
          </div>
          <div className="bg-[#da1249] px-4 py-[0.2rem] rounded-[0.6rem] flex flex-row gap-2">
            <Link to="/login">
              <MdOutlineAddHome color="white" size={25} />
            </Link>
            <p className="text-white text-[1.1rem]">List your home</p>
          </div>
        </div>
      </div>
      {/* air cover for hosts */}
      <div className="bg-[#f6f4f4] px-5 py-15">
        {/* main heading */}
        <div className="flex flex-col gap-6 items-center mb-20">
          <div className="flex flex-col items-center">
            <p className="text-8xl text-center font-bold"><span className="text-red-500">air</span>cover</p>
          <p className="text-[2.2rem]">for Hosts</p>
          </div>
          <p className="text-center text-2xl w-[90%] text-[#4f4e4e]">
            Top-to-bottom protection. Always included, always free. Only on
            Airbnb.
          </p>
        </div>
        {/* Guest identity verification */}
        <div className="flex flex-col gap-5">
          {/* first items */}
          <div className="border-[#dedcdc] border-[1.4px]"></div>
          <div className="flex flex-col gap-2 pb-5">
            <p className="text-[1.6rem] font-medium text-[#2a2929]">Guest identity verification</p>
            <p className="text-[1.2rem] text-[#6e6d6d] font-light">Our comprehensive verification system checks details such as name, address, government ID and more to confirm the identity of guests who book on Airbnb.</p>
          </div>
          {/* second */}
          <div className="border-[#dedcdc] border-[1.4px]"></div>
          <div className="flex flex-col gap-2 pb-5">
            <p className="text-[1.6rem] font-medium text-[#2a2929]">Reservation screening</p>
            <p className="text-[1.2rem] text-[#6e6d6d]">Our proprietary technology analyses hundreds of factors in each reservation and blocks certain bookings that show a high risk for disruptive parties and property damage.</p>
          </div>
          {/* third */}
          <div className="border-[#dedcdc] border-[1.4px]"></div>
          <div className="flex flex-col gap-4 pb-5">
            <p className="text-[1.6rem] font-medium text-[#2a2929]">$3m USD damage protection</p>
            <p className="text-[1.2rem] text-[#6e6d6d] pb-6">If guests do not pay for the damage caused to your home and belongings, Host damage protection is in place to help reimburse costs up to $3m USD, including these specialised protections:</p>
             {/* first subtopic */}
            <div className="flex flex-col gap-2">
              <p className="text-[1.3rem] font-light text-[#212020]">Art & valuables</p>
              <p className="text-[1.1rem] font-light text-[#6e6d6d] pb-5">Get reimbursed for damaged art or valuables.</p>
            </div>
            <div className="border-[#d2d0d0] border-[0.9px]"></div>
            {/* second subtopic */}
            <div className="flex flex-col gap-2">
              <p className="text-[1.3rem] font-light text-[#212020]">Auto & boat</p>
              <p className="text-[1.1rem] font-light text-[#6e6d6d] pb-5">Get reimbursed for damage to cars, boats and other watercraft that you park or store at your home.</p>
            </div>
            <div className="border-[#d2d0d0] border-[0.9px]"></div>
            {/* third subtopic */}
            <div className="flex flex-col gap-2">
              <p className="text-[1.3rem] font-light text-[#212020]">Pet damage</p>
              <p className="text-[1.1rem] font-light text-[#6e6d6d] pb-5">Get reimbursed for damage caused by a guest’s pet.</p>
            </div>
            <div className="border-[#d2d0d0] border-[0.9px]"></div>
            {/* fourth subtopic */}
            <div className="flex flex-col gap-2">
              <p className="text-[1.3rem] font-light text-[#212020]">Income loss</p>
              <p className="text-[1.1rem] font-light text-[#6e6d6d] pb-5">If you have to cancel Airbnb bookings due to guest damage, you'll be compensated for the lost income.</p>
            </div>
            <div className="border-[#d2d0d0] border-[0.9px]"></div>
            {/* fifth subtopic */}
            <div className="flex flex-col gap-2">
              <p className="text-[1.3rem] font-light text-[#212020]">Deep cleaning</p>
              <p className="text-[1.1rem] font-light text-[#6e6d6d] pb-5">Get reimbursed for extra cleaning services required to remove stains and smoke odours.</p>
            </div>
          </div>
          {/* fourth */}
          <div className="border-[#dedcdc] border-[1.4px]"></div>
          <div className="flex flex-col gap-2 pb-5">
            <p className="text-[1.6rem] font-medium text-[#2a2929]">$1m USD liability insurance</p>
            <p className="text-[1.2rem] text-[#6e6d6d]">Protection in the rare event that a guest gets hurt or their belongings are damaged or stolen.</p>
          </div>
          {/* fifth */}
          <div className="border-[#dedcdc] border-[1.4px]"></div>
          <div className="flex flex-col gap-2 pb-5">
            <p className="text-[1.6rem] font-medium text-[#2a2929]">24-hour safety line</p>
            <p className="text-[1.2rem] text-[#6e6d6d]">If you ever feel unsafe, our app provides one-tap access to specially trained safety agents, day or night.</p>
          </div>

          <div className="border-[#dedcdc] border-[1.4px]"></div>

          <div>
            <p className="text-[0.97rem] text-[#838080] font-light">Find complete details on <span className="underline font-medium text-[#474747]"> how AirCover for Hosts protects you</span> and any exclusions that apply.</p>
          </div>
        </div>
        
      </div>
      {/* Only airbnb gives you aircover */}
      {/* footer part */}
      <Footer />
    </div>
  );
}

export default AircoverForHost;
