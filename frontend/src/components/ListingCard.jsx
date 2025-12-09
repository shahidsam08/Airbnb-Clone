import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function ListingCard() {
  return (
    <div>
      <p className="text-[1.3rem] font-stretch-expanded">
        Inspiration for future getaways
      </p>
      {/* scrolling items of the footer side. */}
      <div className="flex flex-row gap-2 justify-center items-center">
        <FaAngleLeft />
        <div className="flex gap-4 overflow-x-auto whitespace-nowrap p-4">
          <div>Popular</div>
          <div>Arts & Culture</div>
          <div>Beach</div>
          <div>Mountain</div>
          <div>Outdoor</div>
          <div>Things to do</div>
        </div>
        <FaAngleRight />
        {/* adding some items after the making the separate page of each items. */}
      </div>

    </div>
  )
}

export default ListingCard
