import React from "react";
import { useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import HeaderCommon from "../components/HeaderCommon";
import { MdOutlineAddHome } from "react-icons/md";
import { TbAirBalloon } from "react-icons/tb";
import { MdOutlineSoupKitchen } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { GrHelpBook } from "react-icons/gr";
import Footer from "../components/Footer";

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
        <div className="w-[20%] flex flex-col gap-3 px-10 py-10">
          <NavLink
            to="/host"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-blue-500 rounded-lg flex flex-row  px-2 gap-3 py-2 items-center text-white "
                : "font-bold  rounded-lg flex flex-row  px-2 gap-3 py-2 items-center"
            }
          >
            <div>
              <MdOutlineAddHome size={24} />
            </div>
            <p>Home Listing</p>
          </NavLink>
          {/* exprience listing */}
          <NavLink
            to="/host/expriencelisted"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-blue-500 rounded-lg flex flex-row  px-2 gap-3 py-2 items-center text-white "
                : "font-bold  rounded-lg flex flex-row  px-2 gap-3 py-2 items-center"
            }
          >
            <div>
              <TbAirBalloon size={24} />
            </div>
            <p>Exprience Listing</p>
          </NavLink>

          {/* services listing */}
          <NavLink
            to="/host/serviceslisted"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-blue-500 rounded-lg flex flex-row  px-2 gap-3 py-2 items-center text-white "
                : "font-bold  rounded-lg flex flex-row  px-2 gap-3 py-2 items-center"
            }
          >
            <div>
              <MdOutlineSoupKitchen  size={24} />
            </div>
            <p>Service Listing</p>
          </NavLink>
            {/* payment history  */}
            <NavLink
            to="/host/payment"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-blue-500 rounded-lg flex flex-row  px-2 gap-3 py-2 items-center text-white "
                : "font-bold  rounded-lg flex flex-row  px-2 gap-3 py-2 items-center"
            }
          >
            <div>
              <MdPayments size={24} />
            </div>
            <p>Payment</p>
          </NavLink>

          {/* help */}
          <NavLink
            to="/host/hotinghelp"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-blue-500 rounded-lg flex flex-row  px-2 gap-3 py-2 items-center text-white "
                : "font-bold  rounded-lg flex flex-row  px-2 gap-3 py-2 items-center"
            }
          >
            <div>
              <GrHelpBook size={24} />
            </div>
            <p>Hosting Help</p>
          </NavLink>
          
          {/*  adding some columns which lead to the  */}
          
        </div>
        <div className="border-l-2 border-zinc-200"></div>
        <div className="w-[70%]">
          <Outlet />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HostingPage;
