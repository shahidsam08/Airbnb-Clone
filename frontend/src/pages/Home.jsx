import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ListingDetails from "./ListingDetails";
import FooterBottom from "../components/FooterBottom";
import ListingCard from "../components/ListingCard";

function Home() {
  return (
    <div>
      <div>
        <div className="sticky top-0 bg-white">
        <Navbar />
      </div>
      <ListingDetails />
      <ListingCard />
      </div>
      <div>
        <Footer />
      </div>
      <div className="border-t-[0.1px] border-[#dedcdc] backdrop-blur-md sticky w-full bottom-0">
        <FooterBottom />
      </div>
    </div>
  );
}

export default Home;

// what home page show?

// Home page show the categories + listing. Home page of the Airbnb project
