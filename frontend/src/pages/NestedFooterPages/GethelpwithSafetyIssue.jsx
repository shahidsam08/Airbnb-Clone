import React from 'react'
import { FaAirbnb } from "react-icons/fa6";
import { MdSearch } from "react-icons/md";
import Footer from '../../components/Footer';
import { Link } from "react-router-dom"

function GethelpwithSafetyIssue() {
  return (
    <div>
      {/* navbar of this page */}
      <div className='flex flex-row items-center align-middle justify-between px-2 py-4 border-b-[0.3px]'>
          <div className='flex flex-row align-middle  items-center gap-1'>
            <Link to="/"><FaAirbnb size={45}/></Link>
            <Link to="/helpcenter" className='text-[1.3rem] font-medium'>Help Centre</Link>
          </div>
          <div>
            <MdSearch size={25} />
          </div>
      </div>
      {/* body parts of this page. */}
      <div className='pb-20'>
        <div className='px-3 pt-12 pb-22 flex flex-col gap-5 '>
          <h2 className='text-4xl font-extrabold text-gray-700'>Log in to contact us</h2>
          <p className='text-[1.2rem] font-light text-gray-800'>This will help us quickly identify you and get you the right kind of help</p>
          <div className='flex flex-row gap-2'>
            <button className='bg-[#008489] text-white font-medium px-7 py-3 text-[1.2rem] rounded-[0.3rem]'>Log In</button>
            <button className='font-extrabold px-7 py-3 text-[1.2rem] rounded-[0.3rem] border-2 border-[#008489] text-[#008489]'>Sign Up</button>
          </div>
        </div>
         {/* These article might help */}
         <div>
          <div className='border-t-[0.1px] mx-3'></div>
          {/* Starting of the body main parts */}
          <div className='px-3 py-8 flex flex-col gap-10'>
            <p className='text-[1.7rem] font-bold text-gray-700'>These articles might help</p>
            <div className='flex flex-col gap-4'>
              <p className='text-[1.6rem] font-bold text-gray-700 '>Getting started</p>
              <p className='text-[1.2rem] underline text-gray-800 font-light'>Create an account</p>
              <p className='text-[1.2rem] underline text-gray-800 font-light'>Airbnb Referral program Terms and Condition</p>
              <p className='text-[1.2rem] underline text-gray-800 font-light'>Search for airbnb home listing</p>
              <p className='text-[1.2rem] underline text-gray-800 font-light'>Contacting Host</p>
            </div>

            {/* your account links */}
            <div className='flex flex-col gap-4'>
              <p className='text-[1.6rem] font-bold text-gray-700 '>Your account</p>
              <p className='text-[1.2rem] underline text-gray-800 font-light'>Reset or change your password</p>
              <p className='text-[1.2rem] underline text-gray-800 font-light'>Add or remove a payment method</p>
              <p className='text-[1.2rem] underline text-gray-800 font-light'>Add a payout method</p>
              <p className='text-[1.2rem] underline text-gray-800 font-light'>Deactivating or deleting your account</p>
            </div>

            {/* Trust and safety */}
            <div className='flex flex-col gap-4'>
              <p className='text-[1.6rem] font-bold text-gray-700 '>Trust and safety</p>
              <p className='text-[1.2rem] underline text-gray-800 font-light'>Verifying your identity on Airbnb</p>
              <p className='text-[1.2rem] underline text-gray-800 font-light'>What to do if a host isn't responding</p>
              <p className='text-[1.2rem] underline text-gray-800 font-light'>If a host asks you to pay outside Airbnb</p>
              <p className='text-[1.2rem] underline text-gray-800 font-light'>Paying and communicating through Airbnb</p>
            </div>
          </div>
         </div>
      </div>
      <Footer />
    </div>
  )
}

export default GethelpwithSafetyIssue
