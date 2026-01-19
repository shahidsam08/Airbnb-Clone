import React, { useState } from "react";
import Footer from "../../components/Footer";
import { FaAirbnb } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxQuestionMarkCircled } from "react-icons/rx";
import HeaderCommon from "../../components/HeaderCommon.jsx"

function Freehostingclass() {
  const [first, setfirst] = useState(false);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false);

  const [Toggle, setToggle] = useState(false);
  return (
    <div
      onClick={() => {
        if (window.screen.width >= 768 && Toggle === true) {
          setToggle(false);
        }
      }}
    >
      <div>
        <HeaderCommon />
      </div>
      {/* headers show on only small size */}
      {/* body parts of the page */}
      <div className="px-5 py-8 flex flex-col">
        {/* Intro to hosting on airbnb */}
        <div className="flex flex-col gap-8 pb-10 items-center justify-center">
          <div className="border-[#282727] border-[1.5px] w-[90px]"></div>
          <p className="text-5xl text-center font-medium text-[#1e1d1d] md:text-6xl md:w-[70%]">
            Intro to hosting on Airbnb
          </p>
          <p className="text-center text-2xl text-[#2f2e2e] md:text-3xl md:w-[70%]">
            Learn the basics in a free webinar presented by Superhost
            Ambassadors.
          </p>
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1764101828784/original/dc1567dd-c21b-4a4d-bf8e-ed62e11deb37.png?im_w=720"
            alt="community"
            className="rounded-2xl md:w-[80%] "
          />
        </div>
        {/* sign up for webinar */}
        <div className="flex flex-col gap-4 pb-15">
          <div>
            <p className="text-center text-[2.1rem] font-medium md:text-[3rem]">
              Sign up for a webinar
            </p>
            <p className="text-center text-[0.9rem] md:text-[1.2rem]">
              Selecting a link will take you to a Zoom site.
            </p>
          </div>
          {/* box content */}
          <div className="flex flex-row flex-wrap items-center justify-center gap-8 ">
            {/* first */}
            <div className="flex flex-col items-center justify-center gap-2 w-[40%]">
              <p className="text-2xl font-medium text-center">Canada</p>
              <p>English</p>
              <div className="bg-[#eb2b5e] text-white px-4 py-3 text-[1.1rem] rounded-[0.6rem] text-center">
                View webinars
              </div>
            </div>
            {/* second */}
            <div className="flex flex-col items-center justify-center gap-2 w-[40%]">
              <p className="text-2xl font-medium text-center">España</p>
              <p>Español</p>
              <div className="bg-[#eb2b5e] text-white px-4 py-3 text-[1.1rem] rounded-[0.6rem] text-center">
                Ver webinarios
              </div>
            </div>
            {/* third */}
            <div className="flex flex-col items-center justify-center gap-2 w-[40%]">
              <p className="text-2xl font-medium text-center">France</p>
              <p>Français</p>
              <div className="bg-[#eb2b5e] text-white px-4 py-3 text-[1.1rem] rounded-[0.6rem] text-center">
                Voir les webinaires
              </div>
            </div>
            {/* fourth */}
            <div className="flex flex-col items-center justify-center gap-2 w-[40%]">
              <p className="text-2xl font-medium text-center">Italia</p>
              <p>Italiano</p>
              <div className="bg-[#eb2b5e] text-white px-4 py-3 text-[1.1rem] rounded-[0.6rem] text-center">
                Visualizza i webinar
              </div>
            </div>
            {/* fifth */}
            <div className="flex flex-col items-center justify-center gap-2 w-[40%]">
              <p className="text-2xl font-medium text-center">United Kingdom</p>
              <p>English</p>
              <div className="bg-[#eb2b5e] text-white px-4 py-3 text-[1.1rem] rounded-[0.6rem] text-center">
                View webinars
              </div>
            </div>
            {/* sixth */}
            <div className="flex flex-col items-center justify-center gap-2 w-[40%]">
              <p className="text-2xl font-medium text-center">United States</p>
              <p>English</p>
              <div className="bg-[#eb2b5e] text-white px-4 py-3 text-[1.1rem] rounded-[0.6rem] text-center">
                View webinars
              </div>
            </div>
            {/* seventh */}
            <div className="flex flex-col items-center justify-center gap-2 w-[40%]">
              <p className="text-2xl font-medium text-center">United States</p>
              <p>Español</p>
              <div className="bg-[#eb2b5e] text-white px-4 py-3 text-[1.1rem] rounded-[0.6rem] text-center">
                Ver webinarios
              </div>
            </div>
          </div>
        </div>
        {/* what to expect */}
        <div className="flex flex-col gap-15 pb-15 items-center justify-center">
          <div className="border-[#282727] border-[1.5px] w-[90px]"></div>
          <p className="text-4xl font-medium md:text-6xl">What to expect</p>
          <div className="flex flex-col gap-3 md:flex md:flex-row-reverse md:gap-5 md:self-center md:px-10">
            <img
              src="https://a0.muscache.com/im/pictures/canvas/Canvas-1764035186347/original/4a88ff4c-d80e-4b73-a45d-d503e9fc54b6.png?im_w=720"
              alt="girls"
              className="rounded-2xl mb-1 md:w-[40%]"
            />
            <div className="md:flex md:flex-col md:items-start md:justify-center md:w-[50%]">
              <p className="text-2xl font-medium">
                Everything you need to get started
              </p>
              <p className="text-[1.15rem] text-[#626161]">
                Experienced hosts called Superhost Ambassadors will walk you
                through hosting, from how to list your space to what to do
                before guests arrive.
              </p>
            </div>
          </div>
          {/* second */}
          <div className="flex flex-col gap-3 md:flex md:flex-row md:gap-15 md:px-10">
            <img
              src="https://a0.muscache.com/im/pictures/canvas/Canvas-1764102119517/original/c0cfa2af-d71d-44c3-9843-b552891dbe81.png?im_w=720&im_q=medq"
              alt="couples"
              className="rounded-2xl mb-1 md:w-[50%]"
            />
            <div className="md:flex md:flex-col md:items-start md:justify-center md:w-[50%]">
              <p className="text-2xl font-medium">Support beyond the webinar</p>
              <p className="text-[1.15rem] text-[#626161]">
                The Superhost Ambassador who presents your webinar can also be
                your guide. They can provide free one-to-one support, help you
                set up your listing and give you hosting tips as you discover
                what it’s like to become a host.
              </p>
            </div>
          </div>
        </div>
        {/* airbnb resources */}
        <div className="flex flex-col gap-8 md:flex md:flex-row md:justify-around md:items-start md:px-10">
          <p className="text-4xl font-bold text-gray-900">Airbnb resources</p>
          <div className="flex flex-col gap-7 md:w-[65%] lg:w-[80%]">
            <div
              className="flex flex-row items-center justify-between cursor-pointer"
              onClick={() => (first ? setfirst(false) : setfirst(true))}
            >
              <p className="text-[1.2rem] font-bold">Estimate your earnings</p>
              {first ? <FaAngleUp size={18} /> : <FaAngleDown size={18} />}
            </div>
            {first ? (
              <div>
                <p className="text-[#7b7979] text-[1.1rem]">
                  <span className="underline font-bold">
                    Find out how much you could earn
                  </span>{" "}
                  by listing your space.
                </p>
              </div>
            ) : (
              " "
            )}
            <div className="border-[0.4px] border-[#d5d5d5]"></div>
            {/* second */}
            <div
              className="flex flex-row items-center justify-between cursor-pointer"
              onClick={() => (second ? setsecond(false) : setsecond(true))}
            >
              <p className="text-[1.2rem] font-bold">First-time hosting</p>
              {second ? <FaAngleUp size={18} /> : <FaAngleDown size={18} />}
            </div>
            {second ? (
              <div>
                <p className="text-[#7b7979] text-[1.1rem]">
                  <span className="underline font-bold">
                    Set your listing apart
                  </span>{" "}
                  and get ready for guests.
                </p>
              </div>
            ) : (
              " "
            )}
            <div className="border-[0.4px] border-[#d5d5d5]"></div>
            {/* third */}
            <div
              className="flex flex-row items-center justify-between cursor-pointer"
              onClick={() => (third ? setthird(false) : setthird(true))}
            >
              <p className="text-[1.2rem] font-bold">First-time hosting</p>
              {third ? <FaAngleUp size={18} /> : <FaAngleDown size={18} />}
            </div>
            {third ? (
              <div>
                <p className="text-[#7b7979] text-[1.1rem]">
                  <span className="underline font-bold">
                    Discover how our pricing tools can help
                  </span>{" "}
                  you set a competitive rate.
                </p>
              </div>
            ) : (
              " "
            )}
            <div className="border-[0.4px] border-[#d5d5d5]"></div>
          </div>
        </div>
      </div>

      {/* footer part */}
      <Footer />
    </div>
  );
}

export default Freehostingclass;
