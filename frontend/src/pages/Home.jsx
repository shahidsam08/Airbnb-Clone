import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ListingDetails from "./ListingDetails";
import FooterBottom from "../components/FooterBottom";
import ListingCard from "../components/ListingCard";

function Home() {
  const [showBox, setShowBox] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current) {
        setShowBox(true);
      } else {
        setShowBox(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <div className="sticky top-0 bg-white">
        <Navbar />
      </div>
      <div>
        <ListingDetails />
        <ListingCard />
      </div>
      <div>
        <Footer />
      </div>
      <div
        className={`border-t-[0.1px] border-[#dedcdc] backdrop-blur-md sticky w-full bottom-0 ${
          showBox
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 hidden"
        }`}
      >
        <FooterBottom />
      </div>
      <div
        className={`border-t-[0.1px] border-[#dedcdc] backdrop-blur-md w-full bottom-0`}
      >
        <FooterBottom />
      </div>
    </div>
  );
}

export default Home;

// what home page show?

// Home page show the categories + listing. Home page of the Airbnb project
