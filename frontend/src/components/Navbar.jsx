import { MdSearch } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { FaAirbnb } from "react-icons/fa6";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { useReducer, useState, useEffect, useContext } from "react";
import { CgMenu } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { motion } from "motion/react";
import api from "../api/axios";
import { FaRegHeart, FaSuitcaseRolling, FaRegUserCircle } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// solve the problem which effect the logic
// logic of useReducer
const reducer = (state, action) => {
  switch (action.type) {
    case "WHERE":
      return "where";
    case "WHEN":
      return "when";
    case "WHO":
      return "who";
    default:
      return "";
  }
};

function Navbar() {
  const [Toggle, setToggle] = useState(false);
  // using useReducer
  const [active, dispatch] = useReducer(reducer, "where");

  const { isAuthenticated, loading, setIsAuthenticated, user, logout } =
    useContext(AuthContext);

  const FirstRenderAfterLogin = () => {
    if (loading === false) {
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    }
  };

  useEffect(() => {
    FirstRenderAfterLogin();
  }, []);


  return (
    <nav
      className="bg-zinc-100"
      onClick={() => {
        if (Toggle === true) {
          setToggle(false);
        }
      }}
    >
      {/* this show only less than md ( <= 768 px) */}
      <div className="flex flex-col gap-6 border-b-gray-300 border-b-[1.2px] pb-[0.5] shadow-md shadow-gray-500/20 md:hidden">
        {/* searchpage components. */}
        <Link
          to="/searchpage"
          className="border-[1.2px] px-4 py-5 border-gray-300 shadow-md shadow-gray-500/20 rounded-4xl text-center text-black flex flex-row justify-center align-middle items-center gap-2 mx-4 mt-3 hover:border-black"
        >
          {" "}
          <MdSearch size={18} className="font-bold" />{" "}
          <p className="text-1xl font-medium">Search for homes</p>{" "}
        </Link>
        {/* homes experiece and services. */}
        <div className="flex flex-row items-center justify-around mx-8">
          {/* homes */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "border-b-[2.9px]" : "border-white"
            }
          >
            <div className="flex flex-col align-middle pb-2 justify-center items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3171/3171547.png"
                alt="homes"
                width={40}
              />
              <p className="text-gray-600 font-medium text-[0.9rem]">Homes</p>
            </div>
          </NavLink>
          {/* exprience */}
          <NavLink
            to="/exprience"
            className={({ isActive }) =>
              isActive ? "border-b-[2.9px]" : "border-white"
            }
          >
            <div className="flex flex-col align-middle pb-2  justify-center items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2955/2955139.png"
                alt="Experience"
                width={40}
              />
              <p className="text-gray-600 font-medium text-[0.9rem]">
                Experience
              </p>
            </div>
          </NavLink>
          {/* services */}
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "border-b-[2.9px]" : "border-white"
            }
          >
            <div className="flex flex-col align-middle pb-2  justify-center items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/563/563976.png"
                alt="services"
                width={40}
              />
              <p className="text-gray-600 font-medium text-[0.9rem]">Service</p>
            </div>
          </NavLink>
        </div>
      </div>

      {/* -----------------------this navbar show on when any body on the big screen >= 768  -----------------------------------------------*/}

      <div className="hidden md:flex md:flex-col md:px-8 md:py-3 md:pb-10 md:gap-15 ">
        <div className="md:flex md:flex-row md:items-center md:justify-between">
          {/* airbnb logo */}
          <div className="lg:w-[33%]">
            <Link to="/" className="flex flex-row items-center justify-start">
              <FaAirbnb size={50} color="red" />
              <p className="text-2xl font-bold text-red-500">Airbnb</p>
            </Link>
          </div>
          {/* homes experiece and services. */}
          <div className="flex flex-row items-center justify-center md:w-[60%] md:pt-2 md:gap-20 lg:w-[33%]">
            {/* homes */}
            <NavLink
              to=""
              end
              className={({ isActive }) =>
                isActive ? "border-b-[2.9px]" : "border-white"
              }
            >
              <div className="flex flex-col align-middle pb-2 justify-center items-center">
                <motion.img
                  animate={{
                    rotateY: 360,
                    transition: { duration: 1 },
                  }}
                  src="https://cdn-icons-png.flaticon.com/128/3171/3171547.png"
                  alt="homes"
                  width={40}
                />
                <p className="text-gray-600 font-medium text-[0.9rem]">Homes</p>
              </div>
            </NavLink>
            {/* exprience */}
            <NavLink
              to="/exprience"
              className={({ isActive }) =>
                isActive ? "border-b-[2.9px]" : "border-white"
              }
            >
              <div className="flex flex-col align-middle pb-2  justify-center items-center">
                <motion.img
                  animate={{
                    rotateY: 360,
                    transition: { duration: 1 },
                  }}
                  src="https://cdn-icons-png.flaticon.com/128/2955/2955139.png"
                  alt="Experience"
                  width={40}
                />
                <p className="text-gray-600 font-medium text-[0.9rem]">
                  Experience
                </p>
              </div>
            </NavLink>
            {/* services */}
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "border-b-[2.9px]" : "border-white"
              }
            >
              <div className="flex flex-col align-middle pb-2  justify-center items-center">
                <motion.img
                  animate={{
                    rotateY: 360,
                    transition: { duration: 1 },
                  }}
                  src="https://cdn-icons-png.flaticon.com/128/563/563976.png"
                  alt="services"
                  width={40}
                />
                <p className="text-gray-600 font-medium text-[0.9rem]">
                  Service
                </p>
              </div>
            </NavLink>
          </div>
          {/* large hamburger sign / become a host */}
          <div className="lg:w-[33%]">
            <div className="hidden md:flex md:flex-row md:items-center md:justify-end md:sticky md:top-0 md:bg-zinc-100 z-10">
              <div className="flex flex-row items-center justify-center gap-8">
                <Link to="/host" className="md:hidden lg:block">
                  <div className="px-3 py-2 rounded-2xl hover:bg-[#ebebebdd] text-[1rem]">
                    {isAuthenticated && <p>Switch to Hosting</p>}
                  </div>
                </Link>
                {/* -----------show the user if user logged in show this otherwise hide.-------------------- */}
                {isAuthenticated ? (
                  <Link
                    to="/profile"
                    className="bg-gray-900 w-8 h-8  rounded-full flex flex-col justify-center items-center"
                  >
                    <p className="text-white text-[1.2rem]">
                      {user?.email?.charAt(0)?.toUpperCase()}
                    </p>
                  </Link>
                ) : (
                  " "
                )}

                {loading && (
                  <AiOutlineLoading3Quarters className="animate-spin" />
                )}
                {/* show the hamburger which show */}
                <div
                  className="md:p-2 md:bg-zinc-200 md:w-fit md:rounded-4xl md:flex md:items-center md:justify-center relative cursor-pointer"
                  onClick={() => {
                    if (Toggle === false) {
                      setToggle(true);
                    } else {
                      setToggle(false);
                    }
                  }}
                >
                  <CgMenu size={20} color="black" />
                </div>
              </div>

              {/* show toggle data */}
              {Toggle ? (
                <div className="absolute top-15 right-5 bg-white shadow-2xl ring-gray-700 ring-offset-2 w-70 py-3 rounded-2xl flex flex-col gap-2">
                  {/* show this when user is logged in when user logout don't show these block */}
                  <div className={`${isAuthenticated ? "block" : "hidden"}`}>
                    {/* wishlist */}
                    <Link
                      to="/wishlist"
                      className="flex flex-row gap-2 items-center justify-start hover:bg-[#f1f0f0] pl-4 py-2"
                    >
                      <FaRegHeart size={17} />
                      <p className="text-[1rem]">WishList</p>
                    </Link>

                    {/*trips */}
                    <Link
                      to="/trips"
                      className="hover:bg-[#f1f0f0] flex flex-row items-center justify-start pl-4 py-2 gap-2"
                    >
                      <FaSuitcaseRolling size={17} />
                      <p className="text-[1.1rem] ">Trips</p>
                    </Link>

                    {/* messages */}
                    <Link
                      to="/messages"
                      className="hover:bg-[#f1f0f0] flex flex-row items-center justify-start pl-4 py-2 gap-2"
                    >
                      <FaRegMessage size={17} />
                      <p className="text-[1.1rem]">Messages</p>
                    </Link>

                    {/* profile */}
                    <Link
                      to="/profile"
                      className="hover:bg-[#f1f0f0] flex flex-row items-center justify-start pl-4 py-2 gap-2"
                    >
                      <FaRegUserCircle size={17} />
                      <p className="text-[1.1rem]">Profile</p>
                    </Link>
                    {/* account setting */}
                    <Link
                      to="/accountSetting"
                      className="hover:bg-[#f1f0f0] flex flex-row items-center justify-start pl-4 py-2 gap-2"
                    >
                      <IoSettingsOutline size={17} />
                      <p className="text-[1.1rem]">Account Setting</p>
                    </Link>
                  </div>
                  {/* end of the loggedIn shows data , one in the bottom in this div box which is logoout */}
                  {/* help center */}
                  <Link
                    to="/helpcenter"
                    className="flex flex-row gap-2 items-center justify-start hover:bg-[#f1f0f0] pl-4 py-2"
                  >
                    <RxQuestionMarkCircled size={20} />
                    <p className="text-[1rem]">Help Center</p>
                  </Link>
                  <div className="border-[0.2px] border-[#dfdcdc] "></div>
                  {/* become a host */}
                  <Link to="/host" className="hover:bg-[#f1f0f0]">
                    {isAuthenticated ? (
                      <p className="text-[1.1rem] pl-4 py-2">Switch to host</p>
                    ) : (
                      <p className="text-[1.1rem] pl-4 py-2">Become a host</p>
                    )}
                  </Link>
                  <div className="border-[0.2px] border-[#dfdcdc] "></div>
                  {/* Refer a host */}
                  <Link to="/refer-co-host" className="hover:bg-[#f1f0f0]">
                    <p className="text-[1.1rem] pl-4 py-2">Refer a host</p>
                  </Link>
                  <div className="border-[0.2px] border-[#dfdcdc] "></div>
                  {/* find a co host */}
                  <Link to="/findcohost" className="hover:bg-[#f1f0f0]">
                    <p className="text-[1.1rem] pl-4 py-2">Find a co-host</p>
                  </Link>
                  <div className="border-[0.2px] border-[#dfdcdc] "></div>
                  {/* login or sign up  */}
                  <Link
                    to="/login"
                    className={`hover:bg-[#f1f0f0] ${
                      isAuthenticated ? "hidden" : "block"
                    }`}
                  >
                    <p className="text-[1.1rem] pl-4 py-2">Login or signup</p>
                  </Link>
                  {/* show logout when the user is logged in */}
                  <div
                    className={`hover:bg-[#f1f0f0] cursor-pointer ${
                      isAuthenticated ? "block" : "hidden"
                    }`}
                    onClick={logout}
                  >
                    <p className="text-[1.1rem] pl-4 py-2">Log Out</p>
                  </div>
                </div>
              ) : (
                " "
              )}
            </div>
          </div>
        </div>
        {/* search box with where, when , who( select the poeple) */}
        <div
          className={`self-center md:w-[70%] md:flex md:justify-between border-[1.2px] border-zinc-300 md:items-center bg-white  rounded-full shadow-md overflow-hidden p-[3.5px] ${
            active === "where" || "when" || "who" ? "bg-zinc-300" : "bg-white"
          }`}
        >
          <div
            className={`md:w-[33%] py-3 px-5 rounded-full ${
              active === "where" ? "bg-white shadow-md" : ""
            }`}
            onClick={() => dispatch({ type: "WHERE" })}
          >
            <p>where</p>
            <input
              type="text"
              placeholder="Search destination"
              className="outline-none"
            />
          </div>
          <div
            className={`md:w-[33%] py-3 px-5 rounded-full ${
              active === "when" ? "bg-white shadow-md" : ""
            }`}
            onClick={() => dispatch({ type: "WHEN" })}
          >
            <p>when</p>
            <input
              type="text"
              placeholder="Add dates"
              className="outline-none"
            />
          </div>
          <div
            className={`md:w-[33%] py-3 px-5 rounded-full flex flex-row items-center justify-between ${
              active === "who" ? "bg-white shadow-md" : ""
            }`}
            onClick={() => dispatch({ type: "WHO" })}
          >
            <div>
              <p>who</p>
              <input
                type="text"
                placeholder="Add guests"
                className="outline-none"
              />
            </div>
            <div className="p-2 rounded-4xl bg-[#ff385c] flex flex-row gap-2 items-center group">
              <IoSearch color="white" size={21} />
              <p
                className={`text-white text-[1.08rem] ${
                  active === "who" ? "block transition ease-in-out" : "hidden"
                }`}
              >
                Search
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// navbar : make the navbar for the airbnb project.
