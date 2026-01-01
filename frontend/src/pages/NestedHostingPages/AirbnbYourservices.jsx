import React from "react";
import Footer from "../../components/Footer.jsx";
import { FaAirbnb } from "react-icons/fa6";
import { Link } from "react-router-dom";

function AirbnbYourservices() {
  return (
    <div>
      <div className="flex flex-col gap-10 px-5 py-10 md:gap-15">
        <div className="md:flex md:flex-row md:items-center md:justify-between">
          {/* airbnb logo not sticky or fixed. */}
          <div className="w-fit">
            <Link to="/">
              <FaAirbnb size={45} color="red" />
            </Link>
          </div>
          <div className="hidden md:block">
            <Link
              to="/login"
              className="bg-[#da1249] w-[90%] py-3 text-center text-[1.2rem] rounded-4xl text-white px-3"
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* get paid to do what you love */}
        <div className="flex flex-col gap-6 items-center justify-center md:flex md:flex-row md:items-center md:pt-20">
          <div className="flex flex-col items-center justify-center px-3 gap-3 md:w-[40%]">
            <p className="text-4xl font-bold text-center md:text-5xl">
              Give your business a new home
            </p>
            <p className="text-center w-[80%] text-[1.3rem] md:text-[1.6rem]">
              Now your service can reach millions of people on Airbnb.
            </p>
          </div>
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1727297676509/original/dd948131-a986-425f-8e4b-1e67e47824fb.jpeg?im_w=1200"
            alt=""
            className="md:w-[40%]"
          />
        </div>
        {/* Offer what you do best with Airbnb Services*/}
        <div className="flex flex-col gap-8 items-center py-15">
          <p className="text-center text-[2.1rem] leading-9 font-semibold text-[#2c2c2c] md:w-[80%] lg:w-[60%] md:text-6xl md:leading-17 md:font-bold">
            Offer what you do best with Airbnb Services
          </p>
          <p className="text-center text-[1.3rem] leading-7 w-[90%] font-light text-[#585656] md:text-[1.5rem] lg:text-[2rem] md:w-[80%] lg:w-[60%]">
            Airbnb is for more than homes. Now it’s for businesses like yours.
          </p>
          {/* offer by host */}
          <div className=" grid grid-cols-2 flex-wrap items-center justify-center gap-15 md:grid md:grid-cols-2 md:gap-20 md:pt-20 lg:grid-cols-5 md:w-[80%] lg:w-[70%]">
            {/* first */}
            <div className="flex flex-col gap-1 items-center ">
              <img
                src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745435097487/original/53e2886b-a9fc-483d-9fda-1a2c66f943fa.jpeg?im_w=480"
                alt="canteen"
                className="w-25"
              />
              <p className="text-[1.2rem] text-[#565454]">Catering</p>
            </div>
            {/* second */}
            <div className="flex flex-col gap-1 items-center ">
              <img
                src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745602639670/original/17becbb3-ff07-486a-9edf-3b5380b2073d.jpeg?im_w=480"
                alt="canteen"
                className="w-25"
              />
              <p className="text-[1.2rem] text-[#565454]">Chefs</p>
            </div>
            {/* third */}
            <div className="flex flex-col gap-1 items-center ">
              <img
                src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745435218016/original/e5e3039f-3d1d-4dd8-be35-b963256f7e3b.jpeg?im_w=480"
                alt="canteen"
                className="w-25"
              />
              <p className="text-[1.2rem] text-[#565454]">Hairstyling</p>
            </div>
            {/* fourth */}
            <div className="flex flex-col gap-1 items-center ">
              <img
                src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745435252376/original/d7a62b38-4c80-4c91-b06e-2be7189d13b9.jpeg?im_w=480"
                alt="canteen"
                className="w-25"
              />
              <p className="text-[1.2rem] text-[#565454]">Make-up</p>
            </div>
            <div className="flex flex-col gap-1 items-center ">
              <img
                src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745435276618/original/3c38f63a-8d5a-4265-9e32-58f103cbea61.jpeg?im_w=480"
                alt="canteen"
                className="w-25"
              />
              <p className="text-[1.2rem] text-[#565454]">Massage</p>
            </div>
            <div className="flex flex-col gap-1 items-center ">
              <img
                src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745435312596/original/dc365357-da21-4d83-b24f-5233835a8275.jpeg?im_w=480"
                alt="canteen"
                className="w-25"
              />
              <p className="text-[1.2rem] text-[#565454]">Nails</p>
            </div>
            <div className="flex flex-col gap-1 items-center ">
              <img
                src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745435335977/original/92f00797-2318-45c3-a425-829a8bafa48f.jpeg?im_w=480"
                alt="canteen"
                className="w-25"
              />
              <p className="text-[1.2rem] text-[#565454]">Personal Training</p>
            </div>
            <div className="flex flex-col gap-1 items-center ">
              <img
                src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745435391001/original/927b4c14-55db-41d5-9093-adf6f419aba0.jpeg?im_w=480"
                alt="canteen"
                className="w-25"
              />
              <p className="text-[1.2rem] text-[#565454]">Photography</p>
            </div>
            <div className="flex flex-col gap-1 items-center ">
              <img
                src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745435412233/original/a11425d2-5a1a-4da2-ac92-1bd246300cad.jpeg?im_w=480"
                alt="canteen"
                className="w-25"
              />
              <p className="text-[1.2rem] text-[#565454]">Prepared meals</p>
            </div>
            <div className="flex flex-col gap-1 items-center ">
              <img
                src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745435442988/original/025a928a-4e57-4000-90a9-6142f101e85c.jpeg?im_w=480"
                alt="canteen"
                className="w-25"
              />
              <p className="text-[1.2rem] text-[#565454]">Spa treatments</p>
            </div>
          </div>
        </div>
        {/* welcome a world of new customer */}
        <div className=" flex flex-col gap-5 items-center justify-center md:w-[80%] md:self-center lg:w-[60%]">
          <p className="text-center w-[90%] text-3xl font-bold text-[#323131] md:text-6xl md:w-[70%]">
            Welcome a world of new customers
          </p>
          <p className="text-center w-[90%] text-[1.2rem] text-[#696868]">
            Reach millions of people travelling and living near you on Airbnb.
          </p>
          {/* first box */}
          <div className="bg-[#efeeeeb6] w-full flex flex-col items-center gap-1 py-10 justify-center rounded-2xl ">
            <div>
              <img
                src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745863949102/original/6918c96a-e479-44c6-a9e9-86e87326d65a.jpeg?im_w=720&im_q=medq"
                alt="girl"
                className="w-20 rounded-[50%]"
              />
            </div>
            <p className="text-2xl font-bold">390 million guests</p>
            <p className="text-center w-[90%] text-[1rem] text-[#696868]">
              arrived in 2024
            </p>
          </div>
          {/* second box */}
          <div className="bg-[#efeeeeb6] w-full flex flex-col items-center gap-1 py-10 justify-center rounded-2xl">
            <p className="text-2xl font-bold">$81 billion</p>
            <p className="text-center w-[90%] text-[1rem] text-[#696868]">
              spent on Airbnb in 2024
            </p>
          </div>
          <p className="text-center text-[0.8rem] w-[85%] text-[#676565]">
            390m includes new and returning guests. $81bn USD in gross bookings
            for stays and experiences.
          </p>
        </div>
        {/* world class tools for local business */}
        <div className="flex flex-row gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide pb-6 md:overflow-hidden md:grid md:grid-cols-2 md:px-4 md:gap-15 lg:gap-20 md:w-[95%] md:self-center lg:w-[70%] lg:self-center">
          {/* first */}
          <div className="flex flex-col gap-4">
            <img
              src="https://a0.muscache.com/im/pictures/canvas/Canvas-1746032082334/original/c35cadac-bbd5-41f6-b0d4-1ec4c16e2eab.jpeg?im_w=1920"
              alt="yourspace"
              className="rounded-3xl h-90 min-w-78"
            />
            <div className="flex flex-col gap-1">
              <p className="text-[1.2rem] font-medium">Manage reservations</p>
              <p className="text-[1rem] text-wrap text-[#5a5858] max-w-[95%]">
                Stay organised with clear details for every booking.
              </p>
            </div>
          </div>
          {/* second */}
          <div className="flex flex-col gap-4">
            <img
              src="https://a0.muscache.com/im/pictures/canvas/Canvas-1746045462132/original/d80c443e-e44f-4082-8e67-a0fa2bcd340c.jpeg?im_w=1920"
              alt="yourspace"
              className="rounded-3xl h-90 min-w-78"
            />
            <div className="flex flex-col gap-1">
              <p className="text-[1.2rem] font-medium">Simplify scheduling</p>
              <p className="text-[1rem] text-wrap text-[#5a5858] max-w-[95%]">
                Sync with Google Calendar, set business hours and fill gaps in
                your day.
              </p>
            </div>
          </div>
          {/* third */}
          <div className="flex flex-col gap-4">
            <img
              src="https://a0.muscache.com/im/pictures/canvas/Canvas-1746033430602/original/ecb5e352-9764-486f-bd75-36c534cd9548.jpeg?im_w=1920"
              alt="yourspace"
              className="rounded-3xl h-90 min-w-78"
            />
            <div className="flex flex-col gap-1">
              <p className="text-[1.2rem] font-medium">Message with guests</p>
              <p className="text-[1rem] text-wrap text-[#5a5858] max-w-[95%]">
                Send photos, videos and accept payments for special requests.
              </p>
            </div>
          </div>
          {/* fourth */}
          <div className="flex flex-col gap-4">
            <img
              src="https://a0.muscache.com/im/pictures/canvas/Canvas-1746031856012/original/fca969eb-8ffe-491e-8c77-a4096b454910.jpeg?im_w=1920"
              alt="yourspace"
              className="rounded-3xl h-90 min-w-78"
            />
            <div className="flex flex-col gap-1">
              <p className="text-[1.2rem] font-medium">Get paid quickly</p>
              <p className="text-[1rem] text-wrap text-[#5a5858] max-w-[95%]">
                Receive payments securely and see your earnings in real time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* bottom fixed button */}
      <div className="sticky bottom-0 backdrop-blur-sm w-full h-20 flex flex-col items-center justify-center align-middle md:hidden">
        <Link
          to="/login"
          className="bg-[#da1249] w-[90%] py-3 text-center text-[1.2rem] rounded-4xl text-white"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default AirbnbYourservices;
