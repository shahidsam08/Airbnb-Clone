import React from "react";
import { useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import HeaderCommon from "../components/HeaderCommon";
import { MdOutlineAddHome } from "react-icons/md";

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
      {/* body */}

      <div className="flex flex-row">
        <div className="w-[20%] flex flex-col gap-3 px-10 py-20">
          <NavLink to="/host" className="bg-black rounded-lg flex flex-row  px-2 gap-3 py-2 items-center">
            <div>
              <MdOutlineAddHome size={24} color="white"/>
            </div>
            <p className="text-white">Home Listing</p>
          </NavLink>
          <div>Exprience Listing</div>
          <div>Services Listing</div>
          <div>Messages</div>
          <div>Payment History</div>
          <div></div>
        </div>
        <div className="border-l-2 border-zinc-700 h-screen"></div>
        <div className="w-[70%]"><Outlet /></div>
      </div>
    </div>
  );
}

export default HostingPage;
