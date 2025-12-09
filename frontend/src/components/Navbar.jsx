import React from "react";
import { MdSearch } from "react-icons/md";

function Navbar() {
  return (
    <nav className="flex flex-col gap-6 border-b-gray-300 border-b-[1.2px] pb-[0.5] shadow-md shadow-gray-500/20">
      <div className=" border-[1.2px] p-4 border-gray-300 shadow-md shadow-gray-500/20 div-4 rounded-4xl text-center text-black flex flex-row justify-center align-middle items-center gap-2 mx-4 mt-3">
        {" "}
        <MdSearch size={18} className="font-bold" />{" "}
        <p className="text-1xl font-medium">Start your search</p>{" "}
      </div>
      {/* homes experiece and services. */}
      <div className="flex flex-row items-center justify-around mx-8">
        <div className="flex flex-col align-middle justify-center items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3171/3171547.png"
            alt="homes"
            width={40}
          />
          <p className="text-gray-600 font-medium text-[0.9rem]">Homes</p>
        </div>
        <div className="flex flex-col align-middle justify-center items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2955/2955139.png"
            alt="Experience"
            width={40}
          />
          <p className="text-gray-600 font-medium text-[0.9rem]">Experience</p>
        </div>
        <div className="flex flex-col align-middle justify-center items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/563/563976.png"
            alt="services"
            width={40}
          />
          <p className="text-gray-600 font-medium text-[0.9rem]">Service</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// navbar : make the navbar for the airbnb project.
