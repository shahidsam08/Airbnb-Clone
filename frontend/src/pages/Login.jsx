import React from "react";
import FooterBottom from "../components/FooterBottom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiFacebook } from "react-icons/si";

function Login() {
  return (
    <div>
      <div>
        <div>
          <p className="text-[1.1rem] font-bold text-center py-5 border-b-[0.2px] border-b-[#dedcdc]">
            Log in or sign up
          </p>
        </div>
        {/* welcome to airbnb and country region , phone number and other login option. */}
        {/* welcom to airbnb */}
        <form className="px-5 flex flex-col gap-5 py-10">
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
            <input className="w-[full]  text-[1.2rem] py-4 px-2 outline-black outline-inset-2 focus:rounded-[0.6rem] border-t-white" type="text" name="" id="" placeholder="Phone number" required />
            
          </div>
          <p className="text-[0.8rem] text-[#535151]">We’ll call or text you to confirm your number. Standard message and data rates apply. <span className="underline font-bold">Privacy Policy</span> </p>
          <button type="submit" className="bg-[#da1247eb] text-white text-[1.2rem] py-3 rounded-[0.4rem]">Continue</button>
        </form>
        {/* option to login  : facebook , google, apple, email*/}
        <div className="px-5 flex flex-col gap-5 py-10">
          {/* continue with google */}
          <div className="flex flex-row items-center gap-10 px-8 py-4 w-full border-[1.6px] border-[#202020] rounded-[0.6rem]">
            <FcGoogle size={25}/>
            <p className="font-medium">Continue with Google</p>
          </div>
          {/* continue with apple */}
          <div className="flex flex-row items-center gap-10 px-8 py-4 w-full border-[1.6px] border-[#202020] rounded-[0.6rem]">
            <FaApple size={25}/>
            <p className="font-medium">Continue with Apple</p>
          </div>
          {/* continue with email */}
          <div className="flex flex-row items-center gap-10 px-8 py-4 w-full border-[1.6px] border-[#202020] rounded-[0.6rem]">
            <MdOutlineMailOutline size={25}/>
            <p className="font-medium">Continue with email</p>
          </div>
          {/* continue with facebook */}
          <div className="flex flex-row items-center gap-10 px-8 py-4 w-full border-[1.6px] border-[#202020] rounded-[0.6rem]">
            <SiFacebook color="#1877F2" size={25}/>
            <p className="font-medium">Continue with Facebook</p>
          </div>
        </div>
        {/* need help */}
        <div className="w-full pb-20 flex items-center justify-center">
          <p className="underline font-medium hover:bg-[#f0efef94] px-4 py-3 rounded-4xl cursor-pointer">Need help?</p>
        </div>
        {/* fixed footer */}
        <div className="border-t-[0.1px] border-[#dedcdc] backdrop-blur-md sticky w-full bottom-0">
          <FooterBottom />
        </div>
      </div>
    </div>
  );
}

export default Login;

// login page : Auth page
