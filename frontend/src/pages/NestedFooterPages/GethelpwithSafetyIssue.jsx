import React from 'react'
import { FaAirbnb } from "react-icons/fa6";
import { MdSearch } from "react-icons/md";

function GethelpwithSafetyIssue() {
  return (
    <div>
      <nav className='flex flex-row items-center align-middle justify-between px-2 py-4 border-b-[0.3px]'>
          <div className='flex flex-row align-middle  items-center gap-1'>
            <FaAirbnb size={45}/>
            <p className='text-[1.3rem] font-medium'>Help Centre</p>
          </div>
          <div>
            <MdSearch size={25} />
          </div>
      </nav>
      <body>
        <div className='px-3 py-15 flex flex-col gap-5'>
          <h2 className='text-4xl font-extrabold text-gray-700'>Log in to contact us</h2>
          <p className='text-[1.2rem] font-light text-gray-800'>This will help us quickly identify you and get you the right kind of help</p>
          <div className='flex flex-row gap-2'>
            <button className='bg-[#008489] text-white font-medium px-7 py-3 text-[1.2rem] rounded-[0.3rem]'>Log In</button>
            <button className='font-extrabold px-7 py-3 text-[1.2rem] rounded-[0.3rem] border-2 border-[#008489] text-[#008489]'>Sign Up</button>
          </div>
        </div>
      </body>
    </div>
  )
}

export default GethelpwithSafetyIssue
