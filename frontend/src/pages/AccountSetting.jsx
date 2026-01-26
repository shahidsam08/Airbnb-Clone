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
        <div className="flex flex-col gap-7 lg:gap-3 lg:py-7 lg:pb-80 lg:px-10 lg:w-[25%] lg:border-r-2 lg:border-zinc-200">
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
            <p>Personal Info</p>
          </NavLink>
          {/* login and security */}

          <NavLink
            to="/accountsetting/loginsecurity"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-blue-500 rounded-lg flex flex-row  px-2 gap-3 py-3 items-center text-white "
                : "font-bold  rounded-lg flex flex-row  px-2 gap-3 py-2 items-center"
            }
          >
            <div>
              <GrShieldSecurity size={24} />
            </div>
            <p>Login and security</p>
          </NavLink>
          {/* Privacy */}
          <NavLink
            to="/accountsetting/privacy"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-blue-500 rounded-lg flex flex-row  px-2 gap-3 py-3 items-center text-white "
                : "font-bold  rounded-lg flex flex-row  px-2 gap-3 py-2 items-center"
            }
          >
            <div>
              <FaRegHandPaper size={24} />
            </div>
            <p>Privacy</p>
          </NavLink>

          {/* notification */}
          <NavLink
            to="/accountsetting/notification"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-500 rounded-lg flex flex-row  px-2 gap-3 py-3 items-center text-white "
                : "font-bold  rounded-lg flex flex-row  px-2 gap-3 py-2 items-center"
            }
          >
            <div>
              <IoMdNotificationsOutline size={24} />
            </div>
            <p>Notification</p>
          </NavLink>

          {/* taxes */}
          <NavLink
            to="/accountsetting/taxes"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-blue-500 rounded-lg flex flex-row  px-2 gap-3 py-3 items-center text-white "
                : "font-bold  rounded-lg flex flex-row  px-2 gap-3 py-2 items-center"
            }
          >
            <div>
              <CiCalculator1 size={24} />
            </div>
            <p>Taxes</p>
          </NavLink>

          {/* payments */}
          <NavLink
            to="/accountsetting/payments"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-blue-500 rounded-lg flex flex-row  px-2 gap-3 py-3 items-center text-white "
                : "font-bold  rounded-lg flex flex-row  px-2 gap-3 py-2 items-center"
            }
          >
            <div>
              <GrCurrency size={24} />
            </div>
            <p>Payments</p>
          </NavLink>
        </div>
        {/* show the data when the user click on the personal information */}
        {/* personal information */}
        <div className="w-[75%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AccountSetting;
