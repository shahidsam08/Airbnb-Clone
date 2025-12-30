import React, { useState } from "react";
import { Link } from "react-router-dom";
import FooterBottom from "../components/FooterBottom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiFacebook } from "react-icons/si";
import Footer from "../components/Footer.jsx";
import { FaAirbnb } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxQuestionMarkCircled } from "react-icons/rx";

function Login() {
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
        {/* header only after medium size screen and large screen size */}
        <div className="hidden md:px-10 md:py-4 md:border-b-[1.1px] md:border-b-[#cfcece] md:flex md:flex-row md:items-center md:justify-between md:sticky md:top-0 md:bg-white">
          <FaAirbnb size={50} color="red" />
          <div className="flex flex-row items-center justify-center gap-8">
            <Link to="/host">
              <div className="px-3 py-2 rounded-2xl hover:bg-[#ebebebdd] text-[1.2rem]">Become a host</div>
            </Link>
            <div
              className="md:p-2 md:bg-[#efefef] md:w-fit md:rounded-4xl md:flex md:items-center md:justify-center relative cursor-pointer"
              onClick={() => {
                if (Toggle === false) {
                  setToggle(true);
                } else {
                  setToggle(false);
                }
              }}
            >
              <RxHamburgerMenu size={25} color="black" />
            </div>
          </div>

          {/* show toggle data */}
          {Toggle ? (
            <div className="absolute top-23 right-16 bg-white  shadow-2xl w-60 py-3 rounded-2xl flex flex-col gap-2">
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

        <div className="md:flex md:items-center md:justify-center md:my-20">
          <div className="md:flex md:flex-col md:w-[70%] lg:w-[65%] md:border-[1.1px] md:border-[#c1c1c1] md:rounded-2xl md:items-center ">
            <div>
              <p className="text-[1.1rem] font-bold text-center py-5 border-b-[0.2px] md:border-b-[#ef1212]">
                Log in or sign up
              </p>
            </div>
            {/* welcome to airbnb and country region , phone number and other login option. */}
            {/* welcom to airbnb */}
            <form className="px-5 flex flex-col gap-5 py-10 md:w-[80%]">
              <p className="text-2xl font-medium">Welcome to Airbnb</p>
              <div className="flex flex-col border-[1.4px] border-[#686767] rounded-[0.6rem] ">
                <select className="w-[full] border-b-[1.4px] text-[1.2rem] py-4 px-2 outline-black outline-inset-2 focus:rounded-[0.6rem]">
                  <option value="+91">India(+91)</option>
                  <option value="+966">Saudi Arabia(+966)</option>
                  <option value="USA(+1)">USA(+1)</option>
                  <option value="United Arab Emirated(+973)">
                    United Arab Emirated(+973)
                  </option>
                  <option value="France(+33)">France(+33)</option>
                  <option value="Japan(+81)">Japan(+81)</option>
                  <option value="Thailand(+66)">Thailand(+66)</option>
                </select>
                <input
                  className="w-[full]  text-[1.2rem] py-4 px-2 outline-black outline-inset-2 focus:rounded-[0.6rem] border-t-white"
                  type="text"
                  name=""
                  id=""
                  placeholder="Phone number"
                  required
                />
              </div>
              <p className="text-[0.8rem] text-[#535151]">
                We’ll call or text you to confirm your number. Standard message
                and data rates apply.{" "}
                <span className="underline font-bold">Privacy Policy</span>{" "}
              </p>
              <button
                type="submit"
                className="bg-[#da1247eb] text-white text-[1.2rem] py-3 rounded-[0.4rem]"
              >
                Continue
              </button>
            </form>
            {/* option to login  : facebook , google, apple, email*/}
            <div className="px-5 flex flex-col gap-5 py-10 md:w-[80%]">
              {/* continue with google */}
              <div className="flex flex-row items-center gap-10 px-8 py-4 w-full border-[1.6px] border-[#202020] rounded-[0.6rem] cursor-pointer">
                <FcGoogle size={25} />
                <p className="font-medium">Continue with Google</p>
              </div>
              {/* continue with apple */}
              <div className="flex flex-row items-center gap-10 px-8 py-4 w-full border-[1.6px] border-[#202020] rounded-[0.6rem] cursor-pointer">
                <FaApple size={25} />
                <p className="font-medium">Continue with Apple</p>
              </div>
              {/* continue with email */}
              <div className="flex flex-row items-center gap-10 px-8 py-4 w-full border-[1.6px] border-[#202020] rounded-[0.6rem] cursor-pointer">
                <MdOutlineMailOutline size={25} />
                <p className="font-medium">Continue with email</p>
              </div>
              {/* continue with facebook */}
              <div className="flex flex-row items-center gap-10 px-8 py-4 w-full border-[1.6px] border-[#202020] rounded-[0.6rem] cursor-pointer">
                <SiFacebook color="#1877F2" size={25} />
                <p className="font-medium">Continue with Facebook</p>
              </div>
            </div>
            {/* need help */}
            <div className="w-full pb-20 flex items-center justify-center md:hidden">
              <p className="underline font-medium hover:bg-[#f0efef94] px-4 py-3 rounded-4xl cursor-pointer">
                Need help?
              </p>
            </div>
          </div>
        </div>

        {/* fixed footer */}
        <div className="border-t-[0.1px] border-[#dedcdc] backdrop-blur-md sticky w-full bottom-0 md:hidden">
          <FooterBottom />
        </div>
        <div className="hidden md:block">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Login;

// login page : Auth page
