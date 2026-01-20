import React from "react";
import { useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import HeaderCommon from "../components/HeaderCommon";

import NewListing from "./NewHost_history_services/HomeLilsting/NewListing";

function HostingPage() {
  const { isAuthenticated, loading, setIsAuthenticated, user } =
    useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/", { replace: true });
    }
  });

  return (
    <div>
      <div>
        <HeaderCommon />
      </div>
      {/* hosting body parts */}
      <div className="flex flex-row items-center justify-center py-5">
        <div className="flex flex-row items-center justify-center gap-3 border-[1.1px] rounded-full p-[0.2rem]">
          {/* new listing */}
          <NavLink
            to="/host"
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded-full font-bold transition-all duration-300 ease-in-out
             ${
               isActive
                 ? "bg-black text-white font-bold"
                 : "text-gray-700 hover:bg-gray-200"
             }`
            }
          >
            <p>Home</p>
          </NavLink>
          {/* exprience */}
          <NavLink
            to="/host/expriencelisted"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full font-bold transition-all duration-300 ease-in-out
             ${
               isActive
                 ? "bg-black text-white font-bold"
                 : "text-gray-700 hover:bg-gray-200"
             }`
            }
          >
            <p>Exprience</p>
          </NavLink>
          {/* services */}
          <NavLink
            to="/host/serviceslisted"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full font-bold transition-all duration-300 ease-in-out
             ${
               isActive
                 ? "bg-black text-white font-bold"
                 : "text-gray-700 hover:bg-gray-200"
             }`
            }
          >
            <p>Services</p>
          </NavLink>
        </div>
      </div>

      <Outlet />

      {/* <NewListing /> */}
    </div>
  );
}

export default HostingPage;
