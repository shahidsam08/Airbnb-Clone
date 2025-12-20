import { FaAirbnb } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useRef, useState } from "react";
import { IoPlay } from "react-icons/io5";

function Disabilitysupport() {
  // write the logic of the play the audio.
  const audioRef = useRef(null);
  const[isPlaying, setIsPlaying] = useState(false);
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
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
          {/* audio box which handle the audio. */}
          <div className="w-full px-7 py-10 bg-gray-950 flex flex-col items-center gap-5">
            <p className="text-gray-100 text-2xl w-[80%] text-center align-middle justify-center">
              Listen to Airbnb’s digital accessibility statement
            </p>
            <div>
              <audio ref={audioRef}  src="/airbnb.mp3"></audio>
              <IoPlay onClick={togglePlay} color="white"/>
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
