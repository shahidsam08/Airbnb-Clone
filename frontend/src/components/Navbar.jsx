import { MdSearch } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-col gap-6 border-b-gray-300 border-b-[1.2px] pb-[0.5] shadow-md shadow-gray-500/20">
      {/* searchpage components. */}
      
        <Link
        to="/searchpage"
        className="border-[1.2px] px-4 py-5 border-gray-300 shadow-md shadow-gray-500/20 rounded-4xl text-center text-black flex flex-row justify-center align-middle items-center gap-2 mx-4 mt-3 hover:border-black"
      >
        {" "}
        <MdSearch size={18} className="font-bold" />{" "}
        <p className="text-1xl font-medium">Search for homes</p>{" "}
      </Link>
      {/* homes experiece and services. */}
      <div className="flex flex-row items-center justify-around mx-8">
        {/* homes */}
        <NavLink to="/" className={({isActive}) => isActive ? "border-b-[2.9px]" : "border-white"}>
          <div className="flex flex-col align-middle pb-2 justify-center items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3171/3171547.png"
            alt="homes"
            width={40}
          />
          <p className="text-gray-600 font-medium text-[0.9rem]">Homes</p>
        </div>
        </NavLink>
        {/* exprience */}
        <NavLink to="/exprience" className={({isActive}) => isActive ? "border-b-[2.9px]" : "border-white"}>
          <div className="flex flex-col align-middle pb-2  justify-center items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2955/2955139.png"
            alt="Experience"
            width={40}
          />
          <p className="text-gray-600 font-medium text-[0.9rem]">Experience</p>
        </div>
        </NavLink>
        {/* services */}
        <NavLink to="/services" className={({isActive}) => isActive ? "border-b-[2.9px]" : "border-white"}>
          <div className="flex flex-col align-middle pb-2  justify-center items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/563/563976.png"
            alt="services"
            width={40}
          />
          <p className="text-gray-600 font-medium text-[0.9rem]">Service</p>
        </div>
        </NavLink>
      </div>
      
    </nav>
  );
}

export default Navbar;

// navbar : make the navbar for the airbnb project.
