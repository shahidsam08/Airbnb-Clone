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
  const [showtwo, isShowtwo] = useState(false);
  const [showThree, isShowThree] = useState(false);
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  // toggle show one
  const toggleshow = () => {
    if (show === false) {
      isShow(true);
    } else {
      isShow(false);
    }
  };
  // toggle show two
  const toggleshowtwo = () => {
    if (showtwo === false) {
      isShowtwo(true);
    } else {
      isShowtwo(false);
    }
  };
  // toggle show three
  const toggleshowThree = () => {
    if (showThree === false) {
      isShowThree(true);
    } else {
      isShowThree(false);
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
        <div className="flex flex-col gap-6 items-center text-center justify-center md:text-base py-10 md:items-center md:justify-center">
          <h1 className=" w-[70%] text-5xl font-semibold text-gray-800 lg:text-9xl md:text-center text-center md:text-black md:w-[70%]">
            Accessibility at Airbnb
          </h1>
          <p className="w-[60%] text-[1.14rem] text-gray-500 md:text-[1.9rem]">
            Here’s how we’re making it easier to travel with us.
          </p>
        </div>
        {/* Enhanced searc filter */}
        {/* first div ( enhanced search filters ) */}
        <div className="flex flex-col gap-4 items-center mt-8  md:flex md:flex-row-reverse md:items-center md:justify-center">
          <div className="w-[80%] text-center md:text-start  flex flex-col items-center gap-3 md:items-start md:gap-5">
            <p className="text-2xl font-semibold md:text-5xl">
              Enhanced search filters
            </p>
            <p className="text-[1.1rem] text-gray-500 md:text-3xl md:w-[60%] ">
              We’ve simplified our accessibility filters to provide an even
              better search experience.
            </p>
          </div>
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1749855852023/original/9325313d-d918-4439-b86c-eac7d28c2235.png?im_w=960&im_q=medq"
            alt="searchfilter1"
            className="md:w-[50%]"
          />
        </div>
        {/* accessibility review */}
        <div className="flex flex-col gap-4 items-center pt-15 bg-gray-100 md:flex md:flex-row md:items-center md:justify-center">
          <div className="w-[80%] text-center md:text-start flex flex-col md:items-start gap-3 md:gap-5 md:w-[40%]">
            <p className="text-2xl font-semibold md:text-start md:text-5xl">
              Accessibility review
            </p>
            <p className="text-[1.1rem] text-gray-500 md:text-start md:text-3xl md:w-[80%]">
              We review every accessibility feature submitted by stays hosts for
              accuracy.
            </p>
          </div>
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1749856025414/original/245da055-fa8a-4140-9e51-8ddb06d02e56.png?im_w=960&im_q=medq"
            alt="searchfilter2"
            className="md:w-[50%]"
          />
        </div>
        {/* messaging with hosts. */}
        <div className="flex flex-col gap-4 items-center pt-15 pb-5 md:flex md:flex-row-reverse md:items-center md:justify-center">
          <div className="w-[80%] text-center md:text-start flex flex-col items-center gap-3 md:items-start md:gap-5">
            <p className="text-2xl font-semibold md:text-5xl">
              1:1 messaging with hosts
            </p>
            <p className="text-[1.1rem] text-gray-500 md:text-3xl md:w-[60%]">
              Chat directly with hosts for more information about the
              accessibility features of their stay or experience.
            </p>
          </div>
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1749856092356/original/bee668cf-af57-447e-883e-24b5e03340ea.png?im_w=960&im_q=medq"
            alt="searchfilter3"
            className="md:w-[50%]"
          />
        </div>
        {/* Black box with image and text and other details */}
        <div className="bg-black">
          {/* box with photo and audion player */}
          <div className="md:flex md:flex-col md:gap-4 md:items-center md:justify-center">
            <div className="md:w-full md:flex md:items-center md:justify-center md:py-19">
              <img
                src="https://a0.muscache.com/im/pictures/canvas/Canvas-1733264347358/original/88069db7-9bb9-4f20-886e-cf5c0860f83b.jpeg?im_w=960&im_q=medq"
                alt="wellfamily"
                className="md:w-[90%] md:h-200 md:object-top md:object-cover md:rounded-4xl"
              />
            </div>
            {/* audio box which handle the audio & some content */}
            <div className="w-full px-7 py-10 bg-[#1c1b1b] flex flex-col items-center gap-5 md:flex md:flex-row">
              <p className="text-gray-100 text-2xl w-[80%] text-center align-middle justify-center md:w-[50%]">
                Listen to Airbnb’s digital accessibility statement
              </p>
              {/* audio box which handle the audio. */}
              <div className="w-full md:w-[40%] bg-[#5f5f5f] flex flex-row align-middle justify-between items-center gap-2 pt-8 pb-3 px-5 rounded-2xl ">
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
          </div>
          {/* Digital accessibility at airbnb */}
          <div className="p-8 flex flex-col gap-10 md:p-14">
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
            <div className="flex flex-col gap-10 lg:flex lg:flex-row">
              <div className="flex flex-col gap-6 lg:w-[60%]">
                <p className="text-[1.5rem] font-medium text-white w-[70%] lg:text-[1.9rem]">
                  How we work
                </p>
                <ul className="list-disc text-[#b2b0b0] pl-10 text-[1.06rem] flex flex-col gap-1 lg:text-[1.4rem]">
                  <li>
                    Incorporating digital accessibility best practices into our
                    design and engineering processes
                  </li>
                  <li>
                    Providing ongoing accessibility training and resources to
                    our employees
                  </li>
                  <li>
                    Engaging internal and external quality assurance testers
                  </li>
                  <li>
                    Maintaining a cross-functional team dedicated to monitoring
                    and addressing digital accessibility issues across our
                    website and applications
                  </li>
                  <li>
                    Training our customer support agents on digital
                    accessibility issues
                  </li>
                </ul>
              </div>
              {/* feedback  */}
              <div className="flex flex-col gap-3 lg:w-[60%]">
                <p className="text-[1.5rem] font-medium text-white lg:text-[1.9rem]">
                  Feedback
                </p>
                <p className="list-disc text-[#b7b5b5] text-[1.07rem] lg:text-[1.2rem]">
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
            </div>
            {/* dedicated teams */}
            <div className="flex flex-col gap-3 lg:pb-20">
              <p className="text-[1.5rem] font-medium text-white lg:text-[1.9rem]">
                Dedicated teams
              </p>
              <p className="list-disc text-[#b7b5b5] text-[1.07rem] lg:text-[1.2rem]">
                We’re committed to designing an accessible experience across
                browsers and devices.
              </p>
            </div>
            {/* our digital access specification */}
            <div className="flex flex-col gap-10 lg:flex lg:flex-row lg:items-start lg:gap-12">
              <div className="flex flex-col gap-3 lg:w-[50%]">
                <p className="text-[1.4rem] font-medium text-white lg:text-5xl">
                  Our digital access specifications
                </p>
                <p className="list-disc text-[#b7b5b5] text-[1.07rem] lg:text-[1.4rem]">
                  We’re committed to designing an accessible experience across
                  browsers and devices.
                </p>
              </div>
              {/* ----------------------- click show element and again click hide the content ------------------------------------- */}
              {/* click show the content and again click hide the content */}
              <div className="flex flex-col gap-10 lg:w-[60%]">
                <div>
                  <div
                    onClick={toggleshow}
                    className="flex flex-row justify-between items-center text-white pb-6 hover:cursor-pointer"
                  >
                    <p className="w-[80%] text-[1.17rem] text-[#dbd7d7] lg:text-[1.7rem] lg:w-[95%] lg:text-white">
                      Usability for browsers, assistive technology and devices
                    </p>
                    {show ? <FaAngleUp size={25} /> : <FaAngleDown size={25} />}
                  </div>
                  {show ? (
                    <div className="text-[#a19d9d] pb-6">
                      <p className="text-[#a19d9d]">
                        Airbnb regularly tests and optimises for the following
                        accessible experiences:
                      </p>

                      <div className="flex flex-col gap-5">
                        {/* screen readers */}
                        <div className="flex flex-col gap-5 pt-9">
                          <p className="text-[1.2rem] font-medium text-[#c8c7c7]">
                            Screen readers
                          </p>
                          <ul className="list-disc pl-10 flex flex-col gap-2">
                            <li className="text-[1.1rem] pb-1">
                              VoiceOver
                              <ul className="list-disc pl-8">
                                <li>
                                  Desktop VoiceOver for macOS: Web testing with
                                  Safari browser
                                </li>
                                <li>
                                  Mobile VoiceOver for iOS: moWeb testing with
                                  Safari browser
                                </li>
                                <li>
                                  Mobile VoiceOver for iOS: native application
                                  testing
                                </li>
                              </ul>
                            </li>
                            <li className="text-[1.1rem]">
                              TalkBack
                              <ul className="list-disc pl-8">
                                <li>
                                  Mobile TalkBack for Android: moWeb testing
                                  with Chrome browser
                                </li>
                                <li>
                                  Mobile TalkBack for Android: native
                                  application testing
                                </li>
                              </ul>
                            </li>
                            <li className="text-[1.1rem]">
                              JAWS with Microsoft Edge
                            </li>
                            <li className="text-[1.1rem]">
                              NVDA with Mozilla Firefox
                            </li>
                          </ul>
                        </div>
                        {/* user control */}
                        <div>
                          <p className="text-[1.2rem] font-medium text-[#c8c7c7] pb-4">
                            User controls
                          </p>
                          <ul className="list-disc pl-10 flex flex-col">
                            <li>Keyboard-only commands</li>
                            <li>Desktop Web with Windows</li>
                            <li>Desktop Web with macOS</li>
                          </ul>
                        </div>
                        {/* blind and low vision user */}
                        <div>
                          <p className="text-[1.2rem] font-medium text-[#c8c7c7] pb-4">
                            Blind and low-vision users
                          </p>
                          <ul className="list-disc pl-10 flex flex-col">
                            <li>Font magnification: Android mobile OS</li>
                            <li>Dynamic type: iOS mobile OS</li>
                            <li>
                              Adjustable font sizes: Web-customisable font sizes
                              are tested with Chrome for Desktop and mobile on
                              Safari for iOS
                            </li>
                          </ul>
                        </div>
                        {/* Mobile phones are tested for the smaller and large screens */}
                        <div>
                          <p className="text-[1.2rem] font-medium text-[#c8c7c7] pb-4">
                            Mobile phones are tested for smaller and larger
                            screens
                          </p>
                          <ul className="list-disc pl-10 flex flex-col">
                            <li>The oldest iOS phone tested is iPhone 7.</li>
                            <li>
                              Android testing devices include Google and
                              Samsung. The Pixel 3 and Galaxy S8 phones are the
                              oldest models used for testing.
                            </li>
                            <li>
                              If there’s a bug in an older device or OS version,
                              we verify the issue exists in the current version
                              of the app, then prioritise and resolve it.
                            </li>
                            <li>
                              If the issue doesn’t exist in the current version,
                              depending on the severity of impact, it’s
                              prioritised against the more recent issues.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    " "
                  )}
                  <div className="border-[0.02px] border-amber-50"></div>
                </div>
                {/* ----------second onclick box which show content. -----------------*/}
                <div>
                  <div
                    onClick={toggleshowtwo}
                    className="flex flex-row justify-between items-center text-white pb-8 hover:cursor-pointer"
                  >
                    <p className="w-[80%] text-[1.17rem] text-[#dbd7d7] lg:text-[1.7rem] lg:w-[95%] lg:text-white">
                      Limitations and alternatives
                    </p>
                    {showtwo ? (
                      <FaAngleUp size={25} />
                    ) : (
                      <FaAngleDown size={25} />
                    )}
                  </div>
                  {showtwo ? (
                    <div className="text-[#a19d9d] pb-6 flex flex-col gap-6">
                      <p className="text-[#a19d9d]">
                        Despite our best efforts to ensure the accessibility of
                        Airbnb, there are some limitations. Below is a
                        description of known limitations and potential
                        solutions. Please contact us if you observe an issue not
                        listed below.
                      </p>
                      <p className="text-[#a19d9d]">
                        Known limitations for Airbnb:
                      </p>
                      {/* customer uploaded images */}
                      <div className="flex flex-col gap-2">
                        <p className="text-[1.2rem] text-[#e2e0e0]">
                          Customer-uploaded images
                        </p>
                        <ul className="list-disc pl-10 flex flex-col gap-2">
                          <li>
                            Listing images, customer profile photos and other
                            uploaded images may not have descriptions. Hosts
                            upload their own listing images and have the option
                            to provide descriptions on desktop Web.
                          </li>
                          <li>
                            We are exploring options to automatically generate
                            image descriptions for listing images. This solution
                            could then be applied to other uploaded images.
                          </li>
                        </ul>
                      </div>
                      {/* third party embeds. */}
                      <div className="flex flex-col gap-2">
                        <p className="text-[1.2rem] text-[#e2e0e0]">
                          Third-party embeds
                        </p>
                        <ul className="list-disc pl-10 flex flex-col gap-2">
                          <li>
                            Content that appears on Airbnb platforms via
                            third-party vendors may not be accessible because
                            these vendors don’t necessarily meet our standard of
                            accessibility. Whenever a related accessibility
                            issue is raised through our internal QA process, we
                            contact the vendor about the issue and request that
                            they fix it.
                          </li>
                          <li>
                            New vendor contracts include WCAG 2.1 Level AA
                            support, but this does not apply retroactively to
                            previous contracts.
                          </li>
                        </ul>
                      </div>
                      {/* tablet testing. */}
                      <div className="flex flex-col gap-2">
                        <p className="text-[1.2rem] text-[#e2e0e0]">
                          Tablet testing
                        </p>
                        <ul className="list-disc pl-10 flex flex-col gap-2">
                          <li>
                            Airbnb does not test our platform compatibility on
                            tablets. This gap in testing might result in strange
                            breakpoints and reduced user experience for tablet
                            users.
                          </li>
                        </ul>
                      </div>
                      {/* keyword and braille display */}
                      <div className="flex flex-col gap-2">
                        <p className="text-[1.2rem] text-[#e2e0e0]">
                          Keyboard and Braille display access on native mobile
                          apps
                        </p>
                        <ul className="list-disc pl-10 flex flex-col gap-2">
                          <li>
                            Airbnb does not test our platform compatibility with
                            keyboard access on native mobile applications or
                            Braille display. This gap in testing might result in
                            a suboptimal experience for customers using these
                            device combinations with our native applications.
                          </li>
                          <li>
                            There is currently no plan to include keyboard
                            access or Braille display testing in our Quality
                            Assurance process.
                          </li>
                        </ul>
                      </div>
                      {/* Accessibility setting availbility */}
                      <div className="flex flex-col gap-2">
                        <p className="text-[1.2rem] text-[#e2e0e0]">
                          Accessibility setting availability
                        </p>
                        <ul className="list-disc pl-10 flex flex-col gap-2">
                          <li>
                            Web customers can access accessibility settings
                            after they’ve logged in. Native mobile application
                            customers can access accessibility settings in both
                            logged-in and logged-out states.
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    " "
                  )}
                  <div className="border-[0.02px] border-amber-50"></div>
                </div>
                {/* third box which show the data while on click and again click hide the content */}
                <div>
                  <div
                    onClick={toggleshowThree}
                    className="flex flex-row justify-between items-center text-white pb-8 hover:cursor-pointer"
                  >
                    <p className="w-[80%] text-[1.17rem] text-[#dbd7d7] lg:text-[1.7rem] lg:w-[95%] lg:text-white">
                      Accessibility features
                    </p>
                    {showThree ? (
                      <FaAngleUp size={25} />
                    ) : (
                      <FaAngleDown size={25} />
                    )}
                  </div>
                  {showThree ? (
                    <div className="text-[#a19d9d] pb-6 flex flex-col gap-6">
                      <p className="text-[#a19d9d] text-[1.1rem]">
                        While we know that accessibility is dynamic, here are
                        some of the ways we have worked towards improving the
                        accessibility of Airbnb.
                      </p>
                      {/* visuals. */}
                      <div className="flex flex-col gap-2">
                        <p className="text-[1.2rem] text-[#e2e0e0]">Visual</p>
                        <ul className="list-disc pl-10 flex flex-col gap-1">
                          <li>Screen reader support</li>
                          <li>Colour contrast minimums</li>
                          <li>Responsive web design</li>
                          <li>
                            Font magnification, dynamic type, adjustable font
                            size
                          </li>
                        </ul>
                      </div>
                      {/* auditory */}
                      <div className="flex flex-col gap-2">
                        <p className="text-[1.2rem] text-[#e2e0e0]">Auditory</p>
                        <ul className="list-disc pl-10 flex flex-col gap-1">
                          <li>Open captions for video content</li>
                          <li>Image descriptions for Airbnb-created content</li>
                        </ul>
                      </div>
                      {/* Mobility */}
                      <div className="flex flex-col gap-2">
                        <p className="text-[1.2rem] text-[#e2e0e0]">Mobility</p>
                        <ul className="list-disc pl-10 flex flex-col gap-1">
                          <li>Keyboard shortcuts on web</li>
                          <li>Map zoom controls</li>
                          <li>Map pan controls</li>
                        </ul>
                      </div>
                      {/* cognitive */}
                      <div className="flex flex-col gap-2">
                        <p className="text-[1.2rem] text-[#e2e0e0]">
                          Cognitive
                        </p>
                        <ul className="list-disc pl-10 flex flex-col gap-1">
                          <li>Reduced motion settings</li>
                          <li>Prevent video autoplay</li>
                          <li>Load more option (versus infinite scroll)</li>
                          <li>Sound off by default</li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    " "
                  )}
                  <div className="border-[0.02px] border-amber-50"></div>
                </div>
              </div>
            </div>

            {/* To champion accessibility we work with  */}
            <div >
              <p className="text-white text-4xl font-bold py-8">
                To champion accessibility, we work with:
              </p>
              <div className="md:flex md:flex-wrap md:items-center md:justify-around">
                <img
                  src="https://a0.muscache.com/im/pictures/canvas/Canvas-1749669891165/original/5b73d67d-9062-47cf-b575-5ade5bd5b3c9.png?im_w=720"
                  alt="united" 
                  className="md:w-40 md:h-40"
                />
                <img
                  src="https://a0.muscache.com/im/pictures/canvas/Canvas-1749669966574/original/4f1ccf5b-824e-46b0-8a8d-55f9fc162862.png?im_w=720"
                  alt="nationalcouncil"
                 className="md:w-40 md:h-40"
                />
                <img
                  src="https://a0.muscache.com/im/pictures/canvas/Canvas-1749670059292/original/9c5ed495-94d0-49d5-a8be-8fc50ac891ee.png?im_w=720"
                  alt="aapd"
                  className="md:w-40 md:h-40"
                />
                <img
                  src="https://a0.muscache.com/im/pictures/canvas/Canvas-1749670184463/original/b3517ae5-72a7-49af-9f16-d87b7d7c5419.png?im_w=720"
                  alt="redconstrandection"
                  className="md:w-40 md:h-40"
                />
              </div>
            </div>
          </div>
        </div>
        {/* we are here to help */}
        <div className="px-6 py-10 flex flex-col gap-2">
          <div>
            <p className="text-[2.7rem]">We’re here to help</p>
            <p className="text-[#727171] text-[1.6rem] font-light leading-8 w-[90%]">
              Visit our{" "}
              <Link to="/helpcenter" className="underline font-medium w-[70%]">
                Help Center
              </Link>{" "}
              for more information.
            </p>
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
