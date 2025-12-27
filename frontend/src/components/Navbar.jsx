import React, { useEffect, useRef, useState } from "react";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  const[showBox, setShowBox ] = useState(true)
  const lastScrollY = useRef(0);
  
  useEffect(()=> {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if(currentScrollY < lastScrollY.current) {
        setShowBox(true)
      } else {
        setShowBox(false)
      }

      lastScrollY.current = currentScrollY
    };

    window.addEventListener("scroll" , handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <nav className="flex flex-col gap-6 border-b-gray-300 border-b-[1.2px] pb-[0.5] shadow-md shadow-gray-500/20">
      {/* searchpage components. */}
      
        <Link
        to="/searchpage"
        className="border-[1.2px] px-4 py-5 border-gray-300 shadow-md shadow-gray-500/20 rounded-4xl text-center text-black flex flex-row justify-center align-middle items-center gap-2 mx-4 mt-3 hover:border-black sticky top-0 z-10"
      >
        {" "}
        <MdSearch size={18} className="font-bold" />{" "}
        <p className="text-1xl font-medium">Search for homes</p>{" "}
      </Link>
      
      {/* homes experiece and services. */}
      <div className="flex flex-row items-center justify-around mx-8">
        {/* homes */}
        <div className="flex flex-col align-middle pb-2 justify-center items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3171/3171547.png"
            alt="homes"
            width={40}
            className={`${showBox
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 hidden"}`}
          />
          <p className="text-gray-600 font-medium text-[0.9rem]">Homes</p>
        </div>
        {/* exprience */}
        <div className="flex flex-col align-middle pb-2  justify-center items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2955/2955139.png"
            alt="Experience"
            width={40}
            className={`${showBox
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 hidden"}`}
          />
          <p className="text-gray-600 font-medium text-[0.9rem]">Experience</p>
        </div>
        {/* services */}
        <div className="flex flex-col align-middle pb-2  justify-center items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/563/563976.png"
            alt="services"
            width={40}
            className={`${showBox
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 hidden"}`}
          />
          <p className="text-gray-600 font-medium text-[0.9rem]">Service</p>
        </div>
      </div>
      
    </nav>
  );
}

export default Navbar;

// navbar : make the navbar for the airbnb project.
