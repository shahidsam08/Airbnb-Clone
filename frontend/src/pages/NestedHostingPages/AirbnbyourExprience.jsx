import React from "react";
import Footer from "../../components/Footer.jsx";
import { FaAirbnb } from "react-icons/fa6";
import { Link } from "react-router-dom";

function AirbnbyourExprience() {
  return (
    <div>
      <div className="flex flex-col gap-10 px-5 py-10">
        {/* airbnb logo not sticky or fixed. */}
        <div className="w-fit">
          <Link to="/">
            <FaAirbnb size={45} color="red" />
          </Link>
        </div>
        {/* get paid to do what you love */}
        <div className="flex flex-col gap-6 items-center justify-center">
          <p className="text-5xl font-bold text-center">
            Get paid to do what you love
          </p>
          <p className="text-center w-[90%] text-[1.3rem]">
            Create a unique Airbnb Experience for millions of guests.
          </p>
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1727297676509/original/dd948131-a986-425f-8e4b-1e67e47824fb.jpeg?im_w=1200"
            alt=""
          />
        </div>
        {/* text and slide image */}
        <div className="flex flex-col gap-6 items-center py-15">
          <p className="text-center text-3xl font-bold">
            Bring the best of your city to life on Airbnb
          </p>
          <p className="text-center text-[1.1rem] w-[90%] font-light text-[#585656]">
            Apply to join our marketplace of high-quality experiences led by
            locals like you.
          </p>
        </div>
      </div>
      {/* scroll auto element */}

      {/* Footer  */}
      <Footer />
      {/* bottom fixed button */}
      <div className="sticky bottom-0 backdrop-blur-sm w-full h-20 flex flex-col items-center justify-center align-middle ">
        <Link
          to="/login"
          className="bg-[#da1249] w-[90%] py-3 text-center text-[1.2rem] rounded-4xl text-white"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default AirbnbyourExprience;
