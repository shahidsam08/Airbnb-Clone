import React from "react";
import { FaAirbnb } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import Footer from "../../components/Footer";
import { FaStar } from "react-icons/fa";

function FindaCoHost() {
  return (
    <div>
      {/* first body */}
      <div className="px-6 py-5 flex flex-col gap-5">
        <div>
          <Link to="/">
            <FaAirbnb size={40} color="red" />
          </Link>
        </div>
        {/* find a co host */}
        <div className="flex flex-col gap-8 items-center justify-center py-15">
          <p className="text-center text-[2.7rem] leading-12 font-bold">
            Manage your home on Airbnb with help from a co-host
          </p>
          <p className="text-center text-2xl text-[#727171]">
            Co-Host Network makes it easy to find and work with a high-quality,
            local co‑host to help manage your place.
          </p>
          <div className="flex flex-row gap-2 w-[90%] items-center justify-center py-3 bg-[#f42c62] rounded-[0.6rem]">
            <MdSearch color="white" size={25} />
            <button className="text-white text-[1.2rem] ">
              Find a co-host
            </button>
          </div>
        </div>

        {/* co host take care of your home or guest */}
        <div className="flex flex-col gap-10 py-10">
          <p className="text-center text-[2.5rem] leading-10 font-semibold">
            Co-hosts take care of your home and guests
          </p>
          <p className="text-center text-[1.2rem] text-[#727171]">
            Find full-service support that’s tailored to fit your needs.
          </p>
          <div className="flex flex-row gap-10 flex-wrap items-start justify-around">
            <div className="flex flex-col gap-4 items-center justify-center w-[40%]">
              <img
                src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-CohostingMarketingLandingPage/original/12cec1f7-a270-49cc-a0c2-ff843436d20e.png"
                alt="home"
                className="w-17"
              />
              <p className="font-bold text-wrap text-center text-[1.1rem]">
                Listing setup
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center  justify-center w-[40%]">
              <img
                src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-CohostingMarketingLandingPage/original/f2326b21-540d-4d5e-baa0-3f5b98828db3.png"
                alt="home"
                className="w-17"
              />
              <p className="font-bold text-wrap text-center text-[1.1rem]">
                Pricing and availability
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center w-[40%]">
              <img
                src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-CohostingMarketingLandingPage/original/0ef54159-b39c-4c20-b7c1-2f6d772f3638.png"
                alt="home"
                className="w-17"
              />
              <p className="font-bold text-wrap text-center text-[1.1rem]">
                Reservations
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center w-[40%]">
              <img
                src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-CohostingMarketingLandingPage/original/74ad5dce-9b09-4b2e-ae3f-e9d0398035b9.png"
                alt="home"
                className="w-17"
              />
              <p className="font-bold text-wrap text-center text-[1.1rem]">
                Guest messaging
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center w-[40%]">
              <img
                src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-CohostingMarketingLandingPage/original/7d548ddd-fdd1-453d-a901-190d41a6f927.png"
                alt="home"
                className="w-17"
              />
              <p className="font-bold text-wrap text-center text-[1.1rem]">
                On-site support
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center w-[40%]">
              <img
                src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-CohostingMarketingLandingPage/original/bbcb2beb-0643-4af5-9b45-765acb034e2a.png"
                alt="home"
                className="w-17"
              />
              <p className="font-bold text-wrap text-center text-[1.1rem]">
                Cleaning
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center w-[40%]">
              <img
                src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-CohostingMarketingLandingPage/original/03d66940-cdb0-4155-b827-1dd67ee24a00.png"
                alt="home"
                className="w-17"
              />
              <p className="font-bold text-wrap text-center text-[1.1rem]">
                Photography
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center w-[40%]">
              <img
                src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-CohostingMarketingLandingPage/original/2fc15cef-451e-42ea-b0a2-f7c4fea2e64f.png"
                alt="home"
                className="w-17"
              />
              <p className="font-bold text-wrap text-center text-[1.1rem]">
                Interior design
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center w-[40%]">
              <img
                src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-CohostingMarketingLandingPage/original/67617540-e782-4562-997c-1518ebc20635.png"
                alt="home"
                className="w-17"
              />
              <p className="font-bold text-wrap text-center text-[1.1rem]">
                Licensing and permits
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center w-[40%]">
              <img
                src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-CohostingMarketingLandingPage/original/74b89191-6508-425b-ab32-4b93c306f184.png"
                alt="home"
                className="w-17"
              />
              <p className="font-bold text-wrap text-center text-[1.1rem]">
                Additional services
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* second body */}
      <div>
        <div className="px-6 py-5 flex flex-col gap-5">
          {/* local co host do it best */}
          <div className="flex flex-col gap-10 py-10">
            <p className="text-center text-[2.5rem] leading-10 font-semibold">
              Local co‑hosts do it best
            </p>
            <p className="text-center text-[1.2rem] text-[#727171]">
              Co‑hosts in your area can help navigate local regulations and make
              your place stand out.
            </p>
            {/* card */}
            <div className="flex flex-col gap-4 items-center justify-center bg-[#f1f1f1] py-8 border-[#dfdbdb] border-[0.2px] rounded-4xl">
              <img
                src="/shahidali.jpg"
                alt="user"
                className="w-32 h-32 rounded-[50%]   object-contain object-center"
              />
              <p className="text-[1.8rem] font-medium">Shahid Ali</p>
              <p className="text-[0.9rem] font-medium">Bhopal, India</p>
              <div className="bg-white w-[90%] py-2 px-5 flex flex-row items-center justify-around rounded-2xl">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-row gap-1 items-center">
                    <FaStar size={13} />
                    <span>5.0</span>
                  </div>
                  <p className="text-[0.8rem]">guest rating</p>
                </div>
                <div className="border-[0.8px] h-9 border-[#dbdada]"></div>
                <div className="flex flex-col items-center justify-center">
                  <p>14</p>
                  <p className="text-[0.8rem]">years hosting</p>
                </div>
              </div>
            </div>
          </div>
          {/* it's easy to get started */}
          <div className="flex flex-col gap-10 py-10">
            <p className="text-center text-[2.5rem] leading-10 font-bold">
              It’s easy to get started
            </p>
            <div className="flex flex-col gap-[0.2rem]">
              <p className=" text-[2.5rem] font-semibold text-[#7a7878]">01</p>
              <p className=" text-[1.6rem]  font-semibold text-[#414040]">
                Enter your home’s location
              </p>
              <p className=" text-[1.2rem] text-[#828181]">
                Explore available co‑hosts in your area, along with their
                profile and guest ratings.
              </p>
            </div>
            <div className="flex flex-col gap-[0.2rem]">
              <p className=" text-[2.5rem] font-semibold text-[#7a7878]">02</p>
              <p className=" text-[1.6rem]  font-semibold text-[#414040]">
                Get to know some co‑hosts
              </p>
              <p className=" text-[1.2rem] text-[#828181]">
                Message as many co‑hosts as you like, and when you’re ready,
                invite one to become your co‑host.
              </p>
            </div>
            <div className="flex flex-col gap-[0.2rem]">
              <p className=" text-[2.5rem] font-semibold text-[#7a7878]">03</p>
              <p className=" text-[1.6rem]  font-semibold text-[#414040]">
                Collaborate with ease
              </p>
              <p className=" text-[1.2rem] text-[#828181]">
                Message your co‑host directly, give them access to your
                calendar, and more.
              </p>
            </div>
          </div>
          {/* not sure where to start */}
          <div className="flex flex-col items-center justify-center gap-10 py-10">
            <img
              src="https://a0.muscache.com/im/pictures/AirbnbPlatformAssets/AirbnbPlatformAssets-LandingPageCohost/original/3e722df7-e813-49f5-95ea-577b6e256a58.png"
              alt="help"
            />
            <p className="text-center text-[2rem] font-medium">
              Not sure where to start?
            </p>
            <p className="text-center text-[1.3rem] font-light text-[#5e5c5c]">
              Share a few details and we’ll contact you to answer any questions
              and help you find a co-host to meet your needs.
            </p>
            <form action="" className="flex flex-col gap-4 w-full">
              <input
                type="text"
                name=""
                id=""
                placeholder="Name"
                className="w-full border-[1.1px] border-gray-600 text-[1.4rem] p-3 rounded-[0.6rem]"
                required
              />
              <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                className="w-full border-[1.1px] border-gray-600 text-[1.4rem] p-3 rounded-[0.6rem]"
                required
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="PostCode"
                className="w-full border-[1.1px] border-gray-600 text-[1.4rem] p-3 rounded-[0.6rem]"
                required
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Phone number"
                className="w-full border-[1.1px] border-gray-600 text-[1.4rem] p-3 rounded-[0.6rem]"
                requied
              />
              <p className="text-[0.9rem] text-center text-[#969595]">
                By selecting “Get help”, you agree to be contacted by Airbnb and
                its partners about the Co-Host Network via email or phone and
                acknowledge the Airbnb Privacy Policy and agree to the Co-Host
                Network Additional Terms.
              </p>
              <input
                type="submit"
                value="Get Help"
                className="bg-black text-white py-3 rounded-2xl"
              />
            </form>
          </div>
        </div>
        {/* footer  */}
        <Footer />
        {/* sticky */}
        <div className="px-5 py-4 sticky bottom-0 z-auto backdrop-blur-md">
          <div className="flex flex-row gap-2 items-center justify-center py-3 bg-[#f42c62] rounded-[0.6rem] ">
            <MdSearch color="white" size={25} />
            <button className="text-white text-[1.2rem] ">
              Find a co-host
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindaCoHost;
