import React, { useReducer, useEffect, useContext, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { RiUserLine } from "react-icons/ri";
import { FaRegHandPaper } from "react-icons/fa";
import { GrShieldSecurity } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiCalculator1 } from "react-icons/ci";
import { GrCurrency } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import HeaderCommon from "../components/HeaderCommon";
import AuthContext from "../context/AuthContext";

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
        onClick={() => navigate("/")}
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
        <div className="flex flex-col gap-7 lg:gap-3 lg:py-7 lg:pb-80 lg:px-10 lg:w-[30%] lg:border-r-2 lg:border-zinc-200">
          {/* Personal Information  */}
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
        {stateValue === "personalinfo" && (
          <div className="hidden lg:flex lg:gap-10 lg:flex-col lg:px-15 lg:py-7 lg:w-[70%]">
            <p className="text-3xl font-bold pb-10">Personal Information</p>
            {/* show the name and edit option */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-medium">Legal name</p>
                  {openKey === "editname" ? (
                    <p className="text-zinc-600">
                      Make sure this matches the name on your government ID.
                    </p>
                  ) : (
                    <p className="text-zinc-500">
                      {user?.username?.toUpperCase()}
                    </p>
                  )}
                </div>
                <div>
                  <p
                    className="underline cursor-pointer"
                    onClick={() => toggle("editname")}
                  >
                    {openKey === "editname" ? <p>Cancel</p> : <p>Edit</p>}
                  </p>
                </div>
              </div>
              {openKey === "editname" && (
                <div>
                  <form action="" className="flex flex-col gap-3">
                    <div className="w-[50%] border-[0.4px] rounded-lg p-2">
                      <p className="text-[0.9rem]  text-zinc-400 font-light">
                        Set Your Name
                      </p>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        defaultValue={user?.username}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        className="w-full outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="self-start bg-black text-white px-6 py-2 text-[1.3rem] rounded-lg"
                    >
                      Save
                    </button>
                  </form>
                </div>
              )}
            </div>
            {/* show the email */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-medium">Email Address</p>
                  {openKey === "editEmail" ? (
                    <p className="text-zinc-600">
                      Use an address you’ll always have access to. 
                    </p>
                  ) : (
                    <p className="text-zinc-500">
                      {user?.email}
                    </p>
                  )}
                </div>
                <div>
                  <p
                    className="underline cursor-pointer"
                    onClick={() => toggle("editEmail")}
                  >
                    {openKey === "editEmail" ? <p>Cancel</p> : <p>Change</p>}
                  </p>
                </div>
              </div>
              {openKey === "editEmail" && (
                <div>
                  <form action="" className="flex flex-col gap-3">
                    <div className="w-[50%] border-[0.4px] rounded-lg p-2">
                      <p className="text-[0.9rem]  text-zinc-400 font-light">
                        Set Your Email
                      </p>
                      <input
                        type="text"
                        name="useremail"
                        id="useremail"
                        defaultValue={user?.email}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        className="w-full outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="self-start bg-black text-white px-6 py-2 text-[1.3rem] rounded-lg"
                    >
                      Save
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
        {/* Login and security */}
        {stateValue === "logsecurity" && (
          <div className="hidden lg:block lg:px-8 lg:py-7 lg:w-[70%]">
            show the login and security of the user
          </div>
        )}
        {/* privacy data */}
        {stateValue === "privacy" && (
          <div className="hidden lg:block lg:px-8 lg:py-7 lg:w-[70%]">
            show the privacy of the user
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
