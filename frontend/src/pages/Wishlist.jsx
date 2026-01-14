import React from "react";
import FooterBottom from "../components/FooterBottom";
import { Link } from "react-router";
import HeaderCommon from "../components/HeaderCommon";
import { MdToken } from "react-icons/md";
import Footer from "../components/Footer";
import { useEffect } from "react";
import api from "../api/axios";
import { useState } from "react";

function Wishlist() {
  const [LoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const wishlistApi = async () => {
      try {
        const response = await api.get("/api/wishlist", {
          withCredentials: true,
        });
        // console.log(response.data.userInfo.email)
        // console.log(response.data.userInfo.username)

        if (response.data.message === "User found") {
          setUserLoggedIn(true);
        }
       
      } catch (error) {
        console.log(error);
      }
    };

    wishlistApi();
  });
  return (
    <div>
      {/* top header */}
      <HeaderCommon />

      {LoggedIn ? (
        <div className="h-60">
          <p className="p-10 font-bold text-2xl">No wishlist.</p>
        </div>
      ) : (
        <div>
          <div>
            <p className="text-4xl py-4 px-4 border-b-[0.8px] border-b-gray-400 font-bold">
              Wishlists
            </p>
          </div>
          <div className="px-4 py-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-medium">
                Log in to view your wishlists
              </p>
              <p className="text-[#898787]">
                You can create, view, or edit wishlists once you’ve logged in.
              </p>
            </div>
            <Link
              to="/login"
              className="bg-[#da1249] text-[1.3rem] text-white w-30 py-3 rounded-[0.8rem]"
            >
              <p className="text-center">Login</p>
            </Link>
          </div>
        </div>
      )}

      <div className="border-t-[0.1px] border-[#dedcdc] backdrop-blur-md fixed w-full bottom-0 md:hidden">
        <FooterBottom />
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
}

export default Wishlist;
