import { useState } from "react";
import { MdSearch } from "react-icons/md";

export default function App() {
  const [value, setValue] = useState(0);
  const [show, setShow] = useState(false);
  const [Toggle, SetToggle] = useState(false)

  // value 
  const priceperDay = 1703;
  const priceValue = value * priceperDay;

  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full">
      <div>
        <p className="text-center text-[2.7rem] leading-12 font-bold">
          Your home could make <span className="text-red-600"> ₹{priceValue}</span> on
          Airbnb
        </p>
      </div>
      {/* days and estimate earning */}
      {!show ? (
        <div className="flex flex-col gap-1 items-center">
          <p className="">
            <span className="underline font-bold"> {value} night </span>· ₹1,703/night
          </p>
          <p className="text-[#636161]">
            Learn how we{" "}
            <span className="underline font-light">estimate earnings</span>{" "}
          </p>
        </div>
      ) : (
        <h3 className="bg-gray-900 w-fit p-4 text-white rounded-4xl text-center">
          Value: {value}
        </h3>
      )}

      <div
        onMouseDown={() => {
          if (show === false) {
            setShow(true);
          }
        }}
        className="w-full"
      >
        <input
          type="range"
          min="1"
          max="30"
          step="1"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClick={() => {
            if (show === true) {
              setShow(false);
            }
          }}
          className="airbnb-range w-full max-w-[320px] cursor-pointer"
        />
      </div>
      {/* box with place and bedroom numbers */}
      <div className="flex flex-row gap-3 items-center border-[0.7px] rounded-4xl border-[#706f6f] p-2 pl-4 w-full">
        <MdSearch color="red" size={28} />
        <div>
          <p>Bhopal</p>
          <p className="text-[1rem] text-[#737272]">
            Entire place ·<span> 1 bedroom</span>
          </p>
        </div>
      </div>
      {/* Map */}
      <div></div>
    </div>
  );
}
