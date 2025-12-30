import { FaAirbnb } from "react-icons/fa6";
import { PiLighthouse } from "react-icons/pi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiWallet } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { GrShieldSecurity } from "react-icons/gr";
import { PiMoneyWavy } from "react-icons/pi";
import { PiWheelchairDuotone } from "react-icons/pi";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function AntiDiscrimination() {
  return (
    <div>
      <div className="md:py-5 md:px-10 px-5 py-5">
        <Link to="/">
          <FaAirbnb color="red" size={40} />
        </Link>
      </div>
      <div className="md:flex md:flex-col md:justify-center md:items-center">
        <div className="px-5 flex flex-col gap-6 md:gap-10 pb-15 md:flex md:fle-col md:items-center md:justify-center md:w-[80%]">
          {/* Airbnb logo */}

          {/* 2024 update */}
          <div className="flex flex-col align-middle justify-center items-center gap-3">
            <p className="font-medium text-[1.1rem]">2024 update</p>
            <p className="text-[2rem] leading-9 font-bold text-center text-gray-800 md:text-5xl md:leading-14 md:w-[70%]">
              Fighting discrimination and making travel more open to all
            </p>
          </div>
          {/* lighthouse data project light house */}
          <div className="flex flex-col items-center text-center py-8  gap-2 md:gap-3">
            <PiLighthouse size={40} />
            <p className="text-2xl font-medium md:text-3xl">
              Project Lighthouse
            </p>
            <p className="text-[1.05rem] text-gray-700 md:w-[70%] md:text-[1.3rem]">
              Launched in 2020, Project Lighthouse is a tool we use in the
              United States that helps uncover and address potential disparities
              in how users of different perceived races may experience Airbnb.
              We developed Project Lighthouse with guidance from a number of
              leading civil rights and privacy organisations.{" "}
              <span className="underline font-bold">Learn more</span>{" "}
            </p>
          </div>
          {/* using real data , protecting privacy , constantly improving */}
          <div className="flex flex-col gap-10 pb-8 md:flex-row md:w-[90%]">
            <div className="flex flex-col gap-1 md:gap-2">
              <p className="text-[1.2rem] font-medium md:text-2xl">Using real data</p>
              <p className="text-[0.9rem] text-gray-800 md:text-[1.13rem]">
                We examine how guests and hosts use our platform. Statistical
                analyses help us find opportunities to make Airbnb more open to
                everyone.
              </p>
            </div>
            <div className="flex flex-col gap-1 md:gap-2">
              <p className="text-[1.2rem] font-medium md:text-2xl">Protecting privacy</p>
              <p className="text-[0.9rem] text-gray-800 md:text-[1.13rem]">
                We analyse trends in aggregate and don’t associate perceived
                race information with specific people or accounts.
              </p>
            </div>
            <div className="flex flex-col gap-1 md:gap-2 ">
              <p className="text-[1.2rem] font-medium md:text-2xl">Constantly improving</p>
              <p className="text-[0.9rem] text-gray-800 md:text-[1.13rem]">
                Our team continues to identify new ways to make Airbnb more open
                and equitable.
              </p>
            </div>
            <div className="border-[0.02px] text-gray-300 md:hidden"></div>
          </div>
          {/* Our ongoing work */}
          <div className="pb-6">
            <p className="text-center text-[1.5rem] font-bold text-gray-800 md:text-4xl">
              Our ongoing work
            </p>
          </div>
          {/* all the important topic and its details. */}
          <div className="flex flex-col gap-8 pb-6 md:flex-row md:flex-wrap md:items-start md:justify-around">
            {/* first div */}
            <div className="md:w-[40%] md:flex md:flex-col md:gap-2">
              <AiOutlineThunderbolt size={30} />
              <p className="text-[1.1rem] font-medium md:text-[1.3rem]">
                Making Instant Book accessible to more people
              </p>
              <p className="text-[0.9rem] text-gray-800 md:text-[1.1rem]">
                Instant Book – a feature that allows guests to book a listing
                without requiring hosts to approve a reservation request – is an
                important tool that can help reduce potential discrimination in
                the booking process by supporting more objective bookings.
                Recent changes that allow for a more holistic definition of a
                positive track record on Airbnb have helped increase the number
                of guests successfully making reservations via Instant Book.
              </p>
            </div>
            {/* second div */}
            <div className="md:w-[40%] md:flex md:flex-col md:gap-2">
              <CiWallet size={30} />
              <p className="text-[1.1rem] font-medium md:text-[1.3rem]">
                Helping hosts respond to booking requests
              </p>
              <p className="text-[0.9rem] text-gray-800 md:text-[1.1rem] md:leading-6">
                New steps that help hosts respond to booking requests in a
                timely manner also increased the booking success rate. These
                changes include making pending reservation requests more
                prominent for hosts. This decreased the number of reservation
                requests that previously went unanswered, effectively increasing
                the number of guests who successfully book a place to stay.
              </p>
            </div>
            {/* Third div */}
            <div className="md:w-[40%] md:flex md:flex-col md:gap-2">
              <CiStar size={30} />
              <p className="text-[1.1rem] font-medium md:text-[1.3rem]">
                Helping guests build a positive reputation on Airbnb
              </p>
              <p className="text-[0.9rem] text-gray-800 md:text-[1.1rem] md:leading-6">
                Guests with reviews have a higher booking success rate. We’ve
                now made it easier for guests to add co-travellers with Airbnb
                accounts to their reservation, which enables these co-travellers
                to receive a review even if they did not book the stay.
              </p>
            </div>
            {/* fourth div */}
            <div className="md:w-[40%] md:flex md:flex-col md:gap-2">
              <IoPeopleOutline size={30} />
              <p className="text-[1.1rem] font-medium md:text-[1.3rem]">
                Supporting hosts and guests throughout their stay
              </p>
              <p className="text-[0.9rem] text-gray-800 md:text-[1.1rem] md:leading-6">
                We introduced a new feature allowing hosts and guests to display
                their preferred names on their profiles, after confirming their
                legal name. We’re also improving the process for hosts or guests
                who report being identified by the incorrect pronoun in a
                review. If a host or guest expresses this concern, the pronoun
                is replaced with the user’s preferred name.
              </p>
            </div>
            {/* fifth div */}
            <div className="md:w-[40%] md:flex md:flex-col md:gap-2">
              <GrShieldSecurity size={30} />
              <p className="text-[1.1rem] font-medium md:text-[1.3rem]">
                Strengthening our policies and procedures
              </p>
              <p className="text-[0.9rem] text-gray-800 md:text-[1.1rem] md:leading-6">
                We’ve refined the process by which hosts decline a reservation
                request to help inform them about acceptable and unacceptable
                reasons for rejecting a booking request. We’ve also updated our{" "}
                <span className="underline font-bold">
                  Nondiscrimination Policy
                </span>{" "}
                to make it more effective and incorporated new protections
                against caste discrimination. Lastly, we are implementing a
                series of changes to help enhance fairness when a host cancels
                an existing reservation.
              </p>
            </div>
            {/* sixth div */}
            <div className="md:w-[40%] md:flex md:flex-col md:gap-2">
              <PiMoneyWavy size={30} />
              <p className="text-[1.1rem] font-medium md:text-[1.3rem]">
                Sharing more information about economic empowerment
                opportunities available on Airbnb
              </p>
              <p className="text-[0.9rem] text-gray-800 md:text-[1.1rem] md:leading-6">
                We are expanding the{" "}
                <span className="underline font-bold">
                  Airbnb Entrepreneurship Academy,
                </span>{" "}
                which introduces people from diverse and historically
                underrepresented communities to hosting on our platform in
                partnership with organisations including the Hispanic Wealth
                Project, Brotherhood Crusade and United Spinal Association.
                We’re also continuing to participate in Operation HOPE’s 1
                Million Black Businesses (1MBB) initiative, which provides
                support and coaching for Black entrepreneurs to start, grow or
                scale their businesses.
              </p>
            </div>
            {/* last (seventh div) */}
            <div className="md:w-[40%] md:flex md:flex-col md:gap-2">
              <PiWheelchairDuotone size={30} />
              <p className="text-[1.1rem] font-medium md:text-[1.3rem]">
                Continuing our commitment to guests with mobility needs
              </p>
              <p className="text-[0.9rem] text-gray-800 md:text-[1.1rem] md:leading-6">
                Our accessibility feature search filters make it easier for
                guests to find and book stays that meet their needs. Through
                Accessibility Review, we review every accessibility feature
                submitted by hosts for accuracy.
              </p>
            </div>
            <div className="border-[0.02px] text-gray-300 md:hidden"></div>
          </div>
          {/* our commitment of fighting discrimination */}
          <div className="flex flex-col gap-7 items-center text-center pb-8 md:w-[70%]">
            <p className="text-[1.5rem] font-semibold md:text-4xl">
              Our commitment to fighting discrimination
            </p>
            <p className="text-[0.9rem] text-gray-800 md:text-[1.1rem] md:leading-6">
              This work follows a history of working to fight discrimination
              including one of the first Civil Rights Audits in 2016, an
              additional update in 2019, the announcement of Project Lighthouse
              in 2020 and our 2022 initial release of Project Lighthouse data.
              These updates covered a range of evolving initiatives and efforts
              to support everyone being successful on Airbnb.
            </p>
            <img
              src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-ad-landing-2024/original/2a8bf1bc-7fe0-4c55-b79a-68cef6d7018f.png"
              alt="discrimination"
              className="rounded-2xl"
            />
          </div>
          {/* border line bottom side */}
          <div className="border-[0.02px] text-gray-300"></div>

          {/* The Airbnb community commitment. */}
          <div className="text-center flex flex-col gap-4 pb-10 pt-8 md:w-[70%]">
            <div>
              <p className="text-[1.6rem] font-medium md:text-4xl">
                The Airbnb Community Commitment
              </p>
            </div>
            <div>
              <p className="text-[1.1rem] text-gray-700 md:text-[1.3rem]">
                Since 2016, we’ve asked everyone who uses Airbnb to commit to
                treating others with respect and without judgement or bias by
                agreeing to the{" "}
                <span className="underline font-bold">
                  Airbnb Community Commitment.
                </span>{" "}
                Anyone who doesn’t agree is denied access to or removed from our
                platform.
              </p>
            </div>
            <div className="px-6 py-4 rounded-2xl bg-pink-100 md:py-10 md:px-4 md:bg-gray-400">
              <p className="text-[1.2rem] font-bold text-gray-800 leading-6 md:leading-8 md:text-[1.4rem]">
                I will treat everyone in the community – regardless of their
                race, religion, national origin, ethnicity, skin colour,
                disability, sex, gender identity, sexual orientation or age –
                with respect and without judgement or bias.
              </p>
            </div>
          </div>
          <div className="border-[0.02px] text-gray-300"></div>
          {/* Read the 2024 report */}
          <div className="flex flex-col gap-6 pt-6 pb-8 md:w-[70%]">
            <div className="text-center flex flex-col gap-2">
              <p className="text-[1.4rem] font-semibold md:text-3xl">
                Read the 2024 report
              </p>
              <p className="text-[1.1rem] md:text-[1.3rem]">
                The 2024 Project Lighthouse Update includes key Project
                Lighthouse findings and our complete data set as well as
                progress we’ve made since 2016.
              </p>
            </div>
            <div className="md:flex md:items-center md:justify-center">
              <button className="bg-[#DA1249] rounded-3xl w-full py-3 text-white text-[1.1rem] md:w-[40%]">
                Show report
              </button>
            </div>
            <div className="text-center">
              <p className="text-[1.1rem]">
                This report follows updates on our work we issued in{" "}
                <span className="underline font-semibold">2016,</span>{" "}
                <span className="underline font-semibold">2019,</span>
                and <span className="underline font-semibold">2022.</span>
              </p>
            </div>
          </div>
          <div className="border-[0.02px] text-gray-300"></div>
          {/* Meet our partners */}
          <div className="text-center pt-6 flex flex-col gap-8 md:w-[70%]">
            <div className="flex flex-col gap-3">
              <p className="text-[1.6rem] font-semibold text-gray-800 md:text-3xl">
                Meet our partners
              </p>
              <p className="text-[1.1rem] text-gray-700 md:text-2xl">
                We consult and collaborate with leading civil rights groups and
                privacy organisations, including these partners who have advised
                us on Project Lighthouse.
              </p>
            </div>
            <div className="flex flex-row flex-wrap gap-2 items-center justify-center">
              <img
                src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-ad-landing-2024/original/6b8bf60d-4710-4da3-ae5a-5c2a2cba63be.png"
                alt="advancingjustice"
                width={80}
                className="md:w-60"
              />
              <img
                src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-ad-landing-2024/original/b06a6a0e-2fcf-4855-b5bf-d6c5e7a02397.png"
                alt="centerDemocracy"
                width={80}
                className="md:w-50"
              />
              <img
                src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-ad-landing-2024/original/729fcdc5-e5cc-4b70-af06-38c1403445fa.png"
                alt="colorofchange"
                width={80}
                className="md:w-50"
              />
              <img
                src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-ad-landing-2024/original/6fc739b8-5c44-45bc-acfd-c31e9700dc24.png"
                alt="leadership"
                width={80}
                className="md:w-40"
              />
              <img
                src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-ad-landing-2024/original/b800d745-1024-4758-9409-339629aa47d5.png"
                alt="lulac"
                width={80}
                className="md:w-40"
              />
              <img
                src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-ad-landing-2024/original/9225b73a-cad0-4a82-a23b-90305457b882.png"
                alt="naacp"
                width={80}
                className="md:w-40"
              />
              <img
                src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-ad-landing-2024/original/49b70484-e60a-4184-9fef-520f8d1d3315.png"
                alt="nan"
                width={80}
                className="md:w-40"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Footer part  */}
      <Footer />
    </div>
  );
}

export default AntiDiscrimination;
