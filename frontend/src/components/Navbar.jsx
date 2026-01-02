import { MdSearch } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { FaAirbnb } from "react-icons/fa6";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { useState } from "react";
import { CgMenu } from "react-icons/cg";


function Navbar() {
  const [Toggle, setToggle] = useState(false);
  return (
    <nav className="bg-zinc-100">
      {/* this show only less than md ( <= 768 px) */}
      <div className="flex flex-col gap-6 border-b-gray-300 border-b-[1.2px] pb-[0.5] shadow-md shadow-gray-500/20 md:hidden">
        {/* searchpage components. */}
        <Link
          to="/searchpage"
          className="border-[1.2px] px-4 py-5 border-gray-300 shadow-md shadow-gray-500/20 rounded-4xl text-center text-black flex flex-row justify-center align-middle items-center gap-2 mx-4 mt-3 hover:border-black"
        >
          {" "}
          <MdSearch size={18} className="font-bold" />{" "}
          <p className="text-1xl font-medium">Search for homes</p>{" "}
        </Link>
        {/* homes experiece and services. */}
        <div className="flex flex-row items-center justify-around mx-8">
          {/* homes */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "border-b-[2.9px]" : "border-white"
            }
          >
            <div className="flex flex-col align-middle pb-2 justify-center items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3171/3171547.png"
                alt="homes"
                width={40}
              />
              <p className="text-gray-600 font-medium text-[0.9rem]">Homes</p>
            </div>
          </NavLink>
          {/* exprience */}
          <NavLink
            to="/exprience"
            className={({ isActive }) =>
              isActive ? "border-b-[2.9px]" : "border-white"
            }
          >
            <div className="flex flex-col align-middle pb-2  justify-center items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2955/2955139.png"
                alt="Experience"
                width={40}
              />
              <p className="text-gray-600 font-medium text-[0.9rem]">
                Experience
              </p>
            </div>
          </NavLink>
          {/* services */}
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "border-b-[2.9px]" : "border-white"
            }
          >
            <div className="flex flex-col align-middle pb-2  justify-center items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/563/563976.png"
                alt="services"
                width={40}
              />
              <p className="text-gray-600 font-medium text-[0.9rem]">Service</p>
            </div>
          </NavLink>
        </div>
      </div>

      {/* -----------------------this navbar show on when any body on the big screen >= 768  -----------------------------------------------*/}

      <div className="hidden md:flex md:flex-row md:items-center md:justify-between md:px-8 md:py-3">
        {/* airbnb logo */}
        <div>
          <Link to="/" className="flex flex-row items-center justify-center">
            <FaAirbnb size={50} color="red" />
            <p className="text-2xl font-bold text-red-500">Airbnb</p>
          </Link>
        </div>
        {/* homes experiece and services. */}
        <div className="flex flex-row items-center justify-around md:w-[60%] md:pt-2">
          {/* homes */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "border-b-[2.9px]" : "border-white"
            }
          >
            <div className="flex flex-col align-middle pb-2 justify-center items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3171/3171547.png"
                alt="homes"
                width={40}
              />
              <p className="text-gray-600 font-medium text-[0.9rem]">Homes</p>
            </div>
          </NavLink>
          {/* exprience */}
          <NavLink
            to="/exprience"
            className={({ isActive }) =>
              isActive ? "border-b-[2.9px]" : "border-white"
            }
          >
            <div className="flex flex-col align-middle pb-2  justify-center items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2955/2955139.png"
                alt="Experience"
                width={40}
              />
              <p className="text-gray-600 font-medium text-[0.9rem]">
                Experience
              </p>
            </div>
          </NavLink>
          {/* services */}
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "border-b-[2.9px]" : "border-white"
            }
          >
            <div className="flex flex-col align-middle pb-2  justify-center items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/563/563976.png"
                alt="services"
                width={40}
              />
              <p className="text-gray-600 font-medium text-[0.9rem]">Service</p>
            </div>
          </NavLink>
        </div>
        {/* large hamburger sign / become a host */}
        <div>
          <div className="hidden md:flex md:flex-row md:items-center md:justify-between md:sticky md:top-0 md:bg-zinc-100">
            <div className="flex flex-row items-center justify-center gap-8">
              <Link to="/host" className="md:hidden lg:block">
                <div className="px-3 py-2 rounded-2xl hover:bg-[#ebebebdd] text-[1rem]">
                  Become a host
                </div>
              </Link>
              <div
                className="md:p-2 md:bg-zinc-200 md:w-fit md:rounded-4xl md:flex md:items-center md:justify-center relative cursor-pointer"
                onClick={() => {
                  
                  if (Toggle === false) {
                    setToggle(true);
                  } else {
                    setToggle(false);
                  }
                }}
                
                
              >
                <CgMenu size={20} color="black"  />
              </div>
            </div>

            {/* show toggle data */}
            {Toggle ? (
              <div className="absolute top-15 right-5 bg-white shadow-2xl ring-gray-700 ring-offset-2 w-70 py-3 rounded-2xl flex flex-col gap-2">
                {/* help center */}
                <Link
                  to="/helpcenter"
                  className="flex flex-row gap-2 items-center justify-start hover:bg-[#f1f0f0] pl-2 py-2"
                >
                  <RxQuestionMarkCircled size={20} />
                  <p className="text-[1rem]">Help Center</p>
                </Link>
                <div className="border-[0.2px] border-[#dfdcdc] "></div>
                {/* become a host */}
                <Link to="/host" className="hover:bg-[#f1f0f0]">
                  <p className="text-[1.1rem] pl-2 py-2">Become a host</p>
                </Link>
                <div className="border-[0.2px] border-[#dfdcdc] "></div>
                {/* Refer a host */}
                <Link to="/refer-co-host" className="hover:bg-[#f1f0f0]">
                  <p className="text-[1.1rem] pl-2 py-2">Refer a host</p>
                </Link>
                <div className="border-[0.2px] border-[#dfdcdc] "></div>
                {/* find a co host */}
                <Link to="/findcohost" className="hover:bg-[#f1f0f0]">
                  <p className="text-[1.1rem] pl-2 py-2">Find a co-host</p>
                </Link>
                <div className="border-[0.2px] border-[#dfdcdc] "></div>
                {/* login or sign up  */}
                <Link to="/login" className="hover:bg-[#f1f0f0]">
                  <p className="text-[1.1rem] pl-2 py-2">Login or signup</p>
                </Link>
              </div>
            ) : (
              " "
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// navbar : make the navbar for the airbnb project.
