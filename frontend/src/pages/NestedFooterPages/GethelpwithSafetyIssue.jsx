import React, { useState, useContext } from "react";
import { FaAirbnb } from "react-icons/fa6";
import { MdSearch } from "react-icons/md";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import AuthContext from "../../context/AuthContext";

function GethelpwithSafetyIssue() {
  const [show, setShow] = useState(false);

  const { isAuthenticated, loading, setIsAuthenticated, user, logout } =
    useContext(AuthContext);

  return (
    <div>
      {/* navbar of this page */}
      <div className="flex flex-row items-center align-middle justify-between px-2 py-4 border-b-[0.3px] md:px-20">
        <div className="flex flex-row align-middle  items-center gap-1">
          <Link to="/">
            <FaAirbnb size={45} />
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
          <div>
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
          </div>
          {show ? (
            <div className=" absolute h-auto w-60 bg-[#ffffff] shadow-md shadow-[#a3a2a2] top-14 right-10 rounded-2xl flex flex-col ">
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
      {/* body parts of this page. */}
      <div className="md:flex md:justify-center md:">
        <div className="pb-20 md:w-[70%]">
          <div className="px-3 pt-12 pb-22 flex flex-col gap-5 ">
            <Link
              to="/helpcenter"
              className="hidden md:flex md:items-center gap-2 "
            >
              <IoIosArrowRoundBack color="#008489" size={30} />
              <p>back to help center</p>
            </Link>
            {!isAuthenticated && (
              <div className="flex flex-col gap-3">
                <h2 className="text-4xl font-extrabold text-gray-700">
                  Log in to contact us
                </h2>
                <p className="text-[1.2rem] font-light text-gray-800">
                  This will help us quickly identify you and get you the right
                  kind of help
                </p>
                <div className="flex flex-row gap-2">
                  <Link
                    to="/login"
                    className="bg-[#008489] text-white font-medium px-7 py-3 text-[1.2rem] rounded-[0.3rem]"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/login"
                    className="font-extrabold px-7 py-3 text-[1.2rem] rounded-[0.3rem] border-2 border-[#008489] text-[#008489]"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            )}
          </div>
          {/* These article might help */}
          <div>
            <div className="border-t-[0.1px] mx-3"></div>
            {/* Starting of the body main parts */}
            <p className="text-[1.7rem] font-bold text-gray-700 mx-3 pt-10">
              These articles might help
            </p>
            <div className="px-3 py-8 flex flex-col gap-10 md:flex-row">
              <div className="flex flex-col gap-4">
                <p className="text-[1.6rem] font-bold text-gray-700 ">
                  Getting started
                </p>
                <p className="text-[1.2rem] underline text-gray-800 font-light">
                  Create an account
                </p>
                <p className="text-[1.2rem] underline text-gray-800 font-light">
                  Airbnb Referral program Terms and Condition
                </p>
                <p className="text-[1.2rem] underline text-gray-800 font-light">
                  Search for airbnb home listing
                </p>
                <p className="text-[1.2rem] underline text-gray-800 font-light">
                  Contacting Host
                </p>
              </div>

              {/* your account links */}
              <div className="flex flex-col gap-4">
                <p className="text-[1.6rem] font-bold text-gray-700 ">
                  Your account
                </p>
                <p className="text-[1.2rem] underline text-gray-800 font-light">
                  Reset or change your password
                </p>
                <p className="text-[1.2rem] underline text-gray-800 font-light">
                  Add or remove a payment method
                </p>
                <p className="text-[1.2rem] underline text-gray-800 font-light">
                  Add a payout method
                </p>
                <p className="text-[1.2rem] underline text-gray-800 font-light">
                  Deactivating or deleting your account
                </p>
              </div>

              {/* Trust and safety */}
              <div className="flex flex-col gap-4">
                <p className="text-[1.6rem] font-bold text-gray-700 ">
                  Trust and safety
                </p>
                <p className="text-[1.2rem] underline text-gray-800 font-light">
                  Verifying your identity on Airbnb
                </p>
                <p className="text-[1.2rem] underline text-gray-800 font-light">
                  What to do if a host isn't responding
                </p>
                <p className="text-[1.2rem] underline text-gray-800 font-light">
                  If a host asks you to pay outside Airbnb
                </p>
                <p className="text-[1.2rem] underline text-gray-800 font-light">
                  Paying and communicating through Airbnb
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GethelpwithSafetyIssue;
