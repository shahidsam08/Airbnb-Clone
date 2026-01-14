import React from "react";
import Footer from "../components/Footer.jsx";
import HeaderCommon from "../components/HeaderCommon.jsx";
import FooterBottom from "../components/FooterBottom.jsx";
import { Link } from "react-router-dom";

function Trips() {
  return (
    <div>
      <div>
        <HeaderCommon />
      </div>
      {/* trips */}
      <div className="h-200 lg:h-100 lg:flex lg:flex-col lg:items-center lg:justify-center">
        <div className="sticky top-0 md:hidden bg-white">
          <p className="text-4xl text-black font-bold border-b-[0.5px] border-[#c1c1c1] p-4 mb-2">
            Trips
          </p>
        </div>
        <div className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:self-center">
          <div className="px-10 flex flex-col gap-4 lg:flex-row lg:gap-6">
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-trips-tab/original/ab20b5d7-c4a7-47ea-864b-acb9bb3fb2c5.png?im_w=480"
                alt=""
                width={280}
              />
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-center text-2xl font-bold">
                Build the perfect trip
              </p>
              <p className="text-[0.85rem] text-center">
                Explore homes, experiences and services. When you book, your
                reservations will appear here.
              </p>
              <Link to="/" className="flex flex-col">
                <div className="bg-[#da1249] w-[60%] self-center py-3 rounded-2xl">
                  <p className="text-white text-center text-[1.3rem]">
                    Get Started
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <Footer />
      </div>

      <div className="md:hidden sticky bottom-0">
        <FooterBottom />
      </div>
    </div>
  );
}

export default Trips;
