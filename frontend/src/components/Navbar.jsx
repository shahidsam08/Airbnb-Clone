import React from "react";
import { MdSearch } from "react-icons/md";

function Navbar() {
  return (
    <div>
      <div className="w-full border-2 p-4 border-black div-4 rounded-4xl text-center text-black flex flex-row justify-center align-middle items-center gap-4">
        {" "}
        <MdSearch size={20} /> <p>Start your search</p>{" "}
      </div>
    </div>
  );
}

export default Navbar;

// navbar : make the navbar for the airbnb project.
