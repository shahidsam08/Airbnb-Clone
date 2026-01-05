import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ListingDetails from "./ListingDetails";
import FooterBottom from "../components/FooterBottom";
import ListingCard from "../components/ListingCard";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* first body */}
      <div>
        <div className="sticky top-0 bg-white">
          <Navbar />
        </div>
        {/* listin details */}
        <Outlet />
      </div>
      {/* second body */}
      <div>
        <ListingCard />
        <Footer />
        <div className="border-t-[0.1px] border-[#dedcdc] backdrop-blur-md sticky w-full bottom-0 md:hidden">
          <FooterBottom />
        </div>
      </div>
    </div>
  );
}

export default Home;

// what home page show?

// Home page show the categories + listing. Home page of the Airbnb project
