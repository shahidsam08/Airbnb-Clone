import React, { useRef } from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function ListingCard() {
  const sliderRef = useRef(null);

  const scrollnext = () => {
    sliderRef.current.scrollBy({
      left : 70,
      behavior : "smooth",
    })
  }

  const scrollPrev = () => {
    sliderRef.current.scrollBy({
      left: -70,
      behavior : "smooth",
    })
  }
  return (
    <div className='bg-gray-100 px-4 pt-8'>
      <p className="text-[1.3rem] font-stretch-expanded">
        Inspiration for future getaways
      </p>
      {/* scrolling items of the footer side. */}
      <div className="flex flex-row gap-2 justify-center items-center">
        <FaAngleLeft onClick={scrollPrev}/>
        <div ref={sliderRef} className="flex flex-row gap-4 overflow-x-auto scrollbar-hide whitespace-nowrap p-4 scroll-smooth">
          <div>Popular</div>
          <div>Arts & Culture</div>
          <div>Beach</div>
          <div>Mountain</div>
          <div>Outdoor</div>
          <div>Things to do</div>
        </div>
        <FaAngleRight onClick={scrollnext}/>
        {/* adding some items after the making the separate page of each items. */}
      </div>

    </div>
  )
}

export default ListingCard
