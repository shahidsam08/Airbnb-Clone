import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router";

function FooterBottom() {
  return (
    <div>
      <div className="flex flex-row justify-center align-middle items-center p-4 gap-8 bg-white">
        {/* explore home page. */}
        <div className="flex flex-col align-middle justify-center items-center">
          <IoSearchSharp size={25}/>
          <p className="text-[0.8rem]">Explore</p>
        </div>
        {/* show the wishlist, if not login go to the login page. */}
        <div className="flex flex-col align-middle justify-center items-center">
          <FaRegHeart size={25}/>
          <p className="text-[0.8rem]">Wishlist</p>
        </div>
        {/* if not login first login , if login then show the profile. */}
        <Link to="/login">
        <div className="flex flex-col align-middle justify-center items-center">
          <FaRegUserCircle size={25}/>
          <p className="text-[0.8rem]">Login</p>
        </div></Link>
      </div>
    </div>
  );
}

export default FooterBottom;
