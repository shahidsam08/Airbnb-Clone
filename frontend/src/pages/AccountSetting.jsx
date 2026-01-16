import React, { useReducer, useEffect, useContext } from "react";
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

// use the useReducer()
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
  const navigate = useNavigate();

  // using the useReducer() for the conditionally rendering.
  const [stateValue, dispatch] = useReducer(reducer, "personalinfo");



  const { isAuthenticated, loading, setIsAuthenticated, user } =
    useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/", { replace: true });
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
            className={`flex flex-row items-center justify-between lg:p-3 ${
              stateValue === "personalinfo" &&
              "lg:bg-zinc-900 lg:text-white  lg:rounded-2xl"
            }`}
            onClick={() => {
              dispatch({ type: "PERSONALINFO" });
            }}
          >
            <div className="flex flex-row items-center gap-5">
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
            className={`flex flex-row items-center justify-between lg:p-3 ${
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
            className={`flex flex-row items-center justify-between lg:p-3 ${
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
            className={`flex flex-row items-center justify-between lg:p-3 ${
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
            className={`flex flex-row items-center justify-between lg:p-3 ${
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
            className={`flex flex-row items-center justify-between lg:p-3 ${
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
        <div className="hidden lg:block lg:px-8 lg:py-7 lg:w-[70%]">
          this is hte data show when the user tap on any of the related topics
        </div>
      </div>
    </div>
  );
}

export default AccountSetting;
