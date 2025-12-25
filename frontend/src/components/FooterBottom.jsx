import React, { useReducer } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

// reducer method

function FooterBottom() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path

  return (
    <div className="sticky bottom-0">
      <div className="flex flex-row justify-center align-middle items-center p-4 gap-8 backdrop-blur-md">
        {/* explore home page. */}
        <Link
          to="/"
          className={isActive("/") ? "text-red-500" : "text-black"}
        >
          <div className="flex flex-col align-middle justify-center items-center">
            <IoSearchSharp size={30} />
            <p className="text-[0.8rem]">Explore</p>
          </div>
        </Link>
        {/* show the wishlist */}
        <Link
          to="/wishlist"
          className={isActive("/wishlist") ? "text-red-500" : "text-black"}
        >
          <div className="flex flex-col align-middle justify-center items-center">
            <FaRegHeart size={30} />
            <p className="text-[0.8rem]">Wishlist</p>
          </div>
        </Link>
        {/* Login page */}
        <Link
          to="/login"
          className={isActive("/login") ? "text-red-500" : "text-black"}
        >
          <div className="flex flex-col align-middle justify-center items-center">
            <FaRegUserCircle size={30} />
            <p className="text-[0.8rem]">Login</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FooterBottom;
