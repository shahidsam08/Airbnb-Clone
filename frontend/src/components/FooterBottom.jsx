import React, { useState, useContext, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUserCircle, FaRegHeart, FaSuitcaseRolling } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaRegMessage } from "react-icons/fa6";
import AuthContext from "../context/AuthContext";
import { PiImageSquareThin } from "react-icons/pi";

// reducer method

function FooterBottom() {
  // const [loggedIn, setLoggedIn] = useState(null);

  const { isAuthenticated, loading, setIsAuthenticated, user } =
    useContext(AuthContext);

  return (
    <div className="sticky bottom-0">
      {!isAuthenticated && (
        <div
          className={`flex flex-row justify-center align-middle items-center p-4 gap-8 backdrop-blur-md`}
        >
          {/* explore home page. */}
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-[#da1249]" : "")}
          >
            <div className="flex flex-col align-middle justify-center items-center">
              <IoSearchSharp size={30} />
              <p className="text-[0.8rem]">Explore</p>
            </div>
          </NavLink>
          {/* show the wishlist */}
          <NavLink
            to="/wishlist"
            className={({ isActive }) => (isActive ? "text-[#da1249]" : "")}
          >
            <div className="flex flex-col align-middle justify-center items-center">
              <FaRegHeart size={30} />
              <p className="text-[0.8rem]">Wishlist</p>
            </div>
          </NavLink>
          {/* Login page */}
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "text-[#da1249]" : "")}
          >
            <div className="flex flex-col align-middle justify-center items-center">
              <FaRegUserCircle size={30} />
              <p className="text-[0.8rem]">Login</p>
            </div>
          </NavLink>
        </div>
      )}

      {/* this block shown when the user logged in, if logged out the upperblock will run */}

      {isAuthenticated && (
        <div
          className={`flex flex-row justify-around align-middle items-center p-4 backdrop-blur-md md:hidden`}
        >
          {/* explore home page. */}
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-[#da1249]" : "")}
          >
            <div className="flex flex-col align-middle justify-center items-center">
              <IoSearchSharp size={30} />
              <p className="text-[0.8rem]">Explore</p>
            </div>
          </NavLink>

          {/* show the wishlist */}
          <NavLink
            to="/wishlist"
            className={({ isActive }) => (isActive ? "text-[#da1249]" : "")}
          >
            <div className="flex flex-col align-middle justify-center items-center">
              <FaRegHeart size={30} />
              <p className="text-[0.8rem]">Wishlist</p>
            </div>
          </NavLink>
          {/* Trips */}
          <NavLink
            to="/trips"
            className={({ isActive }) => (isActive ? "text-[#da1249]" : "")}
          >
            <div className="flex flex-col align-middle justify-center items-center">
              <FaSuitcaseRolling size={30} />
              <p className="text-[0.8rem]">Trips</p>
            </div>
          </NavLink>
          {/* Messages */}
          <NavLink
            to="/messages"
            className={({ isActive }) => (isActive ? "text-[#da1249]" : "")}
          >
            <div className="flex flex-col align-middle justify-center items-center">
              <FaRegMessage size={30} />
              <p className="text-[0.8rem]">Messages</p>
            </div>
          </NavLink>
          {/* Login page */}
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "text-[#da1249]" : "")}
          >
            <div className="flex flex-col align-middle justify-center items-center">
              {isAuthenticated ? (
                <div className="bg-black w-8 h-8 rounded-full flex flex-col items-center justify-center text-[1.2rem]">
                  <p className="text-white">{user.email.charAt(0).toUpperCase()}</p>
                </div>
              ) : (
                <FaRegUserCircle size={30} />
              )}
              <p className="text-[0.8rem]">Profile</p>
            </div>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default FooterBottom;
