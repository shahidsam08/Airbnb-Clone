import React, { useEffect, useState } from "react";
import { Link, replace } from "react-router-dom";
import FooterBottom from "../components/FooterBottom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiFacebook } from "react-icons/si";
import Footer from "../components/Footer.jsx";
import { FaAirbnb } from "react-icons/fa6";
import { CgMenu } from "react-icons/cg";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useFormik } from "formik";
import { loginSchema, SignupSchema } from "../Validation/Schema.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { toast } from "react-toastify";
import { useReducer } from "react";
import api from "../api/axios.js";

const reducer = (_, action) => {
  switch (action.type) {
    case "SIGNUP":
      return "signup";
    case "LOGIN":
      return "login";
    default:
      return "signup";
  }
};

function Login() {
  const [Toggle, setToggle] = useState(false);
  // for show and hide the password
  const [showPassword, setShowPassword] = useState(false);
  const [showRepassword, setshowRepassword] = useState(false);

  const [state, dispatch] = useReducer(reducer, "signup");

  // useNavigate() for conditional routing.

  const navigate = useNavigate();

  // using the formik for form validation. and send to the server side.
  // for signup
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: SignupSchema,

    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await api.post(
          "/api/signup",

          values
        );

        console.log(response.data.message);
        if (response.data.message === "New User Created!") {
          toast.success("Welcome to airbnb");
          navigate("/", { replace: true });
        } else if (response.data.message === "Already Registered!") {
          toast.success("Already Registered. Go to login!");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  // for Login using the formik
  const LoginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,

    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post("/api/login", values);

        console.log(values);

        if (response.data.message === "Login Successfully") {
          toast.success("Welcome back, You are login successfully!");
          navigate("/");
        } else if (response.data.message === "Email not found") {
          resetForm();
          toast.error("Account not found! Create you Account");
        } else if (response.data.message === "password is incorrect") {
          toast.error("Password is Incorrect");
        } else {
          console.log("something else error");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  // using the axios store the login info and generate the jwt token from the backend.

  return (
    <div
      onClick={() => {
        if (window.screen.width >= 768 && Toggle === true) {
          setToggle(false);
        }
      }}
    >
      <div>
        {/* header only after medium size screen and large screen size */}
        <div className="hidden md:px-10 md:py-4 md:border-b-[1.1px] md:border-b-[#cfcece] md:flex md:flex-row md:items-center md:justify-between md:sticky md:top-0 z-100 md:bg-white">
          <FaAirbnb size={50} color="red" />
          <div className="flex flex-row items-center justify-center gap-8">
            <Link to="/host">
              <div className="px-3 py-2 rounded-2xl hover:bg-[#ebebebdd] text-[1rem]">
                Become a host
              </div>
            </Link>
            <div
              className="md:p-2 md:bg-[#efefef] md:w-fit md:rounded-4xl md:flex md:items-center md:justify-center relative cursor-pointer"
              onClick={() => {
                if (Toggle === false) {
                  setToggle(true);
                } else {
                  setToggle(false);
                }
              }}
            >
              <CgMenu size={25} color="black" />
            </div>
          </div>

          {/* show toggle data */}
          {Toggle ? (
            <div className="absolute top-23 right-16 bg-white  shadow-2xl w-60 py-3 rounded-2xl flex flex-col gap-2">
              {/* help center */}
              <Link
                to="/helpcenter"
                className="flex flex-row gap-2 items-center justify-start hover:bg-[#f1f0f0] pl-2 py-2"
              >
                <RxQuestionMarkCircled size={20} />
                <p className="text-[1rem]">Help Center</p>
              </Link>
              <div className="border-[0.2px] border-[#dfdcdc] "></div>
              {/* become a host */}
              <Link to="/host" className="hover:bg-[#f1f0f0]">
                <p className="text-[1.1rem] pl-2 py-2">Become a host</p>
              </Link>
              <div className="border-[0.2px] border-[#dfdcdc] "></div>
              {/* Refer a host */}
              <Link to="/refer-co-host" className="hover:bg-[#f1f0f0]">
                <p className="text-[1.1rem] pl-2 py-2">Refer a host</p>
              </Link>
              <div className="border-[0.2px] border-[#dfdcdc] "></div>
              {/* find a co host */}
              <Link to="/findcohost" className="hover:bg-[#f1f0f0]">
                <p className="text-[1.1rem] pl-2 py-2">Find a co-host</p>
              </Link>
              <div className="border-[0.2px] border-[#dfdcdc] "></div>
              {/* login or sign up  */}
              <Link to="/login" className="hover:bg-[#f1f0f0]">
                <p className="text-[1.1rem] pl-2 py-2">Login or signup</p>
              </Link>
            </div>
          ) : (
            " "
          )}
        </div>

        <div className="md:flex md:items-center md:justify-center md:my-20">
          <div className="md:flex md:flex-col md:w-[70%] lg:w-[65%] md:border-[1.1px] md:border-[#c1c1c1] md:rounded-4xl md:items-center ">
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-row self-center gap-8">
                <p
                  className={`text-[1.1rem] font-bold text-center px-4 pt-6 pb-1 rounded-[0.3rem] cursor-pointer  ${
                    state === "signup"
                      ? "md:border-b-[#ef1212] border-b-[4.5px]"
                      : ""
                  }`}
                  onClick={() => {
                    dispatch({ type: "SIGNUP" });
                  }}
                >
                  Sign UP
                </p>
                <p
                  className={`text-[1.1rem] font-bold text-center px-4 pt-6 pb-1 rounded-[0.3rem] cursor-pointer  ${
                    state === "login"
                      ? "md:border-b-[#ef1212] border-b-[4.5px]"
                      : ""
                  }`}
                  onClick={() => {
                    dispatch({ type: "LOGIN" });
                  }}
                >
                  Log In
                </p>
              </div>
            </div>
            {/* welcome to airbnb and country region , phone number and other login option. */}
            {/* welcom to airbnb */}
            {state === "signup" ? (
              <form
                className="px-5 flex flex-col gap-5 py-10 md:w-[80%]"
                autoComplete="off"
                onSubmit={formik.handleSubmit}
              >
                <p className="text-2xl font-medium">Welcome to Airbnb</p>
                <div className="flex flex-col gap-4 w-full">
                  <div className="w-full">
                    <input
                      className="w-full text-[1.2rem] py-4 px-2 outline-black border-[2.1px] rounded-[0.6rem] outline-inset-2 focus:rounded-[0.6rem]"
                      type="email"
                      placeholder="Enter your Email"
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {/* show the error if email format is wrong */}
                    <p className="text-red-500">{formik.errors.email}</p>
                  </div>
                  {/* user name */}
                  <div>
                    <input
                      className="w-full text-[1.2rem] py-4 px-2 outline-black border-[2.1px] rounded-[0.6rem] outline-inset-2 focus:rounded-[0.6rem]"
                      type="text"
                      placeholder="Enter your your name"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      id="username"
                      name="username"
                    />
                    <p className="text-red-500">{formik.errors.username}</p>
                  </div>
                  {/* show the error if name format is wrong */}

                  <div className="w-[full] relative">
                    {/* password */}
                    <input
                      className="w-full text-[1.2rem] py-4 px-2 outline-black border-[2.1px] rounded-[0.6rem] outline-inset-2 focus:rounded-[0.6rem]"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your your password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      id="password"
                      name="password"
                    />
                    <p
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-5 right-7"
                    >
                      {showPassword ? (
                        <GoEye size={20} />
                      ) : (
                        <GoEyeClosed size={20} />
                      )}
                    </p>

                    <p className="text-red-500">{formik.errors.password}</p>
                  </div>

                  {/* confirm password */}
                  <div className="w-[full] relative">
                    {/* password */}
                    <input
                      className="w-full text-[1.2rem] py-4 px-2 outline-black border-[2.1px] rounded-[0.6rem] outline-inset-2 focus:rounded-[0.6rem]"
                      type={showRepassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      id="confirmPassword"
                      name="confirmPassword"
                    />
                    <p
                      onClick={() => setshowRepassword(!showRepassword)}
                      className="absolute top-5 right-7"
                    >
                      {showRepassword ? (
                        <GoEye size={20} />
                      ) : (
                        <GoEyeClosed size={20} />
                      )}
                    </p>
                    <p className="text-red-500">
                      {formik.errors.confirmPassword}
                    </p>
                  </div>
                </div>
                <p className="text-[0.8rem] text-[#535151]">
                  We’ll call or text you to confirm your number. Standard
                  message and data rates apply.{" "}
                  <span className="underline font-bold">Privacy Policy</span>{" "}
                </p>
                <motion.button
                  whileHover={formik.isValid ? { scale: 1.02 } : ""}
                  whileTap={formik.isValid ? { scale: 0.9 } : ""}
                  type="submit"
                  disabled={formik.isSubmitting}
                  className={`bg-[#da1247eb] text-white text-[1.2rem] py-3 rounded-[0.4rem] ${
                    formik.isValid ? "" : "cursor-not-allowed"
                  }`}
                >
                  {formik.isSubmitting ? "Submitting..." : "Submit"}
                </motion.button>
                {!formik.isValid ? (
                  <p className="text-red-500 text-2xl">
                    Enter the valid information
                  </p>
                ) : (
                  ""
                )}
              </form>
            ) : (
              ""
            )}
            {/* ------------------- When you click on the login it show these two blocks ------------------------------------- */}
            {state === "login" ? (
              <form
                className="px-5 flex flex-col gap-5 py-10 md:w-[80%]"
                autoComplete="off"
                onSubmit={LoginFormik.handleSubmit}
              >
                <p className="text-2xl font-medium">Welcome to Airbnb</p>
                <div className="flex flex-col gap-4 w-full">
                  {/* email */}
                  <div className="w-full">
                    <input
                      className="w-full text-[1.2rem] py-4 px-2 outline-black border-[2.1px] rounded-[0.6rem] outline-inset-2 focus:rounded-[0.6rem]"
                      type="email"
                      placeholder="Enter your Email"
                      id="email"
                      name="email"
                      value={LoginFormik.values.email}
                      onChange={LoginFormik.handleChange}
                    />
                    {/* show the error if email format is wrong */}
                    <p className="text-red-500">{LoginFormik.errors.email}</p>
                  </div>
                  {/* password */}
                  <div className="w-[full] relative">
                    <input
                      className="w-full text-[1.2rem] py-4 px-2 outline-black border-[2.1px] rounded-[0.6rem] outline-inset-2 focus:rounded-[0.6rem]"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your your password"
                      value={LoginFormik.values.password}
                      onChange={LoginFormik.handleChange}
                      id="password"
                      name="password"
                    />
                    <p
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-5 right-7"
                    >
                      {showPassword ? (
                        <GoEye size={20} />
                      ) : (
                        <GoEyeClosed size={20} />
                      )}
                    </p>

                    <p className="text-red-500">
                      {LoginFormik.errors.password}
                    </p>
                  </div>
                </div>
                <p className="text-[0.8rem] text-[#535151]">
                  We’ll call or text you to confirm your number. Standard
                  message and data rates apply.{" "}
                  <span className="underline font-bold">Privacy Policy</span>{" "}
                </p>
                <motion.button
                  whileHover={LoginFormik.isValid ? { scale: 1.02 } : ""}
                  whileTap={LoginFormik.isValid ? { scale: 0.9 } : ""}
                  type="submit"
                  disabled={LoginFormik.isSubmitting}
                  className={`bg-[#da1247eb] text-white text-[1.2rem] py-3 rounded-[0.4rem] ${
                    LoginFormik.isValid ? "" : "cursor-not-allowed"
                  }`}
                >
                  {LoginFormik.isSubmitting ? "Submitting..." : "Submit"}
                </motion.button>
                {!LoginFormik.isValid ? (
                  <p className="text-red-500 text-2xl">
                    Enter the valid information
                  </p>
                ) : (
                  ""
                )}
              </form>
            ) : (
              ""
            )}

            {/* end of the login block */}

            {/* option to login  : facebook , google, apple, email*/}
            <div className="px-5 flex flex-col gap-5 py-10 md:w-[80%]">
              {/* continue with google */}
              <div className="flex flex-row items-center gap-10 px-8 py-4 w-full border-[1.6px] border-[#202020] rounded-[0.6rem] cursor-pointer">
                <FcGoogle size={25} />
                <p className="font-medium">Continue with Google</p>
              </div>
              {/* continue with apple */}
              <div className="flex flex-row items-center gap-10 px-8 py-4 w-full border-[1.6px] border-[#202020] rounded-[0.6rem] cursor-pointer">
                <FaApple size={25} />
                <p className="font-medium">Continue with Apple</p>
              </div>
              {/* continue with email */}
              <div className="flex flex-row items-center gap-10 px-8 py-4 w-full border-[1.6px] border-[#202020] rounded-[0.6rem] cursor-pointer">
                <MdOutlineMailOutline size={25} />
                <p className="font-medium">Continue with email</p>
              </div>
              {/* continue with facebook */}
              <div className="flex flex-row items-center gap-10 px-8 py-4 w-full border-[1.6px] border-[#202020] rounded-[0.6rem] cursor-pointer">
                <SiFacebook color="#1877F2" size={25} />
                <p className="font-medium">Continue with Facebook</p>
              </div>
            </div>
            {/* need help */}
            <div className="w-full pb-20 flex items-center justify-center md:hidden">
              <p className="underline font-medium hover:bg-[#f0efef94] px-4 py-3 rounded-4xl cursor-pointer">
                Need help?
              </p>
            </div>
          </div>
        </div>

        {/* fixed footer */}
        <div className="border-t-[0.1px] border-[#dedcdc] backdrop-blur-md sticky w-full bottom-0 md:hidden">
          <FooterBottom />
        </div>
        <div className="hidden md:block">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Login;

// login page : Auth page
