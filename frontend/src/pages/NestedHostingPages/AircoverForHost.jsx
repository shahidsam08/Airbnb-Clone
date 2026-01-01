import React, { useRef } from "react";
import Footer from "../../components/Footer";
import { FaAirbnb } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdOutlineAddHome } from "react-icons/md";
import { FaX } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function AircoverForHost() {
  // handle sliding the image using angles( right and left)
  const sliderRef = useRef(null);

  // previous
  const scrollPrev = () => {
    sliderRef.current.scrollBy({
      left: -330,
      behavior: "smooth",
    });
  };
  // next
  const scrollNext = () => {
    sliderRef.current.scrollBy({
      left: 330,
      behavior: "smooth",
    });
  };
  return (
    <div className="md:flex md:flex-col bg-[#f6f4f4]">
      <div className="flex flex-col gap-10 px-5 py-5 sticky top-0 backdrop-blur-md ">
        <div className="flex flex-row items-center justify-between sticky top-0 ">
          <div>
            <Link to="/">
              <FaAirbnb size={40} color="red" />
            </Link>
          </div>
          <Link to="/login">
            <div className="bg-[#da1249] px-4 py-[0.2rem] rounded-[0.6rem] flex flex-row gap-2">
              <MdOutlineAddHome color="white" size={25} />
              <p className="text-white text-[1.1rem]">List your home</p>
            </div>
          </Link>
        </div>
      </div>
      {/* air cover for hosts */}
      <div className="bg-[#f6f4f4] px-5 py-15 md:flex md:flex-col">
        {/* main heading */}
        <div className="flex flex-col gap-4  items-center mb-20 md:w-[80%] md:self-center">
          <div className="flex flex-col items-center">
            <p className="text-7xl px-2 text-center font-bold text-[#262626] md:text-8xl lg:text-[10rem]">
              <span className="text-[#f94373] ">air</span>cover
            </p>
            <p className="text-[2.2rem] lg:text-[5rem]">for Hosts</p>
          </div>
          <p className="text-center text-2xl  w-[90%]  text-[#4f4e4e] md:w-[80%] md:text-3xl lg:w-[60%]">
            Top-to-bottom protection. Always included, always free. Only on
            Airbnb.
          </p>
        </div>
        {/* Guest identity verification */}
        <div className="flex flex-col gap-5 md:w-[70%] md:self-center">
          {/* first items */}
          <div className="border-[#dedcdc] border-[1.4px]"></div>
          <div className="flex flex-col gap-2 pb-5">
            <p className="text-[1.6rem] font-medium text-[#2a2929]">
              Guest identity verification
            </p>
            <p className="text-[1.2rem] text-[#6e6d6d] font-light">
              Our comprehensive verification system checks details such as name,
              address, government ID and more to confirm the identity of guests
              who book on Airbnb.
            </p>
          </div>
          {/* second */}
          <div className="border-[#dedcdc] border-[1.4px]"></div>
          <div className="flex flex-col gap-2 pb-5">
            <p className="text-[1.6rem] font-medium text-[#2a2929]">
              Reservation screening
            </p>
            <p className="text-[1.2rem] text-[#6e6d6d]">
              Our proprietary technology analyses hundreds of factors in each
              reservation and blocks certain bookings that show a high risk for
              disruptive parties and property damage.
            </p>
          </div>
          {/* third */}
          <div className="border-[#dedcdc] border-[1.4px]"></div>
          <div className="flex flex-col gap-4 pb-5">
            <p className="text-[1.6rem] font-medium text-[#2a2929]">
              $3m USD damage protection
            </p>
            <p className="text-[1.2rem] text-[#6e6d6d] pb-6">
              If guests do not pay for the damage caused to your home and
              belongings, Host damage protection is in place to help reimburse
              costs up to $3m USD, including these specialised protections:
            </p>

            <div className="md:grid lg:grid-cols-2 lg:gap-6 lg:items-end grid gap-3">
              {/* first subtopic */}
              <div className="flex flex-col gap-2 lg:col-span-1">
                <p className="text-[1.3rem] font-light text-[#212020]">
                  Art & valuables
                </p>
                <p className="text-[1.1rem] font-light text-[#6e6d6d] pb-5">
                  Get reimbursed for damaged art or valuables.
                </p>
                <div className="border-[#d2d0d0] border-[0.9px] hidden lg:block"></div>
              </div>
              <div className="border-[#d2d0d0] border-[0.9px] lg:hidden"></div>
              {/* second subtopic */}
              <div className="flex flex-col gap-2">
                <p className="text-[1.3rem] font-light text-[#212020]">
                  Auto & boat
                </p>
                <p className="text-[1.1rem] font-light text-[#6e6d6d] pb-5">
                  Get reimbursed for damage to cars, boats and other watercraft
                  that you park or store at your home.
                </p>
                <div className="border-[#d2d0d0] border-[0.9px] hidden lg:block"></div>
              </div>
              <div className="border-[#d2d0d0] border-[0.9px] lg:hidden"></div>
              {/* third subtopic */}
              <div className="flex flex-col gap-2">
                <p className="text-[1.3rem] font-light text-[#212020]">
                  Pet damage
                </p>
                <p className="text-[1.1rem] font-light text-[#6e6d6d] pb-5">
                  Get reimbursed for damage caused by a guest’s pet.
                </p>
                <div className="border-[#d2d0d0] border-[0.9px] hidden lg:block"></div>
              </div>
              <div className="border-[#d2d0d0] border-[0.9px] lg:hidden"></div>
              {/* fourth subtopic */}
              <div className="flex flex-col gap-2">
                <p className="text-[1.3rem] font-light text-[#212020]">
                  Income loss
                </p>
                <p className="text-[1.1rem] font-light text-[#6e6d6d] pb-5">
                  If you have to cancel Airbnb bookings due to guest damage,
                  you'll be compensated for the lost income.
                </p>
                <div className="border-[#d2d0d0] border-[0.9px] hidden md:block"></div>
              </div>
              <div className="border-[#d2d0d0] border-[0.9px] md:hidden"></div>
              {/* fifth subtopic */}
              <div className="flex flex-col gap-2">
                <p className="text-[1.3rem] font-light text-[#212020]">
                  Deep cleaning
                </p>
                <p className="text-[1.1rem] font-light text-[#6e6d6d] pb-5">
                  Get reimbursed for extra cleaning services required to remove
                  stains and smoke odours.
                </p>
              </div>
            </div>
          </div>
          {/* fourth */}
          <div className="border-[#dedcdc] border-[1.4px]"></div>
          <div className="flex flex-col gap-2 pb-5">
            <p className="text-[1.6rem] font-medium text-[#2a2929]">
              $1m USD liability insurance
            </p>
            <p className="text-[1.2rem] text-[#6e6d6d]">
              Protection in the rare event that a guest gets hurt or their
              belongings are damaged or stolen.
            </p>
          </div>
          {/* fifth */}
          <div className="border-[#dedcdc] border-[1.4px]"></div>
          <div className="flex flex-col gap-2 pb-5">
            <p className="text-[1.6rem] font-medium text-[#2a2929]">
              24-hour safety line
            </p>
            <p className="text-[1.2rem] text-[#6e6d6d]">
              If you ever feel unsafe, our app provides one-tap access to
              specially trained safety agents, day or night.
            </p>
          </div>

          <div className="border-[#dedcdc] border-[1.4px]"></div>

          <div>
            <p className="text-[0.97rem] text-[#838080] font-light">
              Find complete details on{" "}
              <span className="underline font-medium text-[#474747]">
                {" "}
                how AirCover for Hosts protects you
              </span>{" "}
              and any exclusions that apply.
            </p>
          </div>
        </div>
      </div>
      {/* Only airbnb gives you aircover */}
      <div className="bg-[#f6f4f4] px-5 py-15 flex flex-col gap-2 md:w-[90%] lg:w-[70%] md:self-center">
        <p className="text-4xl w-[90%] font-medium pb-12">
          Only Airbnb gives you AirCover
        </p>
        {/* format  */}
        <div className="flex flex-row ">
          <div className="w-[50%] ">
            <p className="text-[1.3rem] leading-7"></p>
          </div>
          <div className="flex flex-row items-center gap-5 align-middle justify-around w-[50%]">
            <p>Airbnb</p>
            <p>Competitors</p>
          </div>
        </div>
        <div className="border-[#dedcdc] border-[1.4px]"></div>
        {/* guest identity verification : first */}
        <div className="flex flex-row py-3">
          <div className="w-[50%] ">
            <p className="text-[1.3rem] leading-7">
              Guest identity verification
            </p>
          </div>
          <div className="flex flex-row gap-5 items-center align-middle  justify-around w-[50%]">
            <FaCheck color="green" size={24} />
            <FaCheck color="green" size={24} />
          </div>
        </div>
        {/* second */}
        <div className="border-[#dedcdc] border-[1.4px]"></div>
        <div className="flex flex-row py-3">
          <div className="w-[50%] ">
            <p className="text-[1.3rem] leading-7">Reservation screening</p>
          </div>
          <div className="flex flex-row gap-5 items-center align-middle  justify-around w-[50%]">
            <FaCheck color="green" size={24} />
            <FaCheck color="green" size={24} />
          </div>
        </div>
        {/* third */}
        <div className="border-[#dedcdc] border-[1.4px]"></div>
        <div className="flex flex-row py-3">
          <div className="w-[50%] ">
            <p className="text-[1.3rem] leading-7">$3m USD damage protection</p>
          </div>
          <div className="flex flex-row gap-5 items-center align-middle  justify-around w-[50%]">
            <FaCheck color="green" size={24} />
            <FaX color="red" size={24} />
          </div>
        </div>
        {/* fourth */}
        <div className="border-[#dedcdc] border-[1.4px]"></div>
        <div className="flex flex-row py-3">
          <div className="w-[50%] ">
            <p className="text-[1.3rem] leading-7">
              $1m USD liability insurance
            </p>
          </div>
          <div className="flex flex-row gap-5 items-center align-middle  justify-around w-[50%]">
            <FaCheck color="green" size={24} />
            <FaCheck color="green" size={24} />
          </div>
        </div>
        {/* fifth */}
        <div className="border-[#dedcdc] border-[1.4px]"></div>
        <div className="flex flex-row py-3">
          <div className="w-[50%] ">
            <p className="text-[1.3rem] leading-7">24-hour safety line</p>
          </div>
          <div className="flex flex-row gap-5 items-center align-middle  justify-around w-[50%]">
            <FaCheck color="green" size={24} />
            <FaX color="red" size={24} />
          </div>
        </div>
        <div className="border-[#dedcdc] border-[1.4px]"></div>
      </div>

      {/* slide image */}
      <div className="bg-white  py-10">
        <div
          ref={sliderRef}
          className="flex flex-row gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide px-8 pb-6"
        >
          {/* first */}
          <div className="flex flex-col gap-4">
            <img
              src="https://a0.muscache.com/im/pictures/096b3e9f-31f9-4743-a609-69b79b692951.jpg?im_w=720"
              alt="yourspace"
              className="rounded-3xl h-90 min-w-78"
            />
            <div className="flex flex-col gap-1 items-center">
              <p className="text-[0.9rem] font-semibold text-center text-wrap text-[#383737] max-w-[70%]">
                Painting and other artwork are protected
              </p>
            </div>
          </div>
          {/* second */}
          <div className="flex flex-col gap-4">
            <img
              src="https://a0.muscache.com/im/pictures/3b4de967-3d0e-4692-b09a-3617dec4d97b.jpg?im_w=720"
              alt="yourspace"
              className="rounded-3xl h-90 min-w-78"
            />
            <div className="flex flex-col gap-1 items-center">
              <p className="text-[0.9rem] font-semibold text-center text-wrap text-[#383737] max-w-[70%]">
                Antique and other valuable are protected
              </p>
            </div>
          </div>
          {/* third */}
          <div className="flex flex-col gap-4">
            <img
              src="https://a0.muscache.com/im/pictures/963a1e9e-cf79-4452-a8e4-aa6206530b92.jpg?im_w=720"
              alt="yourspace"
              className="rounded-3xl h-90 min-w-78"
            />
            <div className="flex flex-col gap-1 items-center">
              <p className="text-[0.9rem] font-semibold text-center text-wrap text-[#383737] max-w-[70%]">
                Boats and other vehicles are protected
              </p>
            </div>
          </div>
          {/* fourth */}
          <div className="flex flex-col gap-4">
            <img
              src="https://a0.muscache.com/im/pictures/2d7dd2b4-9ff1-4905-a1bc-219e9bbe9705.jpg?im_w=720"
              alt="yourspace"
              className="rounded-3xl h-90 min-w-78"
            />
            <div className="flex flex-col gap-1 items-center">
              <p className="text-[0.9rem] font-semibold text-center text-wrap text-[#383737] max-w-[70%]">
                Cars and other automobiles are protected
              </p>
            </div>
          </div>
          {/* fifth */}
          <div className="flex flex-col gap-4">
            <img
              src="https://a0.muscache.com/im/pictures/3b4de967-3d0e-4692-b09a-3617dec4d97b.jpg?im_w=720"
              alt="yourspace"
              className="rounded-3xl h-90 min-w-78"
            />
            <div className="flex flex-col gap-1 items-center">
              <p className="text-[0.9rem] font-semibold text-center text-wrap text-[#383737] max-w-[70%]">
                Antique and other valuables are protected
              </p>
            </div>
          </div>
        </div>
        {/* clickable picture scrolling */}
        <div className="px-5 pb-10 flex flex-row gap-6 items-center justify-center ">
          <div onClick={scrollPrev} className="p-2 rounded-[50%] bg-[#e62424]">
            <FaAngleLeft color="white" />
          </div>
          <div onClick={scrollNext} className="p-2 rounded-[50%] bg-[#e62424]">
            <FaAngleRight color="white" />
          </div>
        </div>
      </div>

      <div>
        {/* The super easy way to airbnb your place */}
        <div>
          <div className="px-5 py-10 bg-white flex flex-col items-center gap-8">
            <p className="text-4xl w-[80%] text-center font-bold ">
              The super easy way to Airbnb your place
            </p>
            <p className="text-center text-[1.24rem] font-light text-[#5b5959] ">
              Airbnb Setup makes it easier to put your place on Airbnb, with
              hands-on help from a Superhost from your first question to your
              first guest.
            </p>
            <Link to="/login">
              <div className="bg-[#da1249] px-8 py-3 rounded-[0.6rem] flex flex-row gap-2">
                <MdOutlineAddHome color="white" size={30} />
                <p className="text-white text-[1.3rem]">List your home</p>
              </div>
            </Link>
          </div>
          <div>
            <img
            src="https://a0.muscache.com/im/pictures/ce899d37-7ba9-4840-8cfb-8cbb4889f0bc.jpg"
            alt="customer"
            className="bg-gray-800 w-full "
          />
          </div>
        </div>
      </div>
      {/* footer part */}
      <Footer />
    </div>
  );
}

export default AircoverForHost;
