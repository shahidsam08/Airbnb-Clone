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
  const [dropdown, setDropdown] = useState("basic");
  const toggle = (key) => {
    setOpenKey((prev) => (prev === key ? prev : key));
  };

  const ListingDataToggle = (key) => {
    setDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <div>
      <div className="flex flex-col md:flex-col border-t-[1.2px] border-zinc-300 ">
        <div className="px-8 flex md:flex-row pt-20 flex-col gap-5 w-full">
          <div
            onClick={() => toggle("NewListing")}
            className={`text-black font-bold py-2 text-2xl text-center w-full cursor-pointer flex flex-row items-center px-10 gap-8 border-[0.2px] rounded-lg ${openkey === "NewListing" && "bg-black text-white py-2 rounded-lg"}`}
          >
            <MdOutlineAddHome />
            <p>New Listing</p>
          </div>
          <div
            onClick={() => toggle("Listedhistory")}
            className={`text-black font-bold py-2 text-2xl text-center w-full cursor-pointer flex flex-row items-center px-10 gap-8 border-[0.2px] rounded-lg ${openkey === "Listedhistory" && "bg-black text-white py-2 rounded-lg"}`}
          >
            <RiHome2Line />
            <p>Listed History</p>
          </div>
        </div>
        {/* show the data */}
        <div>
          <div className=" px-8 pt-20 w-full">
            {openkey === "Listedhistory" && (
              <div>
                <ListedHistory />
              </div>
            )}
          </div>
          {/* new listing */}
          <div className=" px-8 pt-20 w-full">
            {openkey === "NewListing" && (
              <div>
                <NewListing />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homelisted;
