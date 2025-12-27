import React from "react";
import { BsGlobe2 } from "react-icons/bs";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { Link } from "react-router";

function Footer() {
  return (
    <div className="bg-gray-100 px-5 pt-12">
      <div className="border-b-[0.6px] border-gray-400 flex flex-col gap-3 mt-3 pb-5">
        <p className="font-bold font-stretch-70%">Support</p>
        {/* help center  */}
        <Link
          to="/helpcenter"
          className="text-black hover:underline font-stretch-104% visited:text-gray-500"
        >
          Help Center
        </Link>
        {/* get help with a safety issue */}
        <Link
          to="/safetyissue"
          className="text-black hover:underline font-stretch-104% visited:text-gray-500"
        >
          Get help with a safety issue
        </Link>
        {/* Air cover  */}
        <Link
          to="/aircover"
          className="text-black hover:underline font-stretch-104% visited:text-gray-500"
        >
          Air Cover
        </Link>
        {/* Anti dicrimination  */}
        <Link
          to="/anti_discrimination"
          className="text-black hover:underline font-stretch-104% visited:text-gray-500"
        >
          Anti-discrimination
        </Link>
        
        {/* Disability support */}
        <Link
          to="/disablity_supports"
          className="text-black hover:underline font-stretch-104% visited:text-gray-500"
        >
          Disability support
        </Link>
        {/* Cancel support  */}
        <Link
          to="/cancel_option"
          className="text-black hover:underline font-stretch-104% visited:text-gray-500"
        >
          Cancellation option 
        </Link>
        {/* Report neighbourhood concern */}
        <Link
          to="/report_concern"
          className="text-black hover:underline font-stretch-104% visited:text-gray-500"
        >
           Report neighbourhood concern
        </Link>
        
      </div>

      {/* hosting */}
      <div className="border-b-[0.5px] border-gray-400 flex flex-col gap-3 mt-3 pb-5">
        <p className="font-bold font-stretch-70%">Hosting</p>
        {/* Airbnb your home page link */}
        <Link
          to="/airbnbyourhome"
          className="text-black hover:underline font-stretch-104% visited:text-gray-500"
        >
          Airbnb your home
        </Link>
        {/* Airbnb your exprience. */}
        <Link
          to="/airbnbexprience"
          className="text-black hover:underline font-stretch-104% visited:text-gray-500"
        >
          Airbnb your experience
        </Link>
        {/* Airbnb your services. */}
        <Link
          to="/airbnbservices"
          className="text-black hover:underline font-stretch-104% visited:text-gray-500"
        >
          Airbnb your service
        </Link>
        {/* air cover for hosts */}
        <Link
          to="/aircoverforhosts"
          className="text-black hover:underline font-stretch-104% visited:text-gray-500"
        >
          AirCover for Hosts
        </Link>
        {/* hosting resources */}
        <p className="text-gray-700 font-stretch-104%">Hosting resources</p>
        <p className="text-gray-700 font-stretch-104%">Community forum</p>
        <p className="text-gray-700 font-stretch-104%">Hosting responsibly</p>
        {/* join a free hosting class */}
        <Link
          to="/freehostingclass"
          className="text-black hover:underline font-stretch-104% visited:text-gray-500"
        >
          Join a free Hosting class
        </Link>
        {/* find a co-host */}
        <Link
          to="/findcohost"
          className="text-black hover:underline font-stretch-104% visited:text-gray-500"
        >
          Find a co‑host
        </Link>
        {/* refer a host */}
        <p className="text-gray-700 font-stretch-104%">Refer a host</p>
      </div>
      {/* airbnb block */}

      <div className="border-b-[0.5px] border-gray-400 flex flex-col gap-3 mt-3 pb-5">
        <p className="font-bold font-stretch-70%">Airbnb</p>
        <p className="text-gray-700 font-stretch-104%">2025 Summer Release</p>
        <p className="text-gray-700 font-stretch-104%">Newsroom</p>
        <p className="text-gray-700 font-stretch-104%">Careers</p>
        <p className="text-gray-700 font-stretch-104%">Investors</p>
        <p className="text-gray-700 font-stretch-104%">
          Airbnb.org emergency stays
        </p>
      </div>

      {/* currency and language of the airbnb. */}
      <div className="mt-6 flex flex-col gap-4">
        <div className="flex flex-row items-center align-middle gap-4 font-medium">
          <div className="flex flex-row items-center align-middle gap-3">
            <BsGlobe2 size={17} /> English (IN)
          </div>
          <div className="flex flex-row items-center align-middle gap-2">
            <FaIndianRupeeSign size={13} /> INR
          </div>
        </div>
        {/* airbnb social media account */}
        <div className="flex flex-row gap-7">
          <div>
            <a href="https://www.facebook.com/AirbnbIndia" target="blank">
              <FaFacebook size={20} />
            </a>
          </div>
          <div>
            <a href="https://x.com/airbnb_in" target="blank">
              <BsTwitterX size={20} />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/airbnb" target="blank">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
        {/* copyright, terms and condition */}
        <div className="mb-5">
          <p className="flex flex-row align-middle items-center gap-1">
            <MdCopyright />{" "}
            <span className="font-light">2025 Airbnb, Inc.</span>
          </p>
          <div className="flex flex-row align-middle items-center gap-1 font-light">
            <div>Privacy</div>
            <LuDot />
            <div>Terms</div>
            <LuDot />
            <div>Company details</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

// Here we write the footer of the airbnb.
