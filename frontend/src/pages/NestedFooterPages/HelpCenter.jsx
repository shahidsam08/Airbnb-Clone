import React from "react";
import { Link } from "react-router";
import Footer from "../../components/Footer";
import { FaAirbnb } from "react-icons/fa6";
import { MdSearch } from "react-icons/md";

function HelpCenter() {
  return (
    <div>
      <div className="px-4 py-4 flex flex-col gap-6">
        <div className="flex flex-row align-center items-center gap-2">
          <FaAirbnb size={35} />
          <p className="text-[1.2rem] font-medium">Help Center</p>
        </div>
        <div>
          <p className="text-center text-[1.8rem] font-medium font-serif">
            Hi, how can we help?
          </p>
        </div>

        {/* searching tab in the help center */}
        <div className=" border-[1.2px] p-4 border-gray-300 shadow-md shadow-gray-500/20 div-4 rounded-4xl text-center text-black flex flex-row justify-center align-middle items-center gap-2 mx-4 mt-3">
          {" "}
          <MdSearch size={18} className="font-bold" />{" "}
          <p className="text-1xl font-medium">Start your search</p>{" "}
        </div>
        {/* Explore more */}
        <p className="text-2xl font-medium">Explore more</p>
        <div className="flex flex-col gap-6">
          <div className="flex flex-row align-items  rounded-2xl">
            <div>
              <img
                className="rounded-l-2xl w-40 h-25"
                src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt6a2935c750dda8a0/6179c6499778eb18575b3c0b/Airbnb-Policy-Web.png"
                alt="foundation_trust"
              />
            </div>
            <div className="text-white bg-[#222222] flex flex-col align-center justify-center items-start width-full rounded-r-2xl w-full">
              <div className="pl-4 pr-3 py-1">
                <p className="text-[1.2rem]">Our community policies</p>
                <p className="text-[0.9rem]">
                  How we build a foundation of trust.
                </p>
              </div>
            </div>
          </div>
          {/* safety tips and guidlines */}
          <div className="flex flex-row align-items  rounded-2xl">
            <div>
              <img
                className="rounded-l-2xl w-40 h-25"
                src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt93efaa7b7d28041c/Airbnb-Safety-Web.png"
                alt="foundation_trust"
              />
            </div>
            <div className="text-white bg-[#222222] flex flex-col align-center justify-center items-start width-full rounded-r-2xl w-full">
              <div className="pl-4 pr-3 py-1">
                <p className="text-[1.2rem]">Safety tips and guidlines</p>
                <p className="text-[0.9rem]">
                  Resources to help travel to stay safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer part */}
      <Footer />
    </div>
  );
}

export default HelpCenter;
