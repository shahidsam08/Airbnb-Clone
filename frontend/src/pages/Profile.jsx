import React, { useState, useEffect, useReducer } from "react";
import Footer from "../components/Footer.jsx";
import FooterBottom from "../components/FooterBottom.jsx";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { LiaHandPaperSolid } from "react-icons/lia";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { PiUserCircleCheckThin } from "react-icons/pi";
import { IoManOutline } from "react-icons/io5";
import { SlDocs } from "react-icons/sl";
import { SlLogout } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";
import api from "../api/axios.js";

const reducer = (state, action) => {
  switch (action.type) {
    case "ABOUTME":
      return "aboutme";
    case "PASTTRIPS":
      return "pasttrips";
    case "CONNECTIONS":
      return "connections";
    default:
      return "aboutme";
  }
};

function Profile() {
  const [stateValue, dispatch] = useReducer(reducer, "aboutme");
  const [userFirstLetter, setUserFirstLetter] = useState("");
  const [username, setUserName] = useState("");
  const [userType, setUserType] = useState("");
  const [loggedin, setLoggedIn] = useState(false);
  useEffect(() => {
    const navbarCalling = async () => {
      try {
        const response = await api.get("/api/navbar", {
          withCredentials: true,
        });

        const token = response.data.token;
        console.log(token.email.charAt(0));

        const user = response.data.userdata;
        if (user.role === "user") {
          setUserType("guest");
        } else {
          setUserType("User");
        }

        setUserName(user.username.toUpperCase());
        setUserFirstLetter(token.email.charAt(0).toUpperCase());

        if (response.data.message === "User loggged In") {
          setLoggedIn(true);
        } else if (response.data.message === "Unauthorized") {
          setLoggedIn(false);
        } else if (response.data.message === "Token expired") {
          setLoggedIn(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    navbarCalling();
  });
  return (
    <div>
      {/* show this block when the screen size is medium and small */}
      <div className="px-5 py-8 flex flex-col gap-4 md:px-40 lg:hidden">
        {/* notification  */}
        <Link
          to="/notification"
          className="flex flex-row items-center justify-end"
        >
          <div className="p-2 rounded-full bg-zinc-100 w-fit ">
            <IoMdNotificationsOutline size={30} />
          </div>
        </Link>
        {/* profile */}
        <p className="text-3xl font-bold">Profile</p>
        {/* User box */}
        <div className="w-full h-70 bg-white shadow-2xl rounded-2xl flex flex-col items-center justify-center gap-3">
          {/* user link */}
          <div className="w-25 h-25 rounded-full bg-zinc-900 flex flex-row items-center justify-center">
            <p className="text-white text-6xl font-bold">{userFirstLetter}</p>
          </div>
          {/* user name and usertype */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl font-medium">{username}</p>
            <p>{userType}</p>
          </div>
        </div>
        {/* past trips and connections */}
        <div className="flex flex-row items-center justify-around gap-3">
          {/* past trips */}
          <div className="flex flex-col gap-2 items-center justify-center bg-white py-2 shadow-2xl rounded-2xl">
            <img
              src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-UserProfile/original/797c1df2-a40c-4d93-9550-ca5b213cd01b.png?im_w=240"
              alt="pasttrips"
              width={150}
            />
            <p>Past Trips</p>
          </div>
          {/* connections */}
          <div className="flex flex-col gap-2 items-center justify-center bg-white py-2 shadow-2xl rounded-2xl">
            <img
              src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-UserProfile/original/ed28537a-fc3c-4253-bb89-a6d927df7e50.png?im_w=240"
              alt="pasttrips"
              width={150}
            />
            <p>Connections</p>
          </div>
        </div>
        {/* become a host  */}
        <div className="flex flex-row bg-white shadow-2xl p-2 rounded-2xl">
          <img
            src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-UserProfile/original/5347d650-16de-4f5a-a38e-79edc988befa.png?im_w=240"
            alt="user"
            width={70}
          />
          <div>
            <p className="text-2xl">Become a host</p>
            <p>It's easy to start hosting and earn extra income.</p>
          </div>
        </div>
        {/* account setting , view profile, privacy, get help */}
        <div className="py-10 flex flex-col gap-6">
          {/* account settting */}
          <Link
            to="/accountsetting"
            className="flex flex-row items-center justify-between"
          >
            <div className="flex flex-row gap-4 items-center">
              <IoSettingsOutline size={30} />
              <p className="text-[1.2rem]">Account Setting</p>
            </div>
            <FaAngleRight size={20} />
          </Link>
          {/* view profile */}
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-4 items-center">
              <CiUser size={30} />
              <p className="text-[1.2rem]">View Profile</p>
            </div>
            <FaAngleRight size={20} />
          </div>
          {/* privacy */}
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-4 items-center">
              <LiaHandPaperSolid size={30} />
              <p className="text-[1.2rem]">Privacy</p>
            </div>
            <FaAngleRight size={20} />
          </div>
          {/* get help */}
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-4 items-center">
              <IoMdHelpCircleOutline size={30} />
              <p className="text-[1.2rem]">Get Help</p>
            </div>
            <FaAngleRight size={20} />
          </div>
          {/* border */}
          <div className="w-full border-zinc-400 border-[0.5px]"></div>
          {/* Refer a host */}
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-4 items-center">
              <PiUserCircleCheckThin size={30} />
              <p className="text-[1.2rem]">Refer a host</p>
            </div>
            <FaAngleRight size={20} />
          </div>
          {/* find a co host */}
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-4 items-center">
              <IoManOutline size={30} />
              <p className="text-[1.2rem]">Find a co-host</p>
            </div>
            <FaAngleRight size={20} />
          </div>
          {/* Legal */}
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-4 items-center">
              <SlDocs size={30} />
              <p className="text-[1.2rem]">Legal</p>
            </div>
            <FaAngleRight size={20} />
          </div>
          {/* Logout */}
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-4 items-center">
              <SlLogout size={30} />
              <p className="text-[1.2rem]">Log Out</p>
            </div>
            <FaAngleRight size={20} />
          </div>
        </div>
      </div>

      {/* for large screen show this block */}
      <div className="hidden lg:block">
        <div className="flex flex-row items-start justify-center py-20">
          <div className="flex flex-col gap-7 w-[30%]">
            <p className="text-4xl font-bold text-start">Profile</p>
            {/* about me */}
            <div
              className={`flex flex-row gap-2 items-center justify-start w-80 px-4 py-4 rounded-2xl cursor-pointer ${
                stateValue === "aboutme" ? "bg-[#e4e4e4]" : ""
              }`}
              onClick={() => dispatch({ type: "ABOUTME" })}
            >
              <div className="w-15 pl-3">
                <p className="bg-gray-900 w-3 h-3 p-4 rounded-full flex flex-row items-center justify-center text-white">
                  {userFirstLetter}
                </p>
              </div>
              <p className="text-[1.2rem] text-zinc-700 font-medium text-start">
                About me
              </p>
            </div>
            {/* past trips */}
            <div
              className={`flex flex-row gap-2 items-center justify-start w-80 px-4 py-4 rounded-2xl cursor-pointer ${
                stateValue === "pasttrips" ? "bg-[#e4e4e4]" : ""
              }`}
              onClick={() => dispatch({ type: "PASTTRIPS" })}
            >
              <div className="w-15">
                <img
                  src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-UserProfile/original/797c1df2-a40c-4d93-9550-ca5b213cd01b.png?im_w=240"
                  alt="pasttrips"
                  width={50}
                />
              </div>
              <p className="text-[1.2rem] text-zinc-700 font-medium">
                Past trips
              </p>
            </div>
            {/* connections */}
            <div
              className={`flex flex-row gap-2 items-center justify-start w-80 px-4 py-4 rounded-2xl cursor-pointer ${
                stateValue === "connections" ? "bg-[#e4e4e4]" : ""
              }`}
              onClick={() => dispatch({ type: "CONNECTIONS" })}
            >
              <div className="w-15">
                <img
                  src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-UserProfile/original/3009d40c-3aa7-498b-a887-ba641d3bbcc6.png?im_w=240"
                  alt="pasttrips"
                  width={40}
                />
              </div>
              <p className="text-[1.2rem] text-zinc-700 font-medium">
                Connections
              </p>
            </div>
          </div>
          {/* border */}
          <div className="border-l-[1.2px] border-zinc-300 h-220"></div>
          {/* show this block when the statevalue is true */}
          <div className="w-[50%]">
            {stateValue === "aboutme" ? (
              <div className="flex flex-col gap-2 items-center justify-center">
                <div className="w-[90%] flex flex-col gap-10 items-start ">
                  <div className="flex flex-row gap-4">
                    <p className="text-3xl font-medium text-zinc-700">About me</p>
                    <p className="bg-[#e7e6e6] w-fit px-5 py-1 rounded-[0.7rem] text-centerx self-center">Edit</p>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-6 pb-20">
                    {/* user box */}
                    <div className="w-[60%] h-70 bg-white shadow-2xl rounded-2xl flex flex-col items-center justify-center gap-3">
                      {/* user link */}
                      <div className="w-25 h-25 rounded-full bg-zinc-900 flex flex-row items-center justify-center">
                        <p className="text-white text-4xl font-bold">
                          {userFirstLetter}
                        </p>
                      </div>
                      {/* user name and usertype */}
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-3xl font-medium">{username}</p>
                        <p>{userType}</p>
                      </div>
                    </div>
                    {/* complete your profile */}
                    <div className="w-[40%] flex flex-col gap-4">
                      <p className="text-2xl font-medium ">Complete your profile</p>
                      <p className="text-[0.98rem] text-[#818181]">
                        Your Airbnb profile is an important part of every
                        reservation. Create yours to help other hosts and guests
                        get to know you.
                      </p>
                      <Link to="/editprofile" className="bg-[#cc2551] w-[70%] p-3 rounded-2xl">
                        <p className="text-white text-2xl text-center">Get Started</p>
                      </Link>
                    </div>
                  </div>
                  {/* border */}
                  <div className="border-[0.5px] w-full border-[#c1c1c1]">

                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {stateValue === "pasttrips" ? <p>pasttrips </p> : ""}
            {stateValue === "connections" ? <p>connections </p> : ""}
          </div>
        </div>
      </div>
      {/* it's show on when the screen is small */}
      <div className="sticky bottom-0">
        <FooterBottom />
      </div>
      {/* show when the screen is big */}
      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
