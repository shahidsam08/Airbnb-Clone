import React from "react";
import FooterBottom from "../components/FooterBottom";

function Login() {
  return (
    <div>
      <div>
        <div>
          <p className="text-[1.1rem] font-bold text-center py-5 border-b-[0.2px] border-b-[#dedcdc]">Log in or sign up</p>
        </div>
        {/* welcome to airbnb and country region , phone number and other login option. */}
        <div className="border-t-[0.1px] border-[#dedcdc] backdrop-blur-md fixed w-full bottom-0">
          <FooterBottom />
        </div>
      </div>
    </div>
  );
}

export default Login;

// login page : Auth page
