import React, {useState} from "react";
import { RiLockFill } from "react-icons/ri";

function Privacy() {
  const [openKey, setOpenKey] = useState(null);

  const toggle = (key) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };
  return (
    <div>
      <div className="hidden lg:flex lg:gap-10 lg:flex-col lg:px-15 lg:py-7 md:w-full">
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
              <p className="font-bold text-[1.3rem]">Committed to privacy</p>
              <p className="text-[#827f7f]">
                Airbnb is committed to keeping your data protected. Read details
                in our Privacy Policy. To help us improve your experience, share
                your feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
