import React from 'react'
import { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { BsFillShieldLockFill } from "react-icons/bs";
import { RiLockFill } from "react-icons/ri";
import { PiEyeBold } from "react-icons/pi";

function Loginsecurity() {

  const [openKey, setOpenKey] = useState(null);
  
    const toggle = (key) => {
      setOpenKey((prev) => (prev === key ? null : key));
    };

    const { isAuthenticated, loading, setIsAuthenticated, user } =
    useContext(AuthContext);
  return (
    <div>
      <div className="hidden lg:flex lg:gap-10 lg:flex-col lg:px-15 lg:py-7 md:w-full">
            <p className="text-3xl font-bold pb-10">Login Details</p>
            {/* show the login details and change password  */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-medium">Login</p>
                  {openKey === "editPassword" ? (
                    <p className="text-zinc-600">Change Your Password</p>
                  ) : (
                    <p className="text-zinc-600">
                      Change Your Password Carefully!
                    </p>
                  )}
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
              {openKey === "editPassword" && (
                <div>
                  <form action="" className="flex flex-col gap-3">
                    <div className="w-[50%] border-[0.4px] rounded-lg p-2">
                      <p className="text-[0.9rem]  text-zinc-400 font-light">
                        New Password
                      </p>
                      <input
                        type="text"
                        name="password"
                        id="password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        className="w-full outline-none"
                      />
                    </div>
                    <div className="w-[50%] border-[0.4px] rounded-lg p-2">
                      <p className="text-[0.9rem]  text-zinc-400 font-light">
                        Confirm your Password
                      </p>
                      <input
                        type="text"
                        name="password"
                        id="password"
                        onChange={(e) => {
                          setPassword(e.target.value);
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
            {/* Deactivate your account */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-medium">Account</p>
                  <p className="text-zinc-600">This action Cannot be Undone.</p>
                </div>
                <div>
                  <div
                    className=" cursor-pointer bg-black px-4 py-2 text-white rounded-2xl"
                    onClick={() => {
                      toggle("Deactivate");
                    }}
                  >
                    {openKey === "Deactivate" ? (
                      <p>Cancel</p>
                    ) : (
                      <p>Deactivate</p>
                    )}
                  </div>
                </div>
              </div>
              {/* show the deactivate button  */}
              {openKey === "Deactivate" && (
                <div>
                  <div className=" cursor-pointer bg-red-500 px-4 py-2 text-white rounded-2xl w-[40%]">
                    <p className="text-center">Deactivate</p>
                  </div>
                </div>
              )}
            </div>
            <div className="border-[0.8px] border-zinc-400 px-5 py-5 rounded-2xl flex flex-col gap-8">
              <div className="flex flex-row gap-3 items-center">
                <div>
                  <BsFillShieldLockFill size={40} color="#da1249" />
                </div>
                <div>
                  <p className="font-bold text-[1.3rem]">
                    Why isn’t my info shown here?
                  </p>
                  <p className="text-[#827f7f]">
                    We’re hiding some account details to protect your identity.
                  </p>
                </div>
              </div>
              <div className="border-[0.4px] border-[#c1c1c1]"></div>
              <div className="flex flex-row gap-3 items-center">
                <div>
                  <RiLockFill size={40} color="#da1249" />
                </div>
                <div>
                  <p className="font-bold text-[1.3rem]">
                    Which details can be edited?
                  </p>
                  <p className="text-[#827f7f]">
                    Contact info and personal details can be edited. If this
                    info was used to verify your identity, you’ll need to get
                    verified again the next time you book – or to continue
                    hosting.
                  </p>
                </div>
              </div>
              <div className="border-[0.4px] border-[#c1c1c1]"></div>
              <div className="flex flex-row gap-3 items-center">
                <div>
                  <PiEyeBold size={40} color="#da1249" />
                </div>
                <div>
                  <p className="font-bold text-[1.3rem]">
                    What info is shared with others?
                  </p>
                  <p className="text-[#827f7f]">
                    Airbnb only releases contact information for Hosts and
                    guests after a reservation is confirmed.
                  </p>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Loginsecurity
