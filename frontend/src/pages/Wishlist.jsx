import React from "react";
import FooterBottom from "../components/FooterBottom";

function Wishlist() {
  return (
    <div>
      <div>
        <p className="text-4xl py-4 px-4 border-b-[0.8px] border-b-gray-400 font-bold">
          Wishlists
        </p>
      </div>
      <div className="px-4 py-6 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-medium">Log in to view your wishlists</p>
          <p className="text-[#898787]">You can create, view, or edit wishlists once you’ve logged in.</p>
        </div>
        <div>
          <input type="button" value="Login" className="bg-[#da1249] text-[1.3rem] text-white w-30 py-3 rounded-[0.8rem]"/>
        </div>
      </div>
      <div className="border-t-[0.1px] border-[#dedcdc] backdrop-blur-md fixed w-full bottom-0">
        <FooterBottom />
      </div>
    </div>
  );
}

export default Wishlist;
