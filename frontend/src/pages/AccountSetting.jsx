import React, { useReducer, useEffect, useContext, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { RiUserLine } from "react-icons/ri";
import { FaRegHandPaper } from "react-icons/fa";
import { GrShieldSecurity } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiCalculator1 } from "react-icons/ci";
import { GrCurrency } from "react-icons/gr";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import HeaderCommon from "../components/HeaderCommon";
import AuthContext from "../context/AuthContext";

import { RiLockFill } from "react-icons/ri";


// use the useReducer() for conditional rendering.
const reducer = (state, action) => {
  switch (action.type) {
    case "PERSONALINFO":
      return "personalinfo";
    case "LOGSECURITY":
      return "logsecurity";
    case "PRIVACY":
      return "privacy";
    case "NOTIFICATION":
      return "notification";
    case "TAXES":
      return "taxes";
    case "PAYMENT":
      return "payment";
    default:
      return "personalinfo";
  }
};

function AccountSetting() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [openKey, setOpenKey] = useState(null);

  const toggle = (key) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  const navigate = useNavigate();

  // using the useReducer() for the conditionally rendering.
  const [stateValue, dispatch] = useReducer(reducer, "personalinfo");

  const { isAuthenticated, loading, setIsAuthenticated, user } =
    useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/", { replace: true });
    }
  });
  return (
    <div className="py-7 px-5 flex flex-col gap-5 lg:gap-0 lg:p-0">
      <div
        className="w-fit rounded-full bg-zinc-200 p-2 flex flex-row items-center justify-center lg:hidden"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeftLong size={15} />
      </div>
      {/* show when the screen is medium or big */}
      <div className="hidden lg:block">
        <HeaderCommon />
      </div>
      <div className="lg:px-5 lg:border-b-2 lg:border-zinc-200 lg:py-5">
        <p className="text-3xl font-bold">Account Setting</p>
      </div>
      <div className="lg:flex lg:flex-row">
        <div className="flex flex-col gap-7 lg:gap-3 lg:py-7 lg:pb-80 lg:px-10 lg:w-[28%] lg:border-r-2 lg:border-zinc-200">
          {/* Personal Information  */}
          <NavLink
            to="/accountsetting"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-blue-500 rounded-lg flex flex-row  px-2 gap-3 py-3 items-center text-white "
                : "font-bold  rounded-lg flex flex-row  px-2 gap-3 py-2 items-center"
            }
          >
            <div>
              <RiUserLine size={24} />
            </div>
            <p>Home Listing</p>
          </NavLink>
          <div
            className={`flex flex-row items-center justify-between lg:p-3 cursor-pointer ${
              stateValue === "personalinfo" &&
              "lg:bg-zinc-900 lg:text-white  lg:rounded-2xl"
            }`}
            onClick={() => {
              dispatch({ type: "PERSONALINFO" });
            }}
          >
            <div className="flex flex-row items-center gap-5 ">
              <RiUserLine size={20} />
              <p
                className={`text-[1.2rem] font-medium text-zinc-600 ${
                  stateValue === "personalinfo" && "lg:text-white"
                }`}
              >
                Personal Information
              </p>
            </div>
            <FaAngleRight size={20} color="#c1c1c1" className="md:hidden" />
          </div>

          {/* Login and security */}
          <div
            className={`flex flex-row items-center justify-between lg:p-3 cursor-pointer ${
              stateValue === "logsecurity" &&
              "lg:bg-zinc-900 lg:text-white  lg:rounded-2xl"
            }`}
            onClick={() => {
              dispatch({ type: "LOGSECURITY" });
            }}
          >
            <div className="flex flex-row items-center gap-5">
              <GrShieldSecurity size={20} />
              <p
                className={`text-[1.2rem] font-medium text-zinc-600 ${
                  stateValue === "logsecurity" && "lg:text-white"
                }`}
              >
                Login & Security
              </p>
            </div>
            <FaAngleRight size={20} color="#c1c1c1" className="md:hidden" />
          </div>
          {/* Privacy */}
          <div
            className={`flex flex-row items-center justify-between lg:p-3 cursor-pointer ${
              stateValue === "privacy" &&
              "lg:bg-zinc-900 lg:text-white  lg:rounded-2xl"
            }`}
            onClick={() => {
              dispatch({ type: "PRIVACY" });
            }}
          >
            <div className="flex flex-row items-center gap-5">
              <FaRegHandPaper size={20} />
              <p
                className={`text-[1.2rem] font-medium text-zinc-600 ${
                  stateValue === "privacy" && "lg:text-white"
                }`}
              >
                Privacy
              </p>
            </div>
            <FaAngleRight size={20} color="#c1c1c1" className="md:hidden" />
          </div>
          {/* notification */}
          <div
            className={`flex flex-row items-center justify-between lg:p-3 cursor-pointer ${
              stateValue === "notification" &&
              "lg:bg-zinc-900 lg:text-white  lg:rounded-2xl"
            }`}
            onClick={() => {
              dispatch({ type: "NOTIFICATION" });
            }}
          >
            <div className="flex flex-row items-center gap-5">
              <IoMdNotificationsOutline size={20} />
              <p
                className={`text-[1.2rem] font-medium text-zinc-600 ${
                  stateValue === "notification" && "lg:text-white"
                }`}
              >
                Notification
              </p>
            </div>
            <FaAngleRight size={20} color="#c1c1c1" className="md:hidden" />
          </div>
          {/* taxes */}
          <div
            className={`flex flex-row items-center justify-between lg:p-3 cursor-pointer ${
              stateValue === "taxes" &&
              "lg:bg-zinc-900 lg:text-white  lg:rounded-2xl"
            }`}
            onClick={() => {
              dispatch({ type: "TAXES" });
            }}
          >
            <div className="flex flex-row items-center gap-5">
              <CiCalculator1 size={20} />
              <p
                className={`text-[1.2rem] font-medium text-zinc-600 ${
                  stateValue === "taxes" && "lg:text-white"
                }`}
              >
                Taxes
              </p>
            </div>
            <FaAngleRight size={20} color="#c1c1c1" className="md:hidden" />
          </div>
          {/* payments */}
          <div
            className={`flex flex-row items-center justify-between lg:p-3 cursor-pointer ${
              stateValue === "payment" &&
              "lg:bg-zinc-900 lg:text-white  lg:rounded-2xl"
            }`}
            onClick={() => {
              dispatch({ type: "PAYMENT" });
            }}
          >
            <div className="flex flex-row items-center gap-5">
              <GrCurrency size={20} />
              <p
                className={`text-[1.2rem] font-medium text-zinc-600 ${
                  stateValue === "payment" && "lg:text-white"
                }`}
              >
                Payment
              </p>
            </div>
            <FaAngleRight size={20} color="#c1c1c1" className="md:hidden" />
          </div>
        </div>
        {/* show the data when the user click on the personal information */}
        {/* personal information */}
        <div>
          <Outlet />
        </div>
        {/* Login and security */}
        
        {/* privacy data */}
        {stateValue === "privacy" && (
          <div className="hidden lg:flex lg:gap-10 lg:flex-col lg:px-15 lg:py-7 lg:w-[70%]">
            <p className="text-3xl font-bold pb-10">Privacy</p>
            {/* show the login details and change password  */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-medium">Data Privacy</p>
                </div>
                <div>
                  <p
                    className="underline cursor-pointer"
                    onClick={() => toggle("editPassword")}
                  >
                    {openKey === "editPassword" ? <p>Cancel</p> : <p>Edit</p>}
                  </p>
                </div>
              </div>
            </div>
            {/* Deactivate your account */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-medium">Delete My Accont</p>
                  <p className="text-zinc-600">This action Cannot be Undone.</p>
                </div>
                <div>
                  <div
                    className=" cursor-pointer bg-black px-4 py-2 text-white rounded-2xl"
                    onClick={() => {
                      toggle("Delete");
                    }}
                  >
                    {openKey === "Delete" ? <p>Cancel</p> : <p>Delete</p>}
                  </div>
                </div>
              </div>
              {/* show the Delete button  */}
              {openKey === "Delete" && (
                <div className="flex flex-col gap-6">
                  <div>
                    <form action="">
                      <select
                        name=""
                        id=""
                        className="border-2 border-zinc-300 px-4 py-1 rounded-[0.4rem]"
                      >
                        <option value="">Select Reason (Optional)</option>
                        <option value="notgood">
                          I am not satisfied with my exprience on airbnb
                        </option>
                        <option value="">
                          I am not confident how airbnb treats my private data.
                        </option>
                        <option value="">
                          I don't want to use the airbnb more enough.
                        </option>
                        <option value="">Other reasons.</option>
                      </select>
                    </form>
                  </div>
                  <div className=" cursor-pointer bg-red-500 px-4 py-2 text-white rounded-2xl w-[40%]">
                    <p className="text-center">Delete</p>
                  </div>
                </div>
              )}
            </div>
            <div className="border-[0.8px] border-zinc-400 px-5 py-5 rounded-2xl flex flex-col gap-8">
              <div className="flex flex-row gap-3 items-center">
                <div>
                  <RiLockFill size={40} color="#da1249" />
                </div>
                <div>
                  <p className="font-bold text-[1.3rem]">
                    Committed to privacy
                  </p>
                  <p className="text-[#827f7f]">
                    Airbnb is committed to keeping your data protected. Read
                    details in our Privacy Policy. To help us improve your
                    experience, share your feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Notification */}
        {stateValue === "notification" && (
          <div className="hidden lg:block lg:px-8 lg:py-7 lg:w-[70%]">
            show the notifications
          </div>
        )}
        {/* show the taxes page */}
        {stateValue === "taxes" && (
          <div className="hidden lg:block lg:px-8 lg:py-7 lg:w-[70%]">
            show the taxes of the user when they travel.
          </div>
        )}
        {/* show the payment details */}
        {stateValue === "payment" && (
          <div className="hidden lg:block lg:px-8 lg:py-7 lg:w-[70%]">
            show the user payment details, which accoutn they want to add.
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountSetting;
