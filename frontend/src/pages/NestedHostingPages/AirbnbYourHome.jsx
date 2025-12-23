import React, { useState } from "react";
import Footer from "../../components/Footer.jsx";
import { FaAirbnb } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { HiOutlineHome } from "react-icons/hi2";
import { CiStopwatch } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { GoCheck } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import Slider from '../../components/Slider.jsx'

function AirbnbYourHome() {
  const [First, setFirst] = useState(false);
  const [Second, setSecond] = useState(false);
  const[Third , setThird] = useState(false);
  return (
    <div>
      <div className="flex flex-col gap-10 px-5 py-10">
        {/* airbnb logo not sticky or fixed. */}
        <div className="w-fit">
          <Link to="/">
            <FaAirbnb size={45} color="red" />
          </Link>
        </div>

        {/* price changes when you select the day, and also show map of area */}
        <div className="flex flex-col gap-4 items-center justify-center">
          {/* slider */}
          <div>
            <Slider />
          </div>
          
          
          
        </div>
        {/* it easy to list your home on airbnb */}
        <div className="flex flex-col gap-6">
          <p className="text-4xl text-center font-bold p-2">
            It’s easy to list your home on Airbnb
          </p>
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1727297676509/original/dd948131-a986-425f-8e4b-1e67e47824fb.jpeg?im_w=1200"
            alt="aboutplace"
          />
        </div>
        {/* create listing for your place */}
        <div className="w-[90%] flex flex-col gap-6">
          <div className="flex flex-row gap-4 items-center ">
            {/* first */}
            <div className=" bg-[#eeebeb] w-fit p-2 rounded-[0.6rem]">
              <HiOutlineHome size={28} />
            </div>
            <p className="text-[1.12rem] leading-6 font-light text-[#2f2e2e]">
              Create a listing for your place in just a few steps
            </p>
          </div>
          {/* second  */}
          <div className="flex flex-row gap-4 items-center ">
            <div className=" bg-[#eeebeb] w-fit p-2 rounded-[0.6rem]">
              <CiStopwatch size={28} />
            </div>
            <p className="text-[1.12rem] leading-6 font-light text-[#2f2e2e]">
              Go at your own pace, and make changes whenever
            </p>
          </div>
          {/* third */}
          <div className="flex flex-row gap-4 items-center ">
            <div className=" bg-[#eeebeb] w-fit p-2 rounded-[0.6rem]">
              <BiSupport size={28} />
            </div>
            <p className="text-[1.12rem] leading-6 font-light text-[#2f2e2e]">
              Get 1:1 support from experienced hosts at any time
            </p>
          </div>
        </div>
        {/* aircover for hosts */}
        <div className="flex flex-col gap-5 items-center pt-9">
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1727211098415/original/127d7106-4f3e-4c9b-aff4-fc109f08e574.png?im_w=720"
            alt="aircoverforhosts"
            width={140}
          />
          <p className="text-center text-4xl font-bold">
            However you host, you’re protected
          </p>
          <p className="text-center w-[80%] text-[1.4rem] leading-7 font-light text-[#6c6b6b]">
            Top-to-bottom protection, included every time you host your home on
            Airbnb.
          </p>
        </div>
        {/* Learn about air cover and their list type content. */}
        <div className="flex flex-col gap-6">
          {/* first */}
          <div className="flex flex-row items-center justify-between align-middle">
            <p
              className="text-[1.1rem] text-light
             text-[#484848]"
            >
              Up to $3m USD damage protection
            </p>
            <div>
              <GoCheck color="green" size={30} />
            </div>
          </div>
          <div className="border-b-[0.8px] border-[#747373]"></div>
          {/* second */}
          <div className="flex flex-row items-center justify-between align-middle">
            <p
              className="text-[1.1rem] text-light
             text-[#484848]"
            >
              Up to $1m USD liability insurance
            </p>
            <div>
              <GoCheck color="green" size={30} />
            </div>
          </div>
          <div className="border-b-[0.8px] border-[#747373]"></div>
          {/* third */}
          <div className="flex flex-row items-center justify-between align-middle">
            <p
              className="text-[1.1rem] text-light
             text-[#484848]"
            >
              24-hour safety line
            </p>
            <div>
              <GoCheck color="green" size={30} />
            </div>
          </div>
          {/* learn about the air cover */}
          <div className="w-full text-center bg-black px-5 py-3 mt-8 rounded-4xl ">
            <Link to="/aircover" className="text-[1.1rem] text-white">
              Learn about the AirCover
            </Link>
          </div>
        </div>
        {/*host damage protection reimbursment. */}
        <div>
          <p className="text-[0.97rem] text-center text-[#666565]">
            Host Damage Protection reimburses for certain guest damages during
            Airbnb stays. It’s not insurance and may apply if guests don’t pay.
            Liability insurance is provided by 3rd parties.{" "}
            <span className="font-medium underline hover:cursor-pointer">
              Check details and exclusions.
            </span>
          </p>
        </div>
        {/* All the tools you need to host App link ( all in one) */}
        <div className="flex flex-col gap-8 mt-10">
          <p className="text-center text-[2.1rem] leading-8 font-semibold">
            All the tools you need to host, all in one app
          </p>

          <div className="flex flex-row gap-4 overflow-x-auto whitespace-nowrap">
            <div className="flex flex-col gap-4">
              <img
                src="https://a0.muscache.com/im/pictures/canvas/Canvas-1729549296719/original/6f1fe6c5-64e0-4a0c-ae23-4f82b3bed20f.jpeg?im_w=960"
                alt="yourspace"
                className="rounded-3xl"
              />
              <div className="flex flex-col gap-1">
                <p className="text-[1.2rem] font-semibold">Listing editor</p>
                <p className="text-[1.1rem] text-[#686666] ">
                  Showcase every detail of your home
                </p>
              </div>
            </div>
            {/* second */}
            <div className="flex flex-col gap-4">
              <img
                src="https://a0.muscache.com/im/pictures/canvas/Canvas-1729549657273/original/ab3b6e70-8ef5-43d1-8162-13f4de3aaa17.jpeg?im_w=960"
                alt="yourspace"
                className="rounded-3xl"
              />
              <div className="flex flex-col gap-1">
                <p className="text-[1.2rem] font-semibold">Calendar</p>
                <p className="text-[1.1rem] text-[#686666] ">
                  Manage your availability and pricing
                </p>
              </div>
            </div>
            {/* third */}
            <div className="flex flex-col gap-4">
              <img
                src="https://a0.muscache.com/im/pictures/canvas/Canvas-1729549951096/original/4deac059-008a-499a-aeca-c22224bf6b6f.jpeg?im_w=960"
                alt="yourspace"
                className="rounded-3xl"
              />
              <div className="flex flex-col gap-1">
                <p className="text-[1.2rem] font-semibold">Messages</p>
                <p className="text-[1.1rem] text-[#686666] ">
                  Quickly message guests and support
                </p>
              </div>
            </div>
          </div>
          <div className="w-full text-center bg-black px-5 py-3 mt-8 rounded-4xl ">
            <a
              href="https://play.google.com/store/apps/details?id=com.airbnb.android&hl=en"
              target="blank"
              className="text-[1.1rem] text-white"
            >
              Download the Airbnb App
            </a>
          </div>
        </div>
      </div>
      {/* your question answered. */}
      <div className="bg-gray-100 px-6 pt-15 flex flex-col gap-8">
        <p className="text-center text-4xl font-bold text-gray-800">
          Your questions, answered
        </p>
        {/* clicking answered */}
        <div>
          <div
            className="flex flex-row items-center justify-between pb-8 hover:cursor-pointer"
            onClick={() => {
              if (First === false) {
                setFirst(true);
              } else {
                setFirst(false);
              }
            }}
          >
            <p className="text-[1.4rem] text-[#484646]">Top questions</p>
            <div>
              {First ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
            </div>
          </div>
          {/* show the data  */}
          {First ? (
            <div className="flex flex-col gap-5 pt-10 pb-10">
              <div className="flex flex-col gap-2">
                <p className="text-[1.2rem] font-bold text-[#797676]">Is my place right for Airbnb?</p>
                <p className="text-[1.1rem] text-[#797676]">
                  Airbnb guests are interested in all kinds of places – spare
                  rooms, flats, houses, holiday homes, even treehouses.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[1.2rem] font-bold text-[#797676]">Do I have to host all the time?</p>
                <p className="text-[1.1rem] text-[#797676]">
                  No – you control your calendar. You can host once a year, a few nights a month or more often.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[1.2rem] font-bold text-[#797676]">What are Airbnb’s fees?</p>
                <p className="text-[1.1rem] text-[#797676]">
                  It’s free to create a listing, and Airbnb typically collects a service fee of 3% of the reservation subtotal once you get paid. In many areas, Airbnb automatically collects and pays sales and tourism taxes on your behalf. <span className="underline font-medium">Learn more about fees.</span> 
                </p>
              </div>
            </div>
          ) : (
            " "
          )}
          <div className="border-b-[0.5px] border-[#c1c1c1] mb-8"></div>
          {/* second */}
          <div
            className="flex flex-row items-center justify-between pb-8 hover:cursor-pointer"
            onClick={() => {
              if (Second === false) {
                setSecond(true);
              } else {
                setSecond(false);
              }
            }}
          >
            <p className="text-[1.4rem] text-[#484646]">Hosting basics</p>
            <div>
              {Second ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
            </div>
          </div>
          {/* show the data  */}
          {Second ? (
            <div className="flex flex-col gap-5 pt-10 pb-10">
              <div className="flex flex-col gap-2">
                <p className="text-[1.2rem] font-bold text-[#797676]">How do I get started?</p>
                <p className="text-[1.1rem] text-[#797676]">
                  You can create a listing in just a few steps, all at your own pace. Start by telling us about your home, take some photos and add details about what makes it unique. <span className="underline font-medium">Start your listing.</span>  
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[1.2rem] font-bold text-[#797676]">How do I get my home ready for guests?</p>
                <p className="text-[1.1rem] text-[#797676]">
                  Make sure that your home is clean, clutter-free and that everything is working properly. Items like fresh linen and stocked toiletries help create a comfortable and inviting place to stay. <span className="underline font-medium">Check out our guide to getting your home ready.</span> 

                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[1.2rem] font-bold text-[#797676]">How am I protected when I host?</p>
                <p className="text-[1.1rem] text-[#797676]">
                  AirCover for Hosts provides top-to-bottom protection every time you host your home on Airbnb. <span className="underline font-medium">Learn more about AirCover for Hosts and what’s included.</span> 
                </p>
              </div>
            </div>
          ) : (
            " "
          )}
          <div className="border-b-[0.5px] border-[#c1c1c1] mb-8"></div>
          {/* third one */}
          <div
            className="flex flex-row items-center justify-between pb-8 hover:cursor-pointer"
            onClick={() => {
              if (Third === false) {
                setThird(true);
              } else {
                setThird(false);
              }
            }}
          >
            <p className="text-[1.4rem] text-[#484646]">Policy & regulations</p>
            <div>
              {Third ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
            </div>
          </div>
          {/* show the data  */}
          {Third ? (
            <div className="flex flex-col gap-5 pt-10 pb-10">
              <div className="flex flex-col gap-2">
                <p className="text-[1.2rem] font-bold text-[#797676]">Are there any regulations that apply in my city?</p>
                <p className="text-[1.1rem] text-[#797676]">
                  Some areas have laws and regulations for hosting your home. It’s important to familiarise yourself with any laws that may apply to your location. Also, depending on where you live, you may need to check with your HOA, read your lease agreement or notify your landlord or neighbours about your plans to host on Airbnb.<span className="underline font-medium">Learn more about responsible hosting.</span>  
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[1.2rem] font-bold text-[#797676]">What if I have other questions?</p>
                <p className="text-[1.1rem] text-[#797676]">
                  Local hosts are a great source for information and insights. We can connect you with an experienced Airbnb host in your area who may be able to answer additional questions. <span className="underline font-medium">Ask a host.</span> 

                </p>
              </div>
            </div>
          ) : (
            " "
          )}
          <div className="border-b-[0.5px] border-[#c1c1c1] mb-8"></div>
        </div>
        {/* still have a question  */}
        <div className="flex flex-col gap-5 items-center justify-center">
          <p className="text-2xl font-bold">Still have questions?</p>
          <p className="text-[1.07rem] text-center text-gray-500">Get answers from an experienced local host.</p>
          <button type="button" className="bg-[#222121] w-full py-3 rounded-4xl text-[#d3d0d0] text-[1.2rem]">Ask a Host</button>
        </div>
      </div>
      {/* footer part */}
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

export default AirbnbYourHome;
