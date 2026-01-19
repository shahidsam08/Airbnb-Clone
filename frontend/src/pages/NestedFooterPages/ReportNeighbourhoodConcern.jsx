import { FaAirbnb } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa6";
import { FaFile } from "react-icons/fa6";
import Footer from "../../components/Footer";
import { useState, useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import AuthContext from "../../context/AuthContext";

function ReportNeighbourhoodConcern() {
  const [isHelpful, isSethelpful] = useState("value");
  const [show, setShow] = useState(false);

  const { isAuthenticated, loading, setIsAuthenticated, user, logout } =
    useContext(AuthContext);

  return (
    <div
      onClick={() => {
        if (window.screen.width >= 768 && show === true) {
          setShow(false);
        }
      }}
    >
      <div className="flex flex-col gap-10 ">
        {/* search option with airbnb logo which is sticky. */}
        <div className="flex flex-row items-center align-middle justify-between px-6 py-4 border-b-[0.3px] border-[#dddada] sticky top-0 z-50 bg-white">
          <div className="flex flex-row align-middle  items-center gap-1">
            <Link to="/">
              <FaAirbnb size={45} color="red" />
            </Link>
            <Link to="/helpcenter" className="text-[1.3rem] font-medium">
              Help Centre
            </Link>
          </div>
          <div className="md:hidden">
            <MdSearch size={25} />
          </div>
          <div
            className="hidden md:flex md:flex-row items-center md:border-[1.2px] md:border-[#c1c1c1] md:w-fit md:gap-2 md:px-2 md:py-1 md:rounded-4xl relative"
            onClick={() => {
              if (show === false) {
                setShow(true);
              } else {
                setShow(false);
              }
            }}
          >
            <div>
              <RxHamburgerMenu size={20} color="black" />
            </div>
            {isAuthenticated ? (
              <div className="bg-black w-7 h-7 flex flex-col items-center justify-center rounded-full">
                <p className="text-white">
                  {user?.email?.charAt(0)?.toUpperCase()}
                </p>
              </div>
            ) : (
              <div className="bg-[#807f7f] w-8 h-8 flex flex-col items-center justify-center rounded-2xl">
                <FaUser size={18} color="white" />
              </div>
            )}
            {show ? (
              <div className=" absolute h-auto w-60 bg-[#ffffff] shadow-md shadow-[#a3a2a2] top-14 right-10 rounded-2xl flex flex-col">
                <Link
                  to="/allhelptopic"
                  className="text-[1.2rem] border-b-[1.2px] border-[#c1c1c1] px-4 p-2  hover:bg-[#e1dede] hover:rounded-2xl hover:cursor-pointer"
                >
                  All help topics
                </Link>
                <Link
                  to="/aircoverforhosts"
                  className="text-[1.2rem] border-b-[1.2px] border-[#c1c1c1] px-4 p-2  hover:bg-[#e1dede] hover:rounded-2xl hover:cursor-pointer"
                >
                  Hosting Resources
                </Link>
                {isAuthenticated ? (
                  <Link
                    to="/accountsetting"
                    className="text-[1.2rem] border-b-[1.2px] border-[#c1c1c1] px-4 p-2  hover:bg-[#e1dede] hover:rounded-2xl hover:cursor-pointer"
                  >
                    Account Setting
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="text-[1.2rem] border-b-[1.2px] border-[#c1c1c1] px-4 p-2  hover:bg-[#e1dede] hover:rounded-2xl hover:cursor-pointer"
                  >
                    Log in{" "}
                  </Link>
                )}
                {isAuthenticated ? (
                  <div
                    className="text-[1.2rem] border-b-[1.2px] border-[#c1c1c1] px-4 p-2  hover:bg-[#e1dede] hover:rounded-2xl hover:cursor-pointer rounded-2xl"
                    onClick={logout}
                  >
                    <p>Log Out</p>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="text-[1.2rem] border-b-[1.2px] border-[#c1c1c1] px-4 p-2  hover:bg-[#e1dede] hover:rounded-2xl hover:cursor-pointer rounded-2xl"
                  >
                    Sign up
                  </Link>
                )}
              </div>
            ) : (
              " "
            )}
          </div>
        </div>
        {/* body of the page. */}
        <div className="px-8 flex flex-col gap-14 lg:flex lg:flex-row-reverse lg:justify-center">
          {/* login or sign up option */}
          {!isAuthenticated && (
            <div className="px-6 py-5 border-[0.4px] shadow-md border-[#d7d7d7] hidden lg:flex lg:flex-col gap-4 lg:w-[35%] lg:h-fit rounded-2xl lg:sticky lg:top-20 lg:bottom-10">
              <p className="text-[1.2rem] text-[#525151]">
                Get help with your reservations, account, and more.
              </p>
              <Link
                to="/login"
                className="border-2 text-center py-3 rounded-[0.7rem] bg-[#d20962] text-white text-[1.2rem]"
              >
                Log in or Sign up
              </Link>
            </div>
          )}
          {/* this login show on the small size ( < lg ) */}
          {!isAuthenticated && (
            <Link
              to="/login"
              className="border-2 text-center py-3 rounded-[0.7rem] bg-[#d20962] text-white text-[1.2rem] lg:hidden"
            >
              Log in or Sign up
            </Link>
          )}
          {/* all the body data ( except the login button) */}
          <div className="px-8 flex flex-col gap-14 lg:w-[50%] lg:items-start">
            {/* booking basic link box */}
            <div className="flex flex-row items-center align-middle gap-3">
              <FaAngleLeft size={15} className="text-gray-400" />
              <p className="underline text-gray-700 text-[0.9rem]">
                Reporting Issues
              </p>
            </div>
            {/* Neighbourhood support */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-[1rem] text-[#626060]">How-to</p>
                <p className="text-4xl font-medium">Neighbourhood Support</p>
              </div>
              <p className="text-[1.1rem] text-[#4a4949]">
                You can report a party, noise complaint or neighbourhood concern
                here.
              </p>
              <p className="text-[1.1rem] text-[#4a4949]">
                For help with a reservation, hosting or your account,{" "}
                <span className="underline font-semibold">
                  contact Airbnb Support
                </span>{" "}
                – our Neighbourhood Support team is only available to help with
                concerns related to home sharing in your community.
              </p>
            </div>
            {/* box with some message. */}
            <div className="border-[0.2px] border-[#929191] p-4 rounded-2xl flex flex-row gap-2">
              <div>
                <FaFile size={18} color="#D16200" />
              </div>
              <p className="text-[#373636]">
                <span className="underline font-semibold">
                  For emergencies:
                </span>{" "}
                If you feel unsafe or are concerned about your or someone else’s
                well-being, please contact local emergency services immediately.
              </p>
            </div>
            {/* urgent neighbourhood situations */}
            <div className="flex flex-col gap-5">
              <p className="text-2xl font-medium">
                Urgent neighbourhood situations
              </p>
              <p className="text-[1.1rem] text-[#302f2f]">
                Contact Neighbourhood Support if there’s a party or disturbance
                happening nearby.
              </p>
              <button className="px-8 py-3 rounded-[10px] bg-emerald-600 w-fit">
                <a
                  href="tel: +918709758469"
                  className="text-white text-[1.1rem]"
                >
                  Request a call
                </a>
              </button>
            </div>
            {/* report a concern */}
            <div className="flex flex-col gap-5">
              <p className="text-2xl font-medium">
                Other neighbourhood concerns
              </p>
              <p className="text-[1.1rem] text-[#302f2f]">
                Send us a message using the button below. Our team will
                investigate and follow up via email.
              </p>
              <button className="px-8 py-3 rounded-[10px] bg-red-600 w-fit">
                <a href="#" className="text-white text-[1.1rem]">
                  Report a concern
                </a>
              </button>
            </div>
            {/* did this article helpful?  */}
            <div className="flex flex-row gap-3 items-center align-middle">
              <p className="font-bold text-[1.3rem]">Did this article help? </p>
              <p
                className="underline text-black font-medium hover:cursor-pointer"
                onClick={() => {
                  isSethelpful("yes");
                }}
              >
                Yes
              </p>
              <p
                className="underline text-black font-medium hover:cursor-pointer"
                onClick={() => {
                  isSethelpful("no");
                }}
              >
                No
              </p>
            </div>
            {/* dynamic content. */}
            <div className="pb-10">
              {isHelpful === "yes" ? (
                <p className="font-bold text-[1.1rem]">
                  Thank you for letting us know!
                </p>
              ) : isHelpful === "no" ? (
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-1">
                    <p className="text-[1.3rem] font-medium text-gray-900">
                      Tell us a little more.
                    </p>
                    <p className="text-[#555454]">
                      Please select all that apply.
                    </p>
                  </div>
                  <form action="" className="flex flex-col gap-3 pl-3">
                    <div className="flex gap-4 flex-row">
                      <input
                        type="checkbox"
                        id="first"
                        className="scale-200 border-2 border-gray-400 accent-black"
                      />
                      <label
                        for="first"
                        className="text-[1.2rem] text-[#555454] font-light"
                      >
                        I didn’t find the answer to my question
                      </label>
                    </div>
                    {/* second */}
                    <div className="flex gap-4 flex-row">
                      <input
                        type="checkbox"
                        id="second"
                        className="scale-200 border-2 border-gray-400 accent-black"
                      />
                      <label
                        for="second"
                        className="text-[1.2rem] text-[#555454] font-light"
                      >
                        This info is confusing or unclear
                      </label>
                    </div>
                    {/* third */}
                    <div className="flex gap-4 flex-row">
                      <input
                        type="checkbox"
                        id="third"
                        className="scale-200 border-2 border-gray-400 accent-black"
                      />
                      <label
                        for="third"
                        className="text-[1.2rem] text-[#555454] font-light"
                      >
                        These instructions didn’t work
                      </label>
                    </div>
                    {/* fourth */}
                    <div className="flex gap-4 flex-row">
                      <input
                        type="checkbox"
                        id="fourth"
                        className="scale-200 border-2 border-gray-400 accent-black"
                      />
                      <label
                        for="fourth"
                        className="text-[1.2rem] text-[#555454] font-light"
                      >
                        Something else
                      </label>
                    </div>
                    <div>
                      <button
                        className="bg-black py-2 px-5 rounded-lg text-white"
                        type="submit"
                        name="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          {/* border bottom for separation  */}
        </div>
      </div>
      {/* footer part. */}
      <Footer />
    </div>
  );
}

export default ReportNeighbourhoodConcern;
