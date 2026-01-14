import React, { useState, useEffect } from "react";
import { FaAirbnb } from "react-icons/fa6";
import { CgMenu } from "react-icons/cg";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { Link, replace } from "react-router-dom";
import api from "../api/axios";
import { FaRegHeart, FaSuitcaseRolling, FaRegUserCircle } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function HeaderCommon() {
  const [Toggle, setToggle] = useState(false);
  const [LoggedIn, setLoggedIn] = useState(false);
  const [userFirstletter, setUserFirstLetter] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const navbarCalling = async () => {
      try {
        const response = await api.get("/api/navbar", {
          withCredentials: true,
        });

        const token = response.data.token;
        // console.log(token.email.charAt(0));

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
  }, []);

  // logout api calls

  const logout = async () => {
    try {
      const response = await api.get("/api/logout", { withCredentials: true });

      if (response.data.message === "Logged out successfully") {
        toast.success("Log Out successfully");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
        navigate("/", { replace: true });
      } else if (response.data.message === "User not found") {
        toast.error("User not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      onClick={() => {
        if (Toggle === true) {
          setToggle(false);
        }
      }}
    >
      <div className="hidden md:px-10 md:py-4 md:border-b-[1.1px] md:border-b-[#cfcece] md:flex md:flex-row md:items-center md:justify-between md:sticky md:top-0 z-100 md:bg-white">
        <Link to="/">
          <FaAirbnb size={50} color="red" />
        </Link>
        <div className="flex flex-row items-center justify-center gap-8">
          <Link to="/host">
            <div className="px-3 py-2 rounded-2xl hover:bg-[#ebebebdd] ">
              {LoggedIn ? (
                <p className="text-[1rem] font-medium">Switch to hosting</p>
              ) : (
                <p className="text-[1rem] font-medium">Become a Host</p>
              )}
            </div>
          </Link>
          {/* show the profile when the user loggged in */}
          {LoggedIn ? (
            <Link
              to="/profile"
              className="bg-gray-900 w-10 h-10  rounded-full flex flex-col justify-center items-center"
            >
              <p className="text-white text-2xl">{userFirstletter}</p>
            </Link>
          ) : (
            " "
          )}
          {/* hamburger sign */}
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
            <CgMenu size={25} color="black" />
          </div>
        </div>

        {/* show toggle data */}
        {Toggle ? (
          <div className="absolute top-23 right-16 bg-white  shadow-2xl w-60 py-3 rounded-2xl flex flex-col gap-2">
            {/* help center */}
            <div className={`${LoggedIn ? "block" : "hidden"}`}>
              {/* wishlist */}
              <Link
                to="/wishlist"
                className="flex flex-row gap-2 items-center justify-start hover:bg-[#f1f0f0] pl-4 py-2"
              >
                <FaRegHeart size={17} />
                <p className="text-[1rem]">WishList</p>
              </Link>

              {/*trips */}
              <Link
                to="/trips"
                className="hover:bg-[#f1f0f0] flex flex-row items-center justify-start pl-4 py-2 gap-2"
              >
                <FaSuitcaseRolling size={17} />
                <p className="text-[1.1rem] ">Trips</p>
              </Link>

              {/* messages */}
              <Link
                to="/messages"
                className="hover:bg-[#f1f0f0] flex flex-row items-center justify-start pl-4 py-2 gap-2"
              >
                <FaRegMessage size={17} />
                <p className="text-[1.1rem]">Messages</p>
              </Link>

              {/* profile */}
              <Link
                to="/profile"
                className="hover:bg-[#f1f0f0] flex flex-row items-center justify-start pl-4 py-2 gap-2"
              >
                <FaRegUserCircle size={17} />
                <p className="text-[1.1rem]">Profile</p>
              </Link>
              {/* account setting */}
              <Link
                to="/accountSetting"
                className="hover:bg-[#f1f0f0] flex flex-row items-center justify-start pl-4 py-2 gap-2"
              >
                <IoSettingsOutline size={17} />
                <p className="text-[1.1rem]">Account Setting</p>
              </Link>
            </div>
            <div>
              <Link
                to="/helpcenter"
                className="flex flex-row gap-2 items-center justify-start hover:bg-[#f1f0f0] pl-4 py-2"
              >
                <RxQuestionMarkCircled size={20} />
                <p className="text-[1rem]">Help Center</p>
              </Link>
              <div className="border-[0.2px] border-[#dfdcdc] "></div>
              {/* become a host */}
              <Link to="/host">
                {LoggedIn ? (
                  <p className="text-[1.1rem] pl-4 py-2 hover:bg-[#f1f0f0]">
                    Switch to Hosting
                  </p>
                ) : (
                  <p className="text-[1.1rem] pl-4 py-2 hover:bg-[#f1f0f0]">
                    Become a host
                  </p>
                )}
              </Link>
              <div className="border-[0.2px] border-[#dfdcdc] "></div>
              {/* Refer a host */}
              <Link to="/refer-co-host">
                <p className="text-[1.1rem] pl-4 py-2 hover:bg-[#f1f0f0]">
                  Refer a host
                </p>
              </Link>
              <div className="border-[0.2px] border-[#dfdcdc] "></div>
              {/* find a co host */}
              <Link to="/findcohost">
                <p className="text-[1.1rem] pl-4 py-2 hover:bg-[#f1f0f0]">
                  Find a co-host
                </p>
              </Link>
              <div className="border-[0.2px] border-[#dfdcdc] "></div>
              {/* login or sign up  */}
              <Link
                to="/login"
                className={`hover:bg-[#f1f0f0] ${
                  LoggedIn ? "hidden" : "block"
                }`}
              >
                <p className="text-[1.1rem] pl-4 py-2">Login or signup</p>
              </Link>
              {/* logout show when the user is logged in  */}
              <div
                className={`hover:bg-[#f1f0f0] cursor-pointer ${
                  LoggedIn ? "block" : "hidden"
                }`}
                onClick={logout}
              >
                <p className="text-[1.1rem] pl-4 py-2">Log Out</p>
              </div>
            </div>
          </div>
        ) : (
          " "
        )}
      </div>
    </div>
  );
}

export default HeaderCommon;
