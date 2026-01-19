import React, { useState, useContext } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { FaAirbnb } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { FaAngleLeft } from "react-icons/fa6";
import { FaFile } from "react-icons/fa6";
import { MdSearch } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import AuthContext from "../../context/AuthContext";

function Aircover() {
  const [isHelpful, isSethelpful] = useState("value");
  const [show, setShow] = useState(false);

  const { isAuthenticated, loading, setIsAuthenticated, user, logout } =
    useContext(AuthContext);

  return (
    <div>
      <div className="p-6 flex items-center justify-between md:p-8 md:px-12">
        <div className="flex items-center ">
          <Link to="/">
            <FaAirbnb size={35} />
          </Link>
          <p className="text-[1.2rem] font-medium">Help Center</p>
        </div>
        <div className="md:hidden">
          <MdSearch size={25} />
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
          <div>
            <RxHamburgerMenu size={20} color="black" />
          </div>
          {isAuthenticated ? (
            <div className="bg-black w-7 h-7 flex flex-col items-center justify-center rounded-full">
              <p className="text-white">
                {user?.email?.charAt(0)?.toUpperCase()}
              </p>
            </div>
          ) : (
            <div className="bg-[#807f7f] w-8 h-8 flex flex-col items-center justify-center rounded-2xl">
              <FaUser size={18} color="white" />
            </div>
          )}
          {show ? (
            <div className=" absolute h-auto w-60 bg-[#ffffff] shadow-md shadow-[#a3a2a2] top-14 right-10 rounded-2xl flex flex-col z-50">
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
              {isAuthenticated ? (
                <Link
                  to="/accountsetting"
                  className="text-[1.2rem] border-b-[1.2px] border-[#c1c1c1] px-4 p-2  hover:bg-[#e1dede] hover:rounded-2xl hover:cursor-pointer"
                >
                  Account Setting
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="text-[1.2rem] border-b-[1.2px] border-[#c1c1c1] px-4 p-2  hover:bg-[#e1dede] hover:rounded-2xl hover:cursor-pointer"
                >
                  Log in{" "}
                </Link>
              )}
              {isAuthenticated ? (
                <div
                  className="text-[1.2rem] border-b-[1.2px] border-[#c1c1c1] px-4 p-2  hover:bg-[#e1dede] hover:rounded-2xl hover:cursor-pointer rounded-2xl"
                  onClick={logout}
                >
                  <p>Log Out</p>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="text-[1.2rem] border-b-[1.2px] border-[#c1c1c1] px-4 p-2  hover:bg-[#e1dede] hover:rounded-2xl hover:cursor-pointer rounded-2xl"
                >
                  Sign up
                </Link>
              )}
            </div>
          ) : (
            " "
          )}
        </div>
      </div>
      {/* body parts of the page. */}
      <div className="lg:flex lg:justify-center pt-10 lg:flex-row-reverse lg:items-start lg:relative">
        {!isAuthenticated && <div className="px-6 py-5 border-[0.4px] shadow-md border-[#d7d7d7] hidden lg:flex lg:flex-col gap-4 lg:w-[35%] rounded-2xl lg:sticky lg:top-20">
          <p className="text-[1.2rem] text-[#525151]">
            Get help with your reservations, account, and more.
          </p>
          <p className="border-2 text-center py-3 rounded-[0.7rem] bg-[#d20962] text-white text-[1.2rem]">
            Log in or Sign up
          </p>
        </div>}
        

        <div className="border-2 m-10 text-center py-3 rounded-[0.7rem] bg-[#d20962] text-white text-[1.2rem] lg:hidden">
          Log in or Sign up
        </div>
        <div className="px-10 py-6 flex flex-col gap-9 lg:w-[50%]">
          {/* login and sign up button */}

          {/* booking basic link box */}
          <div className="flex flex-row items-center align-middle gap-3">
            <FaAngleLeft size={15} className="text-gray-400" />
            <p className="underline text-gray-700 text-[0.9rem]">
              Bookign basics
            </p>
          </div>
          {/* Air cover for guest box */}
          <div className="mb-7">
            <p className="flex flex-row align-middle items-center font-medium text-gray-500">
              Guide <LuDot /> Guest{" "}
            </p>
            <p className="text-[2.1rem] font-medium text-gray-800">
              AirCover for guests
            </p>
            <img
              src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt5912675266dfa56f/62619649b9aa584a4e327561/AC_Guests_HG_EN_S@3x.png"
              alt="aircover_image"
              className="mb-6 rounded-2xl"
            />
            <p className="text-[1.12rem] font-light">
              Every home booking comes with AirCover for guests. If there’s a
              serious issue with your Airbnb home that your host can't resolve,
              we’re here to help.
            </p>
          </div>
          {/* We’ll help you get rebooked or give you a full or partial refund
           */}
          <div className="flex flex-col gap-5">
            <p className="text-[1.6rem] leading-[1.6rem] font-medium text-gray-800">
              We’ll help you get rebooked or give you a full or partial refund
            </p>
            <p className="text-[1.2rem] text-gray-800 font-light">
              Here’s where we can help:
            </p>
            <ul className="list-disc pl-12 text-[1.1rem] marker:text-[1.2rem] text-gray-700">
              <li>
                If your{" "}
                <span className="underline font-medium">
                  home host cancels before check-in
                </span>
              </li>
              <li>
                If there's a problem and{" "}
                <span className="underline font-medium">
                  you can’t get in touch with your host
                </span>{" "}
              </li>
              <li>
                If the listing is{" "}
                <span className="underline font-medium">
                  significantly different
                </span>{" "}
                than advertised, and your host can’t resolve the issue
              </li>
            </ul>
            <p className="text-[1.1rem] text-gray-700 mb-5">
              Our team can help you find a similar place, considering location
              and amenities, based on availability at comparable pricing. If a
              similar place isn’t available or you’d prefer not to rebook, we’ll
              give you a full or partial refund, including service fees.
            </p>
          </div>
          {/* How AirCover for guests works */}
          <div className="flex flex-col gap-5">
            <p className="text-[1.6rem] leading-[1.6rem] font-medium text-gray-800">
              How AirCover for guests works
            </p>
            <p className="text-[1.2rem] text-gray-800 font-light">
              AirCover for guests provides support for serious issues with your
              home booking, for example:
            </p>
            <ul className="list-disc pl-12 text-[1.1rem] marker:text-[1.2rem] text-gray-700">
              <li>Host cancels your reservation prior to check-in</li>
              <li>The heating is not working in winter</li>
              <li>The listing has fewer bedrooms than listed</li>
              <li>
                t’s a different type of home–a private room instead of an entire
                home
              </li>
              <li>
                A major advertised amenity, such as a pool or kitchen, is
                missing
              </li>
            </ul>
            <p className="text-[1.1rem] text-gray-700 mb-5">
              AirCover for guests doesn’t include more minor inconveniences,
              like a broken toaster.
            </p>
          </div>

          {/* Resolving issues during your stay */}
          <div className="flex flex-col gap-5">
            <p className="text-[1.6rem] leading-[1.6rem] font-medium text-gray-800">
              Resolving issues during your stay
            </p>
            <p className="text-[1.1rem] text-gray-800 font-light">
              Your host is your best point of contact to reach out to if
              anything comes up. You can{" "}
              <span className="underline font-medium">message your host</span>{" "}
              directly to let them know what’s going on. If an issue does come
              up during your stay:
            </p>
            <ol className="list-decimal pl-10 text-[1.1rem] text-gray-700 flex flex-col gap-2">
              <li>
                <span className="font-bold">Document the issue:</span> Take
                photos or videos as evidence.
              </li>
              <li>
                <span className="font-bold">Contact your host:</span> Notify
                your host within 72 hours of discovery, describing the problem
                and seeking a resolution.
              </li>
              <li>
                <span className="font-bold">Contact us:</span> If your host is
                unresponsive or unable to resolve the issue,
                <span className="font-semibold underline">contact us</span>{" "}
                immediately.
              </li>
              <li>
                <span className="font-bold">AirCover for guests support:</span>{" "}
                If the issue is covered by AirCover for guests and you wish to
                leave, we’ll help you find comparable accommodation based on
                availability and pricing. If a similar place is unavailable or
                you prefer not to rebook, you’ll receive a full or partial
                refund.
              </li>
            </ol>
          </div>
          {/* 24 hours safety line */}
          <div className="flex flex-col gap-5">
            <p className="text-[1.6rem] leading-[1.6rem] font-medium text-gray-900">
              24-hour safety line
            </p>
            <p className="text-[1.1rem] text-gray-800 font-light">
              Need to reach us?{" "}
              <span className="font-medium underline">Contact us</span> by
              phone, email, or chat.
            </p>
            <p className="text-[1.1rem] text-gray-900 font-light">
              If you ever feel unsafe, we're here to help you get priority
              access to specially trained safety agents who will assist you with
              your safety issues or directly connect you to local emergency
              authorities, day or night.
            </p>
          </div>
          {/* Text box which show some notice. 24 hours safety line */}
          <div className="border-[0.2px] border-gray-400  rounded-[0.9rem] flex flex-row gap-2 p-4">
            <div>
              <FaFile size={18} color="#ff7033" />
            </div>
            <p className="text-gray-700 text-[0.9rem]">
              AirCover for guests is not an insurance policy. It doesn’t cover
              travel related issues (example: Your trip is delayed due to a
              storm, or your luggage is damaged by your carrier). Learn more
              about{" "}
              <span className="font-semibold underline">
                AirCover for guests and travel, reservation, or stay protection
                insurance.
              </span>{" "}
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[1.1rem] text-gray-900">
              If you're a host, learn more about{" "}
              <span className="font-medium underline">AirCover for Hosts</span>{" "}
              and{" "}
              <span className="font-medium underline">
                improvements we've made.
              </span>
            </p>
          </div>
          {/* did this article helpful */}
          <div className="flex flex-row gap-3 items-center align-middle">
            <p className="font-bold text-[1.3rem]">Did this article help? </p>
            <p
              className="underline text-black font-medium hover:cursor-pointer"
              onClick={() => {
                isSethelpful("yes");
              }}
            >
              Yes
            </p>
            <p
              className="underline text-black font-medium hover:cursor-pointer"
              onClick={() => {
                isSethelpful("no");
              }}
            >
              No
            </p>
          </div>
          {/* dynamic content. */}
          <div>
            {isHelpful === "yes" ? (
              <p className="font-bold text-[1.1rem]">
                Thank you for letting us know!
              </p>
            ) : isHelpful === "no" ? (
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                  <p className="text-[1.3rem] font-medium text-gray-900">
                    Tell us a little more.
                  </p>
                  <p className="text-[#555454]">
                    Please select all that apply.
                  </p>
                </div>
                <form action="" className="flex flex-col gap-3 pl-3">
                  <div className="flex gap-4 flex-row">
                    <input
                      type="checkbox"
                      id="first"
                      className="scale-200 border-2 border-gray-400 accent-black"
                    />
                    <label
                      for="first"
                      className="text-[1.2rem] text-[#555454] font-light"
                    >
                      I didn’t find the answer to my question
                    </label>
                  </div>
                  {/* second */}
                  <div className="flex gap-4 flex-row">
                    <input
                      type="checkbox"
                      id="second"
                      className="scale-200 border-2 border-gray-400 accent-black"
                    />
                    <label
                      for="second"
                      className="text-[1.2rem] text-[#555454] font-light"
                    >
                      This info is confusing or unclear
                    </label>
                  </div>
                  {/* third */}
                  <div className="flex gap-4 flex-row">
                    <input
                      type="checkbox"
                      id="third"
                      className="scale-200 border-2 border-gray-400 accent-black"
                    />
                    <label
                      for="third"
                      className="text-[1.2rem] text-[#555454] font-light"
                    >
                      These instructions didn’t work
                    </label>
                  </div>
                  {/* fourth */}
                  <div className="flex gap-4 flex-row">
                    <input
                      type="checkbox"
                      id="fourth"
                      className="scale-200 border-2 border-gray-400 accent-black"
                    />
                    <label
                      for="fourth"
                      className="text-[1.2rem] text-[#555454] font-light"
                    >
                      Something else
                    </label>
                  </div>
                  <div>
                    <button
                      className="bg-black py-2 px-5 rounded-lg text-white"
                      type="submit"
                      name="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Aircover;
