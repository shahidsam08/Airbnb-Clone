import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { FaAirbnb } from "react-icons/fa6";
import { MdSearch } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { FaAngleLeft } from "react-icons/fa6";

function Aircover() {
  return (
    <div>
      <div className="flex flex-row items-center align-middle justify-between px-2 py-4 border-b-[0.3px]">
        <div className="flex flex-row align-middle  items-center gap-1">
          <Link to="/">
            <FaAirbnb size={45} />
          </Link>
          <Link to="/helpcenter" className="text-[1.3rem] font-medium">
            Help Centre
          </Link>
        </div>
        <div>
          <MdSearch size={25} />
        </div>
      </div>
      {/* body parts of the page. */}
      <div className="px-10 py-6 flex flex-col gap-9">
        {/* login and sign up button */}
        <div className="border-2 text-center py-3 rounded-[0.7rem] bg-[#d20962] text-white text-[1.2rem]">
          Log in or Sign up
        </div>
        {/* booking basic link box */}
        <div className="flex flex-row items-center align-middle gap-3">
          <FaAngleLeft size={15} className="text-gray-400" />
          <p className="underline text-gray-700 text-[0.9rem]">
            Bookign basics
          </p>
        </div>
        {/* Air cover for guest box */}
        <div className="mb-7">
          <p className="flex flex-row align-middle items-center font-medium text-gray-500">
            Guide <LuDot /> Guest{" "}
          </p>
          <p className="text-[2.1rem] font-medium text-gray-800">AirCover for guests</p>
          <img src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt5912675266dfa56f/62619649b9aa584a4e327561/AC_Guests_HG_EN_S@3x.png" alt="aircover_image" className="mb-6" />
          <p className="text-[1.12rem] font-light">Every home booking comes with AirCover for guests. If there’s a serious issue with your Airbnb home that your host can't resolve, we’re here to help.</p>
        </div>
        {/* We’ll help you get rebooked or give you a full or partial refund
 */}
        <div className="flex flex-col gap-5">
          <p className="text-[1.6rem] leading-[1.6rem] font-medium text-gray-800">We’ll help you get rebooked or give you a full or partial refund</p>
          <p className="text-[1.2rem] text-gray-800 font-light">Here’s where we can help:</p>
          <ul className="list-disc pl-12 text-[1.1rem] marker:text-[1.2rem] text-gray-700">
            <li>If your <span className="underline font-medium">home host cancels before check-in</span></li>
            <li>If there's a problem and <span className="underline font-medium">you can’t get in touch with your host</span> </li>
            <li>If the listing is <span className="underline font-medium">significantly different</span>  than advertised, and your host can’t resolve the issue</li>
          </ul>
          <p className="text-[1.1rem] text-gray-700 mb-5">
            Our team can help you find a similar place, considering location and amenities, based on availability at comparable pricing. If a similar place isn’t available or you’d prefer not to rebook, we’ll give you a full or partial refund, including service fees.
          </p>
        </div>
        {/* How AirCover for guests works */}
        <div className="flex flex-col gap-5">
          <p className="text-[1.6rem] leading-[1.6rem] font-medium text-gray-800">How AirCover for guests works</p>
          <p className="text-[1.2rem] text-gray-800 font-light">AirCover for guests provides support for serious issues with your home booking, for example:</p>
          <ul className="list-disc pl-12 text-[1.1rem] marker:text-[1.2rem] text-gray-700">
            <li>Host cancels your reservation prior to check-in</li>
            <li>The heating is not working in winter</li>
            <li>The listing has fewer bedrooms than listed</li>
            <li>t’s a different type of home–a private room instead of an entire home</li>
            <li>A major advertised amenity, such as a pool or kitchen, is missing</li>
          </ul>
          <p className="text-[1.1rem] text-gray-700 mb-5">AirCover for guests doesn’t include more minor inconveniences, like a broken toaster.</p>
        </div>

        {/* Resolving issues during your stay */}
        <div className="flex flex-col gap-5">
          <p className="text-[1.6rem] leading-[1.6rem] font-medium text-gray-800">Resolving issues during your stay</p>
          <p className="text-[1.1rem] text-gray-800 font-light">Your host is your best point of contact to reach out to if anything comes up. You can <span className="underline font-medium">message your host</span>  directly to let them know what’s going on. If an issue does come up during your stay:</p>
          <ol className="list-decimal pl-10 text-[1.1rem] text-gray-700 flex flex-col gap-2">
            <li><span className="font-bold">Document the issue:</span> Take photos or videos as evidence.</li>
            <li><span className="font-bold">Contact your host:</span> Notify your host within 72 hours of discovery, describing the problem and seeking a resolution.</li>
            <li><span className="font-bold">Contact us:</span> If your host is unresponsive or unable to resolve the issue,<span className="font-semibold underline">contact us</span>  immediately.</li>
            <li><span className="font-bold">AirCover for guests support:</span> If the issue is covered by AirCover for guests and you wish to leave, we’ll help you find comparable accommodation based on availability and pricing. If a similar place is unavailable or you prefer not to rebook, you’ll receive a full or partial refund.</li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Aircover;
