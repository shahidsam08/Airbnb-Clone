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

function AntiDiscrimination() {
  return (
    <div>
    <div className="px-5 flex flex-col gap-6">
      {/* Airbnb logo */}
      <div className="py-5">
        <FaAirbnb color="red" size={40} />
      </div>
      {/* 2024 update */}
      <div className="flex flex-col align-middle justify-center items-center gap-3">
        <p className="font-medium text-[1.1rem]">2024 update</p>
        <p className="text-[2rem] leading-9 font-bold text-center text-gray-800">
          Fighting discrimination and making travel more open to all
        </p>
      </div>
      {/* lighthouse data project light house */}
      <div className="flex flex-col items-center text-center py-8 gap-2">
        <PiLighthouse size={40} />
        <p className="text-2xl font-medium">Project Lighthouse</p>
        <p className="text-[1.05rem] text-gray-700">
          Launched in 2020, Project Lighthouse is a tool we use in the United
          States that helps uncover and address potential disparities in how
          users of different perceived races may experience Airbnb. We developed
          Project Lighthouse with guidance from a number of leading civil rights
          and privacy organisations.{" "}
          <span className="underline font-bold">Learn more</span>{" "}
        </p>
      </div>
      {/* using real data , protecting privacy , constantly improving */}
      <div className="flex flex-col gap-10 pb-8">
        <div className="flex flex-col gap-1">
          <p className="text-[1.2rem] font-medium">Using real data</p>
          <p className="text-[0.9rem] text-gray-800">
            We examine how guests and hosts use our platform. Statistical
            analyses help us find opportunities to make Airbnb more open to
            everyone.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[1.2rem] font-medium">Protecting privacy</p>
          <p className="text-[0.9rem] text-gray-800">
            We analyse trends in aggregate and don’t associate perceived race
            information with specific people or accounts.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[1.2rem] font-medium">Constantly improving</p>
          <p className="text-[0.9rem] text-gray-800">
            Our team continues to identify new ways to make Airbnb more open and
            equitable.
          </p>
        </div>
        <div className="border-[0.02px] text-gray-300"></div>
      </div>
      {/* Our ongoing work */}
      <div className="pb-6">
        <p className="text-center text-[1.5rem] font-bold text-gray-800">
          Our ongoing work
        </p>
      </div>
      {/* all the important topic and its details. */}
      <div className="flex flex-col gap-8 pb-6">
        {/* first div */}
        <div>
          <AiOutlineThunderbolt size={30} />
          <p className="text-[1.1rem] font-medium">
            Making Instant Book accessible to more people
          </p>
          <p className="text-[0.9rem] text-gray-800">
            Instant Book – a feature that allows guests to book a listing
            without requiring hosts to approve a reservation request – is an
            important tool that can help reduce potential discrimination in the
            booking process by supporting more objective bookings. Recent
            changes that allow for a more holistic definition of a positive
            track record on Airbnb have helped increase the number of guests
            successfully making reservations via Instant Book.
          </p>
        </div>
        {/* second div */}
        <div>
          <CiWallet size={30} />
          <p className="text-[1.1rem] font-medium">
            Helping hosts respond to booking requests
          </p>
          <p className="text-[0.9rem] text-gray-800">
            New steps that help hosts respond to booking requests in a timely
            manner also increased the booking success rate. These changes
            include making pending reservation requests more prominent for
            hosts. This decreased the number of reservation requests that
            previously went unanswered, effectively increasing the number of
            guests who successfully book a place to stay.
          </p>
        </div>
        {/* Third div */}
        <div>
          <CiStar size={30} />
          <p className="text-[1.1rem] font-medium">
            Helping guests build a positive reputation on Airbnb
          </p>
          <p className="text-[0.9rem] text-gray-800">
            Guests with reviews have a higher booking success rate. We’ve now
            made it easier for guests to add co-travellers with Airbnb accounts
            to their reservation, which enables these co-travellers to receive a
            review even if they did not book the stay.
          </p>
        </div>
        {/* fourth div */}
        <div>
          <IoPeopleOutline size={30} />
          <p className="text-[1.1rem] font-medium">
            Supporting hosts and guests throughout their stay
          </p>
          <p className="text-[0.9rem] text-gray-800">
            We introduced a new feature allowing hosts and guests to display
            their preferred names on their profiles, after confirming their
            legal name. We’re also improving the process for hosts or guests who
            report being identified by the incorrect pronoun in a review. If a
            host or guest expresses this concern, the pronoun is replaced with
            the user’s preferred name.
          </p>
        </div>
        {/* fifth div */}
        <div>
          <GrShieldSecurity size={30} />
          <p className="text-[1.1rem] font-medium">
            Strengthening our policies and procedures
          </p>
          <p className="text-[0.9rem] text-gray-800">
            We’ve refined the process by which hosts decline a reservation
            request to help inform them about acceptable and unacceptable
            reasons for rejecting a booking request. We’ve also updated our{" "}
            <span className="underline font-bold">
              Nondiscrimination Policy
            </span>{" "}
            to make it more effective and incorporated new protections against
            caste discrimination. Lastly, we are implementing a series of
            changes to help enhance fairness when a host cancels an existing
            reservation.
          </p>
        </div>
        {/* sixth div */}
        <div>
          <PiMoneyWavy size={30} />
          <p className="text-[1.1rem] font-medium">
            Sharing more information about economic empowerment opportunities
            available on Airbnb
          </p>
          <p className="text-[0.9rem] text-gray-800">
            We are expanding the{" "}
            <span className="underline font-bold">
              Airbnb Entrepreneurship Academy,
            </span>{" "}
            which introduces people from diverse and historically
            underrepresented communities to hosting on our platform in
            partnership with organisations including the Hispanic Wealth
            Project, Brotherhood Crusade and United Spinal Association. We’re
            also continuing to participate in Operation HOPE’s 1 Million Black
            Businesses (1MBB) initiative, which provides support and coaching
            for Black entrepreneurs to start, grow or scale their businesses.
          </p>
        </div>
        {/* last (seventh div) */}
        <div>
          <PiWheelchairDuotone size={30} />
          <p className="text-[1.1rem] font-medium">
            Continuing our commitment to guests with mobility needs
          </p>
          <p className="text-[0.9rem] text-gray-800">
            Our accessibility feature search filters make it easier for guests to find and book stays that meet their needs. Through Accessibility Review, we review every accessibility feature submitted by hosts for accuracy.
          </p>
        </div>
        <div className="border-[0.02px] text-gray-300"></div>
      </div>
      </div>
      {/* Footer part  */}
      <Footer />
    </div>
  );
}

export default AntiDiscrimination;
