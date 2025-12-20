import { FaAirbnb } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useRef, useState } from "react";
import { IoPlay } from "react-icons/io5";
import { LuAudioLines } from "react-icons/lu";
import { IoMdPause } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

function Disabilitysupport() {
  // write the logic of the play the audio.
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [show, isShow] = useState(false);
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  // method for the showing and hide the content.
  const toggleshow = () => {
    if (show === false) {
      isShow(true);
    } else {
      isShow(false);
    }
  };

  return (
    <div>
      <div>
        {/* airbnb logo : fixed div  */}
        <div className=" w-full p-6 border-b-[0.02px] border-gray-300 sticky z-50 top-0 bg-white">
          <Link to="/">
            <FaAirbnb color="red" size={40} />
          </Link>
        </div>
        {/* Accessibility at airbnb */}
        <div className="flex flex-col gap-6 items-center text-center py-10">
          <h1 className=" w-[70%] text-5xl font-semibold text-gray-800">
            Accessibility at Airbnb
          </h1>
          <p className="w-[60%] text-[1.14rem] text-gray-500">
            Here’s how we’re making it easier to travel with us.
          </p>
        </div>
        {/* Enhanced searc filter */}
        {/* first div ( enhanced search filters ) */}
        <div className="flex flex-col gap-4 items-center mt-8">
          <div className="w-[80%] text-center flex flex-col items-center gap-3">
            <p className="text-2xl font-semibold">Enhanced search filters</p>
            <p className="text-[1.1rem] text-gray-500">
              We’ve simplified our accessibility filters to provide an even
              better search experience.
            </p>
          </div>
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1749855852023/original/9325313d-d918-4439-b86c-eac7d28c2235.png?im_w=960&im_q=medq"
            alt="searchfilter1"
          />
        </div>
        {/* accessibility review */}
        <div className="flex flex-col gap-4 items-center pt-15 bg-gray-100">
          <div className="w-[80%] text-center flex flex-col items-center gap-3">
            <p className="text-2xl font-semibold">Accessibility review</p>
            <p className="text-[1.1rem] text-gray-500">
              We review every accessibility feature submitted by stays hosts for
              accuracy.
            </p>
          </div>
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1749856025414/original/245da055-fa8a-4140-9e51-8ddb06d02e56.png?im_w=960&im_q=medq"
            alt="searchfilter2"
          />
        </div>
        {/* messaging with hosts. */}
        <div className="flex flex-col gap-4 items-center pt-15 pb-5">
          <div className="w-[80%] text-center flex flex-col items-center gap-3">
            <p className="text-2xl font-semibold">1:1 messaging with hosts</p>
            <p className="text-[1.1rem] text-gray-500">
              Chat directly with hosts for more information about the
              accessibility features of their stay or experience.
            </p>
          </div>
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1749856092356/original/bee668cf-af57-447e-883e-24b5e03340ea.png?im_w=960&im_q=medq"
            alt="searchfilter3"
          />
        </div>
        {/* Black box with image and text and other details */}
        <div className="bg-black">
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1733264347358/original/88069db7-9bb9-4f20-886e-cf5c0860f83b.jpeg?im_w=960&im_q=medq"
            alt="wellfamily"
          />
          {/* audio box which handle the audio & some content */}
          <div className="w-full px-7 py-10 bg-[#1c1b1b] flex flex-col items-center gap-5">
            <p className="text-gray-100 text-2xl w-[80%] text-center align-middle justify-center">
              Listen to Airbnb’s digital accessibility statement
            </p>
            {/* audio box which handle the audio. */}
            <div className="w-full bg-[#5f5f5f] flex flex-row align-middle justify-between items-center gap-2 pt-8 pb-3 px-5 rounded-2xl ">
              <div className="bg-[#313030] rounded-full p-2 flex flex-col items-center hover:cursor-pointer">
                <audio ref={audioRef} src="/airbnb.mp3"></audio>
                {isPlaying ? (
                  <IoMdPause color="white" onClick={togglePlay} size={25} />
                ) : (
                  <IoPlay
                    className="pl-[0.2rem]"
                    onClick={togglePlay}
                    color="white"
                    size={25}
                  />
                )}
              </div>

              <LuAudioLines color="white" size={50} />
            </div>
          </div>
          {/* Digital accessibility at airbnb */}
          <div className="p-8 flex flex-col gap-15">
            <div className="flex flex-col gap-5">
              <p className="text-5xl font-medium text-white w-[70%]">
                Digital accessibility at Airbnb
              </p>
              <p className="text-[#b7b4b4] text-[1.6rem] font-light text-wrap leading-7">
                Airbnb strives to conform with the European Accessibility Act
                and the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
                for our website and mobile applications.
              </p>
            </div>
            {/* how we works */}
            <div className="flex flex-col gap-6">
              <p className="text-[1.5rem] font-medium text-white w-[70%]">
                How we work
              </p>
              <ul className="list-disc text-[#b2b0b0] pl-10 text-[1.06rem] flex flex-col gap-1">
                <li>
                  Incorporating digital accessibility best practices into our
                  design and engineering processes
                </li>
                <li>
                  Providing ongoing accessibility training and resources to our
                  employees
                </li>
                <li>
                  Engaging internal and external quality assurance testers
                </li>
                <li>
                  Maintaining a cross-functional team dedicated to monitoring
                  and addressing digital accessibility issues across our website
                  and applications
                </li>
                <li>
                  Training our customer support agents on digital accessibility
                  issues
                </li>
              </ul>
            </div>
            {/* feedback  */}
            <div className="flex flex-col gap-3">
              <p className="text-[1.5rem] font-medium text-white">Feedback</p>
              <p className="list-disc text-[#b7b5b5] text-[1.07rem]">
                We welcome your feedback on Airbnb’s digital accessibility
                practices. Please email us at{" "}
                <span className="underline font-medium">
                  digital-accessibility@airbnb.com
                </span>{" "}
                to connect. For any other queries apart from digital
                accessibility, contact{" "}
                <span className="underline font-medium">
                  Airbnb Community Support.
                </span>{" "}
              </p>
            </div>
            {/* dedicated teams */}
            <div className="flex flex-col gap-3">
              <p className="text-[1.5rem] font-medium text-white">
                Dedicated teams
              </p>
              <p className="list-disc text-[#b7b5b5] text-[1.07rem]">
                We’re committed to designing an accessible experience across
                browsers and devices.
              </p>
            </div>
            {/* our digital access specification */}
            <div className="flex flex-col gap-3">
              <p className="text-[1.4rem] font-medium text-white">
                Our digital access specifications
              </p>
              <p className="list-disc text-[#b7b5b5] text-[1.07rem]">
                We’re committed to designing an accessible experience across
                browsers and devices.
              </p>
            </div>
            {/* click show the content and again click hide the content */}
            <div>
              <div
                onClick={toggleshow}
                className="flex flex-row justify-between items-center text-white pb-6 hover:cursor-pointer"
              >
                <p className="w-[80%] text-[1.17rem]">
                  Usability for browsers, assistive technology and devices
                </p>
                {show ? <FaAngleUp size={25} /> : <FaAngleDown size={25} />}
              </div>
              {show ? (
                <div className="text-white pb-6">
                  
                </div>
              ) : (
                " "
              )}
              <div className="border-[0.02px] border-amber-50"></div>
            </div>
          </div>
        </div>
      </div>
      {/* End of the disability support page. */}
      {/* footer part  */}
      <Footer />
    </div>
  );
}

export default Disabilitysupport;
