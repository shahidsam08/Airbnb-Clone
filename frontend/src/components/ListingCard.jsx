import React, { useReducer, useRef } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const reducer = (state, action) => {
  switch (action.type) {
    case "POPULAR":
      return "popular";
    case "ARTCULTURE":
      return "artculture"
    case "BEACH":
      return "beach"
    case "MOUNTAIN":
      return "mountain"
    case "OUTDOOR": 
      return "outdoor"
    case "THINGSTODO":
      return "thingstodo"
    default: 
      return "popular"
  }
};

function ListingCard() {
  const sliderRef = useRef(null);
  const [state, dispatch] = useReducer(reducer, "popular");

  const scrollnext = () => {
    sliderRef.current.scrollBy({
      left: 70,
      behavior: "smooth",
    });
  };

  const scrollPrev = () => {
    sliderRef.current.scrollBy({
      left: -70,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-gray-100 px-5 lg:px-10 pt-8">
      <p className="text-[1.3rem] lg:text-3xl font-stretch-expanded">
        Inspiration for future getaways
      </p>
      {/* scrolling items of the footer side. */}
      <div className="flex flex-row gap-2 justify-center items-center py-3 md:justify-start">
        <FaAngleLeft onClick={scrollPrev} className="md:hidden"/>
        <div
          ref={sliderRef}
          className="flex flex-row items-center justify-start gap-4 overflow-x-auto scrollbar-hide  whitespace-nowrap p-4 md:p-0 md:flex-row md:items-start md:border-b-[1.2px] md:border-[#c1c1c1] md:w-full"
        >
          {/* popular */} 
          <div
            onClick={() => dispatch({ type: "POPULAR" })}
            className={`cursor-pointer pb-2 ${state === "popular" ? "text-[#da1249] border-b-[2.1px] ": ""}`}
          >
            Popular
          </div>
          {/* arts & culture */}
          <div onClick={() => dispatch({ type: "ARTCULTURE" })} className={`cursor-pointer pb-2  ${state === "artculture" ? "text-[#da1249] border-b-[2.1px]  ": ""}`}>
            Arts & Culture
          </div>
          {/* Beach */}
          <div onClick={() => dispatch({ type: "BEACH" })} className={`cursor-pointer pb-2  ${state === "beach" ? "text-[#da1249] border-b-[2.1px]  ": ""}`}>
            Beach
          </div>
          {/* Mountain */}
          <div onClick={() => dispatch({ type: "MOUNTAIN" })} className={`cursor-pointer pb-2  ${state === "mountain" ? "text-[#da1249] border-b-[2.1px]  ": ""}`}>
            Mountain
          </div>
          {/* Outdoor */}
          <div onClick={() => dispatch({ type: "OUTDOOR" })} className={`cursor-pointer pb-2  ${state === "outdoor" ? "text-[#da1249] border-b-[2.1px]  ": ""}`}>
            Outdoor
          </div>
          {/* Things to do */}
          <div onClick={() => dispatch({ type: "THINGSTODO" })} className={`cursor-pointer pb-2  ${state === "thingstodo" ? "text-[#da1249] border-b-[2.1px]  ": ""}`}>
            Things to do
          </div>
        </div>
        <FaAngleRight onClick={scrollnext} className="md:hidden"/>
        {/* adding some items after the making the separate page of each items. */}
      </div>
      {/* show the data when I click on any button. */}
      {/* show the data of the popular */}
      {state === "popular" ? <div>
        This is the popular page
      </div> : " "}
      {/* show art and culture data */}
      {state === "artculture" ? <div> art and culture data</div> : " "}
      {state === "beach" ? <div>This is beach data</div> : " "}
      {state === "mountain" ? <div>this is the mountain</div> : " "}
      {state === "outdoor" ? <div>this is the outdoor</div> : " "}
      {state === "thingstodo" ? <div>this is things todo</div> : " "}
    </div>
  );
}

export default ListingCard;
