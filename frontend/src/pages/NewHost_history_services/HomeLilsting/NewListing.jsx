import React from "react";
import { LuAsterisk } from "react-icons/lu";


function NewListing() {
  return (
    <div>
      <div className="flex flex-col gap-10 pb-10">
        <p className="text-3xl font-bold text-center md:text-start">
          Listing Your Property.
        </p>
        <form
          action=""
          method="post"
          className="flex gap-5 flex-col  flex-wrap md:flex-row items-center justify-center"
        >
          {/* title */}
          <div className="flex flex-col lg:w-full">
            <div className="flex flex-row ">
              <label
                htmlFor="title"
                className="text-[1.2rem] font-bold text-zinc-700"
              >
                Title
              </label>
              <div>
                <LuAsterisk size={10} color="red" />
              </div>
            </div>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter the title"
              className="pl-3 py-[0.6rem] text-[1.2rem] rounded-[0.6rem] border-black border-2 outline-blue-600"
              required
            />
          </div>
          {/* description */}
          <div className="flex flex-col lg:w-full">
            <div className="flex flex-row ">
              <label
                htmlFor="description"
                className="text-[1.2rem] font-bold text-zinc-700"
              >
                Description
              </label>
              <div>
                <LuAsterisk size={10} color="red" />
              </div>
            </div>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Enter the description"
              className="pl-3 py-[0.6rem] text-[1.2rem] rounded-[0.6rem] border-black border-2 outline-blue-600"
              required
            />
          </div>
          {/* Home image. ( Living Room URL ) */}
          <div className="flex flex-col lg:w-full">
            <div className="flex flex-row ">
              <label
                htmlFor="LivingRoomImage"
                className="text-[1.2rem] font-bold text-zinc-700"
              >
                LivingRoom Image
              </label>
              <div>
                <LuAsterisk size={10} color="red" />
              </div>
            </div>
            <input
              type="text"
              name="LivingRoomImage"
              id="LivingRoomImage"
              placeholder="Enter the LivingRoomImage"
              className="pl-3 py-[0.6rem] text-[1.2rem] rounded-[0.6rem] border-black border-2 outline-blue-600"
              required
            />
          </div>
          {/* Kitchen Image */}
          <div className="flex flex-col lg:w-full">
            <div className="flex flex-row ">
              <label
                htmlFor="Kitchen Image"
                className="text-[1.2rem] font-bold text-zinc-700"
              >
                Kitchen Image
              </label>
              <div>
                <LuAsterisk size={10} color="red" />
              </div>
            </div>
            <input
              type="text"
              name="Kitchen Image"
              id="Kitchen Image"
              placeholder="Enter the Kitchen Image"
              className="pl-3 py-[0.6rem] text-[1.2rem] rounded-[0.6rem] border-black border-2 outline-blue-600"
              required
            />
          </div>
          {/* bedroom URL */}
          <div className="flex flex-col lg:w-full">
            <div className="flex flex-row ">
              <label
                htmlFor="Bedroom Image"
                className="text-[1.2rem] font-bold text-zinc-700"
              >
                Bedroom Image
              </label>
              <div>
                <LuAsterisk size={10} color="red" />
              </div>
            </div>
            <input
              type="text"
              name="Bedroom Image"
              id="Bedroom Image"
              placeholder="Enter the Bedroom Image"
              className="pl-3 py-[0.6rem] text-[1.2rem] rounded-[0.6rem] border-black border-2 outline-blue-600"
              required
            />
          </div>
          {/* bathroom URL */}
          <div className="flex flex-col lg:w-full">
            <div className="flex flex-row ">
              <label
                htmlFor="Bathroom Image"
                className="text-[1.2rem] font-bold text-zinc-700"
              >
                Bathroom Image
              </label>
              <div>
                <LuAsterisk size={10} color="red" />
              </div>
            </div>
            <input
              type="text"
              name="Bathroom Image"
              id="Bathroom Image"
              placeholder="Enter the Bathroom Image"
              className="pl-3 py-[0.6rem] text-[1.2rem] rounded-[0.6rem] border-black border-2 outline-blue-600"
              required
            />
          </div>
          {/* balcony URL */}
          <div className="flex flex-col lg:w-full">
            <div className="flex flex-row ">
              <label
                htmlFor="Balcony Image"
                className="text-[1.2rem] font-bold text-zinc-700"
              >
                Balcony Image
              </label>
              <div>
                <LuAsterisk size={10} color="red" />
              </div>
            </div>
            <input
              type="text"
              name="Balcony Image"
              id="Balcony Image"
              placeholder="Enter the Balcony Image"
              className="pl-3 py-[0.6rem] text-[1.2rem] rounded-[0.6rem] border-black border-2 outline-blue-600"
              required
            />
          </div>
          {/* enter the price for two day */}
          <div className="flex flex-col lg:w-full">
            <div className="flex flex-row ">
              <label
                htmlFor="Price"
                className="text-[1.2rem] font-bold text-zinc-700"
              >
                Price 2/days
              </label>
              <div>
                <LuAsterisk size={10} color="red" />
              </div>
            </div>
            <input
              type="text"
              name="Price"
              id="Price"
              placeholder="Enter the Price"
              className="pl-3 py-[0.6rem] text-[1.2rem] rounded-[0.6rem] border-black border-2 outline-blue-600"
              required
            />
          </div>
          {/* listing type */}
          <div className="flex flex-col lg:w-full">
            <div className="flex flex-row ">
              <label
                htmlFor="Bathroom Image"
                className="text-[1.2rem] font-bold text-zinc-700"
              >
                Home Types:
              </label>
              <div>
                <LuAsterisk size={10} color="red" />
              </div>
            </div>
            <select
              name="selectHome"
              id="selectHome"
              className="outline-blue-600 border-2 border-black px-2 py-[0.6rem] rounded-[0.6rem]"
            >
              <option value="flat">Flat</option>
              <option value="apartment">Apartment</option>
            </select>
          </div>
          {/* city  */}
          <div className="flex flex-col lg:w-full">
            <div className="flex flex-row ">
              <label
                htmlFor="city"
                className="text-[1.2rem] font-bold text-zinc-700"
              >
                city
              </label>
              <div>
                <LuAsterisk size={10} color="red" />
              </div>
            </div>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Enter the city name"
              className="pl-3 py-[0.6rem] text-[1.2rem] rounded-[0.6rem] border-black border-2 outline-blue-600"
              required
            />
          </div>
          {/* street  */}
          <div className="flex flex-col lg:w-full">
            <div className="flex flex-row ">
              <label
                htmlFor="street"
                className="text-[1.2rem] font-bold text-zinc-700"
              >
                street
              </label>
              <div>
                <LuAsterisk size={10} color="red" />
              </div>
            </div>
            <input
              type="text"
              name="street"
              id="street"
              placeholder="Enter the street name"
              className="pl-3 py-[0.6rem] text-[1.2rem] rounded-[0.6rem] border-black border-2 outline-blue-600"
              required
            />
          </div>
          <div className="w-[60%]">
            <button type="submit" className="bg-black text-white w-full py-3 text-2xl rounded-2xl text-center">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewListing;
