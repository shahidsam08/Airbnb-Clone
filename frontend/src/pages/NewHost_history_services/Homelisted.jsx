import React, { useState } from "react";
import { NavLink, Outlet } from "react-router";
import NewListing from "./HomeLilsting/NewListing";
import ListedHistory from "./HomeLilsting/ListedHistory";
import { MdOutlineAddHome } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

function Homelisted() {
  const [openkey, setOpenKey] = useState("NewListing");
  const [dropdown, setDropdown ] = useState("basic")
  const toggle = (key) => {
    setOpenKey((prev) => (prev === key ? prev : key));
  };

  const ListingDataToggle = (key) => {
    setDropdown((prev) => (prev === key ? null : key))
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row border-t-[1.2px] border-zinc-300 ">
        <div className="md:w-[30%] px-8 flex pt-20 flex-col gap-5 w-full">
          <div onClick={() => toggle("NewListing")} className={`text-black font-bold py-2 text-2xl text-center w-full cursor-pointer flex flex-row items-center px-10 gap-8 border-[0.2px] rounded-lg ${openkey === "NewListing" && "bg-black text-white py-2 rounded-lg"}`}>
            <MdOutlineAddHome />
            <p>New Listing</p>
          </div>
          <div onClick={() => toggle("Listedhistory")} className={`text-black font-bold py-2 text-2xl text-center w-full cursor-pointer flex flex-row items-center px-10 gap-8 border-[0.2px] rounded-lg ${openkey === "Listedhistory" && "bg-black text-white py-2 rounded-lg"}`}>
            <RiHome2Line />
            <p>Listed History</p>
          </div>
        </div>
        <div className="border-l-[1.2px] border-zinc-300 h-screen"></div>
        {/* show the data */}
        <div className="md:w-[70%] px-8 pt-20 w-full">
          {openkey === "NewListing" && (
            <div>
              <div onClick={()=> ListingDataToggle("basic")} className={`bg-black px-10 rounded-lg py-5 flex flex-row items-center justify-between ${dropdown && "w-[50%] transition-all ease-in-out duration-300 bg-pink-200"}`}>
                <p className="text-white text-2xl">Basic Information</p>
                <div>
                  {dropdown === "basic" ? <FaAngleDown color="white" size={24}/> : <FaAngleUp size={24} color="white" /> }
                  
                </div>
              </div>
            </div>
          )}
          {openkey === "Listedhistory" && (
            <div>
              <ListedHistory />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Homelisted;
