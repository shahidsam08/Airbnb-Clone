import React from "react";
import { Link } from "react-router";
import Footer from "../../components/Footer";
import { FaAirbnb } from "react-icons/fa6";
import { MdSearch } from "react-icons/md";

function HelpCenter() {
  return (
    <div>
      <div className="px-4 py-4 flex flex-col gap-4">
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

        <div>
          <p className="text-2xl font-medium">Explore more</p>
          <div className="flex flex-row align-items border-2 border-black rounded-2xl">
            <div>
              <img className="rounded-l-2xl" src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt6a2935c750dda8a0/6179c6499778eb18575b3c0b/Airbnb-Policy-Web.png" alt="foundation_trust" width={140} />
            </div>
            <div className="text-white bg-gray-900 flex flex-col align-center justify-center items-start width-full">
              <p>Our community policies</p>
              <p>How we build a foundation of trust.</p>
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
