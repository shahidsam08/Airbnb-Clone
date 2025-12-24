import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router";

function FooterBottom() {
  const [isActive, setIsActive] = useState("explore");


  return (
    <div className="sticky bottom-0">
      <div className="flex flex-row justify-center align-middle items-center p-4 gap-8 bg-white">
        {/* explore home page. */}
        <Link
          to="/"
          onClick={()=> {
            setIsActive("explore")
          }}
          className={`${isActive === "explore" ? "text-[#da1249]" : "black"}`}
        >
          <div className="flex flex-col align-middle justify-center items-center">
            <IoSearchSharp size={30} />
            <p className="text-[0.8rem]">Explore</p>
          </div>
        </Link>
        {/* show the wishlist */}
        <div className="flex flex-col align-middle justify-center items-center">
          <FaRegHeart size={30} />
          <p className="text-[0.8rem]">Wishlist</p>
        </div>
        {/* Login page */}
        <Link to="/login" onClick={()=> {
          setIsActive("Login")
        }} className={`${isActive === "Login" ? "text-[#da1249]" : "black"}`}>
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
