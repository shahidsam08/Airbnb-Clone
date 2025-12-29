import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

// reducer method

function FooterBottom() {
  return (
    <div className="sticky bottom-0">
      <div className="flex flex-row justify-center align-middle items-center p-4 gap-8 backdrop-blur-md">
        {/* explore home page. */}
        <NavLink
          to="/"
          className={({isActive}) => isActive ? "text-[#da1249]" : ""}
        >
          <div className="flex flex-col align-middle justify-center items-center">
            <IoSearchSharp size={30} />
            <p className="text-[0.8rem]">Explore</p>
          </div>
        </NavLink>
        {/* show the wishlist */}
        <NavLink
          to="/wishlist"
          className={({isActive}) => isActive ? "text-[#da1249]" : ""}
        >
          <div className="flex flex-col align-middle justify-center items-center">
            <FaRegHeart size={30} />
            <p className="text-[0.8rem]">Wishlist</p>
          </div>
        </NavLink>
        {/* Login page */}
        <NavLink
          to="/login"
          className={({isActive}) => isActive ? "text-[#da1249]" : ""}
        >
          <div className="flex flex-col align-middle justify-center items-center">
            <FaRegUserCircle size={30} />
            <p className="text-[0.8rem]">Login</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default FooterBottom;
