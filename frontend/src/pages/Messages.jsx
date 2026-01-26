import React, { useEffect, useContext } from "react";
import HeaderCommon from "../components/HeaderCommon";
import Footer from "../components/Footer";
import FooterBottom from "../components/FooterBottom";
import { IoSearchOutline, IoSettingsOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import AuthContext from "../context/AuthContext.jsx";
import { useLocation, useNavigate } from "react-router-dom";

function Messages() {
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
      <HeaderCommon />
      <div className="flex flex-col gap-9 h-screen">
        <div className="flex flex-row items-center justify-between px-6 pt-10  bg-white">
          <p className="text-3xl font-bold">Messages</p>
          <div className="flex flex-row items-center gap-5">
            <div className="bg-zinc-200 w-fit p-2 rounded-full">
              <IoSearchOutline size={20} />
            </div>
            <div className="bg-zinc-200 w-fit p-2 rounded-full">
              <IoSettingsOutline size={20} />
            </div>
          </div>
        </div>
        {/* show messages */}
        <div className="flex flex-row gap-2 px-6 flex-wrap">
          <div className="px-4 py-2 bg-zinc-900 w-fit rounded-2xl ">
            <p className="text-white">All</p>
          </div>
          <div className="px-4 py-2 bg-zinc-900 w-fit rounded-2xl ">
            <p className="text-white">Hosting</p>
          </div>
          <div className="px-4 py-2 bg-zinc-900 w-fit rounded-2xl ">
            <p className="text-white">Travelling</p>
          </div>
        </div>

        {/* show messages */}
        <div className="flex flex-col items-center gap-3 justify-center w-[80%] self-center pt-20">
          <div>
            <FaRegMessage size={30} />
          </div>
          <p className="text-2xl text-center">You don’t have any messages</p>
          <p className="text-center">
            When you receive a new message, it will appear here.
          </p>
        </div>
      </div>

      <div className="hidden md:block">
        <Footer />
      </div>
      <div className="md:hidden sticky bottom-0">
        <FooterBottom />
      </div>
    </div>
  );
}

export default Messages;
