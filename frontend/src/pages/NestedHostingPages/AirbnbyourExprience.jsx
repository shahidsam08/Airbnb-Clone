import React, { useRef } from "react";
import Footer from "../../components/Footer.jsx";
import { FaAirbnb } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function AirbnbyourExprience() {
  // handle sliding the image using angles( right and left)
  const sliderRef = useRef(null);

  // previous
  const scrollPrev = () => {
    sliderRef.current.scrollBy({
      left: -330,
      behavior: "smooth",
    });
  };
  // next
  const scrollNext = () => {
    sliderRef.current.scrollBy({
      left: 330,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full flex-col gap-10">
      <div className="flex flex-col gap-10 px-5 py-10">
        {/* airbnb logo not sticky or fixed. */}
        <div className="w-fit">
          <Link to="/">
            <FaAirbnb size={45} color="red" />
          </Link>
        </div>
        {/* get paid to do what you love */}
        <div className="flex flex-col gap-6 items-center justify-center">
          <p className="text-5xl font-bold text-center">
            Get paid to do what you love
          </p>
          <p className="text-center w-[90%] text-[1.3rem]">
            Create a unique Airbnb Experience for millions of guests.
          </p>
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1727297676509/original/dd948131-a986-425f-8e4b-1e67e47824fb.jpeg?im_w=1200"
            alt=""
          />
        </div>
        {/* text and slide image */}
        <div className="flex flex-col gap-4 items-center py-15">
          <p className="text-center text-[2.1rem] leading-9 font-semibold text-[#2c2c2c]">
            Bring the best of your city to life on Airbnb
          </p>
          <p className="text-center text-[1.3rem] leading-7 w-[90%] font-light text-[#585656]">
            Apply to join our marketplace of high-quality experiences led by
            locals like you.
          </p>
        </div>
      </div>
      {/* scroll auto element */}
      <div
        ref={sliderRef}
        className="flex flex-row gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide px-8 pb-6"
      >
        {/* first */}
        <div className="flex flex-col gap-4">
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745861147063/original/4646d399-96b6-49c2-808b-ec9a0645b5ab.jpeg?im_w=480"
            alt="yourspace"
            className="rounded-3xl h-90 min-w-78"
          />
          <div className="flex flex-col gap-1 items-center">
            <p className="text-[0.9rem] font-semibold text-center text-wrap text-[#383737] max-w-[70%]">
              Arnold leads horseback tours of Incan temples in Cusco
            </p>
          </div>
        </div>
        {/* second */}
        <div className="flex flex-col gap-4">
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745861194270/original/1f7ed0bb-e186-4eac-a8ea-ce389e984c3c.jpeg?im_w=480"
            alt="yourspace"
            className="rounded-3xl h-90 min-w-78"
          />
          <div className="flex flex-col gap-1 items-center">
            <p className="text-[0.9rem] font-semibold text-center text-wrap text-[#383737] max-w-[70%]">
              Ryan celebrates the art of car customisation in Los Angeles
            </p>
          </div>
        </div>
        {/* third */}
        <div className="flex flex-col gap-4">
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745861401581/original/c492e1f9-1061-436f-8723-f61b50a1f3f5.jpeg?im_w=480"
            alt="yourspace"
            className="rounded-3xl h-90 min-w-78"
          />
          <div className="flex flex-col gap-1 items-center">
            <p className="text-[0.9rem] font-semibold text-center text-wrap text-[#383737] max-w-[70%]">
              Alicia shares skate moves on the boardwalk in Venice Beach
            </p>
          </div>
        </div>
        {/* fourth */}
        <div className="flex flex-col gap-4">
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1747687113600/original/29862b00-ed79-4198-8063-0980d4575b9a.jpeg?im_w=480"
            alt="yourspace"
            className="rounded-3xl h-90 min-w-78"
          />
          <div className="flex flex-col gap-1 items-center">
            <p className="text-[0.9rem] font-semibold text-center text-wrap text-[#383737] max-w-[70%]">
              Ramen master Saburo crafts noodles and broth in Tokyo
            </p>
          </div>
        </div>
        {/* fifth */}
        <div className="flex flex-col gap-4">
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745861230168/original/7385b436-da13-4b8d-8340-32ffab0889ad.jpeg?im_w=480"
            alt="yourspace"
            className="rounded-3xl h-90 min-w-78"
          />
          <div className="flex flex-col gap-1 items-center">
            <p className="text-[0.9rem] font-semibold text-center text-wrap text-[#383737] max-w-[70%]">
              Olympian Carol hosts beach volleyball lessons in Rio
            </p>
          </div>
        </div>
        {/* sixth  */}
        <div className="flex flex-col gap-4">
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745861491031/original/57e548db-e1e2-45d7-a20e-6d0fa0492961.jpeg?im_w=480"
            alt="yourspace"
            className="rounded-3xl h-90 min-w-78"
          />
          <div className="flex flex-col gap-1 items-center">
            <p className="text-[0.9rem] font-semibold text-center text-wrap text-[#383737] max-w-[70%]">
              Conservator Daniela teaches fine art restoration in Rome
            </p>
          </div>
        </div>
      </div>
      {/* clickable picture scrolling */}
      <div className="px-5 pb-10 flex flex-row gap-6 items-center justify-center ">
        <div onClick={scrollPrev} className="p-2 rounded-[50%] bg-[#e62424]">
          <FaAngleLeft color="white" />
        </div>
        <div onClick={scrollNext} className="p-2 rounded-[50%] bg-[#e62424]">
          <FaAngleRight color="white" />
        </div>
      </div>

      {/* host one of a king  */}
      <div className="flex flex-col gap-8 px-5 pb-10 items-center" >
        <p className="text-3xl text-center font-semibold">Host one-of-a-kind experiences of all kinds</p>
        {/* first */}
        <div className="flex flex-row gap-4">
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745528846986/original/4aad46f0-88d1-44b1-816c-29378f1444d8.jpeg?im_w=480"
            alt="gateway"
            className="w-20"
          />
          <div>
            <p className="font-medium text-[1.1rem]">Show off your city</p>
            <p className="text-[1.05rem] text-[#787575]">Lead unique tours of landmarks, museums or cultural hotspots.</p>
          </div>
        </div>
        {/* second */}
        <div className="flex flex-row gap-4">
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745535635284/original/102623d5-53bb-4960-a772-b0dfce0a3a02.jpeg?im_w=480"
            alt="food"
            className="w-20"
          />
          <div>
            <p className="font-medium text-[1.1rem]">Share something tasty
</p>
            <p className="text-[1.05rem] text-[#787575]">Host cooking classes, food tours or dining experiences.</p>
          </div>
        </div>
        {/* third */}
        <div className="flex flex-row gap-4">
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745528893463/original/bb6ee7c6-91be-485d-b191-f8418be9af3b.jpeg?im_w=480"
            alt="gateway"
            className="w-20"
          />
          <div>
            <p className="font-medium text-[1.1rem]">
Lead an outdoor adventure</p>
            <p className="text-[1.05rem] text-[#787575]">Guide nature hikes, water sports or wildlife expeditions.</p>
          </div>
        </div>
        {/* fourth */}
        <div className="flex flex-row gap-4">
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745528910842/original/e7ea4624-bba0-4731-ac2c-db2beff6ef53.jpeg?im_w=480"
            alt="gateway"
            className="w-20"
          />
          <div>
            <p className="font-medium text-[1.1rem]">

Celebrate the arts
</p>
            <p className="text-[1.05rem] text-[#787575]">Explore galleries, shopping and fashion or run art workshops.</p>
          </div>
        </div>
        {/* fifth */}
        <div className="flex flex-row gap-4">
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745602356992/original/84853dac-6fe2-4161-8ec1-423e31903cd1.jpeg?im_w=480"
            alt="gateway"
            className="w-20"
          />
          <div>
            <p className="font-medium text-[1.1rem]">Teach fitness and self-care
</p>
            <p className="text-[1.05rem] text-[#787575]">Host workouts, wellness classes or beauty experiences.</p>
          </div>
        </div>
      </div>
      {/* Footer  */}
      <Footer />
      {/* bottom fixed button */}
      <div className="sticky bottom-0 backdrop-blur-sm w-full h-20 flex flex-col items-center justify-center align-middle ">
        <Link
          to="/login"
          className="bg-[#da1249] w-[90%] py-3 text-center text-[1.2rem] rounded-4xl text-white"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default AirbnbyourExprience;
