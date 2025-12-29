import React, { useState } from "react";
import { Link } from "react-router";
import Footer from "../../components/Footer";
import { FaAirbnb } from "react-icons/fa6";
import { MdSearch } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa";

function HelpCenter() {
  const [show, setShow] = useState(false);
  return (
    <div>
      {/* navbar of the help center page */}
      <div className="p-6 flex md:items-center md:justify-between md:p-8 md:px-12 ">
        <div className="flex items-center ">
          <Link to="/">
            <FaAirbnb size={35} />
          </Link>
          <p className="text-[1.2rem] font-medium">Help Center</p>
        </div>
        {/* medium size option */}
        <div
          className="hidden md:flex md:flex-row items-center md:border-[1.2px] md:border-[#c1c1c1] md:w-fit md:gap-2 md:px-2 md:py-1 md:rounded-4xl relative"
          onClick={() => {
            if (show === false) {
              setShow(true);
            } else {
              setShow(false);
            }
          }}
        >
          <RxHamburgerMenu size={20} color="black" />
          <div className="p-2 bg-[#807f7f] rounded-2xl">
            <FaUser size={20} color="white" />
          </div>
          {show ? (
            <div className=" absolute h-auto w-60 bg-[#ffffff] shadow-md shadow-[#a3a2a2] top-14 right-10 rounded-2xl flex flex-col ">
              <Link
                to="/allhelptopic"
                className="text-[1.2rem] border-b-[1.2px] border-[#c1c1c1] px-4 p-2  hover:bg-[#e1dede] hover:rounded-2xl hover:cursor-pointer"
              >
                All help topics
              </Link>
              <Link
                to="/aircoverforhosts"
                className="text-[1.2rem] border-b-[1.2px] border-[#c1c1c1] px-4 p-2  hover:bg-[#e1dede] hover:rounded-2xl hover:cursor-pointer"
              >
                Hosting Resources
              </Link>
              <Link
                to="/login"
                className="text-[1.2rem] border-b-[1.2px] border-[#c1c1c1] px-4 p-2  hover:bg-[#e1dede] hover:rounded-2xl hover:cursor-pointer"
              >
                Log in{" "}
              </Link>
              <Link
                to="/login"
                className="text-[1.2rem] border-b-[1.2px] border-[#c1c1c1] px-4 p-2  hover:bg-[#e1dede] hover:rounded-2xl hover:cursor-pointer rounded-2xl"
              >
                Sign up
              </Link>
            </div>
          ) : (
            " "
          )}
        </div>

        
      </div>
      {/* body part */}
      <div className="lg:flex lg:justify-center">
        <div className="px-4 py-4 flex flex-col gap-8 pb-20 lg:w-[50%]">
          <div>
            <p className="text-center text-[1.8rem] font-medium font-serif">
              Hi, how can we help?
            </p>
          </div>

          {/* searching tab in the help center */}

          <div className=" border-[1.2px] p-4 border-gray-300 shadow-md shadow-gray-500/20 rounded-4xl text-center text-black flex flex-row justify-center align-middle items-center gap-2 mt-3 bg-gray-100">
            {" "}
            <MdSearch size={24} className="font-bold" color="red" />{" "}
            <p className="text-1xl font-medium">Search help</p>{" "}
          </div>

          <div>
            {/* Explore more */}
            <p className="text-2xl font-medium md:pb-4 pb-3">Explore more</p>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex flex-row align-items  rounded-2xl md:flex-col  md:w-[50%] ">
                <div>
                  <img
                    className="rounded-l-2xl  w-40 h-25 md:w-full md:h-50 md:rounded-none md:rounded-t-2xl"
                    src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt6a2935c750dda8a0/6179c6499778eb18575b3c0b/Airbnb-Policy-Web.png"
                    alt="foundation_trust"
                  />
                </div>
                <div className="text-white bg-[#222222] flex flex-col align-center justify-center items-start width-full rounded-r-2xl md:rounded-none  w-full md:rounded-b-2xl md:h-20">
                  <div className="pl-4 pr-3 py-1">
                    <p className="text-[1.2rem] whitespace-nowrap">
                      Our community policies
                    </p>
                    <p className="text-[0.9rem] whitespace-nowrap">
                      How we build a foundation of trust.
                    </p>
                  </div>
                </div>
              </div>
              {/* safety tips and guidlines */}
              <div className="flex flex-row align-items  rounded-2xl md:flex-col  md:w-[50%] pb-5">
                <div>
                  <img
                    className="rounded-l-2xl w-40 h-25 md:w-full md:h-50 md:rounded-none md:rounded-t-2xl"
                    src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt93efaa7b7d28041c/Airbnb-Safety-Web.png"
                    alt="foundation_trust"
                  />
                </div>
                <div className="text-white bg-[#222222] flex flex-col align-center justify-center items-start width-full rounded-r-2xl w-full md:rounded-none md:rounded-b-2xl md:h-20">
                  <div className="pl-4 pr-3 py-1">
                    <p className="text-[1.2rem] whitespace-nowrap ">
                      Safety tips and guidlines
                    </p>
                    <p className="text-[0.9rem] whitespace-nowrap">
                      Resources to help travel to stay safe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Need to get in touch part  */}
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-2xl font-medium">Need to get in touch?</p>
              </div>
              <div>
                <p className="text-[1.1rem] font-light">
                  We'll start with some questions and get you to the right
                  place.
                </p>
              </div>
              <div>
                <Link>
                  <div className="border-2  rounded-2xl text-center p-3 hover:bg-gray-200">
                    <p className="text-[1.3rem] font-semibold">Contact us</p>
                  </div>
                </Link>
              </div>
              {/* take the feedback from the user. */}
              <div>
                <p>
                  You can also{" "}
                  <span className="underline font-bold cursor-pointer">
                    give us feedback.
                  </span>
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
