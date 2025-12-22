import { FaAirbnb } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import Footer from "../../components/Footer";
import { FaAngleLeft } from "react-icons/fa6";
import { IoMdBookmark } from "react-icons/io";
import { useState } from "react";

function CancelOption() {
  const [isHelpful, isSethelpful] = useState("value");
  return (
    <div>
      <div className="flex flex-col gap-10 ">
        {/* headers : in which airbnb logo and the search icons */}
        <div className="flex flex-row items-center align-middle justify-between px-6 py-4 border-b-[0.3px] sticky top-0 z-50 bg-white">
          <div className="flex flex-row align-middle  items-center gap-1">
            <Link to="/">
              <FaAirbnb size={45} color="red" />
            </Link>
            <Link to="/helpcenter" className="text-[1.3rem] font-medium">
              Help Centre
            </Link>
          </div>
          <div>
            <MdSearch size={25} />
          </div>
        </div>
        {/* ------------------all the body data which inside this div. -------------------------*/}
        <div className="px-8 flex flex-col gap-14">
          {/* login or sign up option */}
          <div className="border-2 text-center py-3 rounded-[0.7rem] bg-[#d20962] text-white text-[1.2rem]">
            Log in or Sign up
          </div>
          {/* booking basic link box */}
          <div className="flex flex-row items-center align-middle gap-3">
            <FaAngleLeft size={15} className="text-gray-400" />
            <p className="underline text-gray-700 text-[0.9rem]">
              Cancellations
            </p>
          </div>
          {/* community policy */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-[#686666] font-medium">Community policy</p>
              <p className="text-4xl font-semibold text-[#3c3a3a]">
                Major Disruptive Events Policy
              </p>
            </div>
            <div>
              <div className="flex flex-col gap-6">
                <p className="text-[#686666] font-medium">In this article</p>
                <p className="flex flex-row items-center pgn-middle gap-2">
                  <IoMdBookmark size={20} />
                  <span className="hover:cursor-pointer underline underline-offset-2 text-[1.1rem]">
                    Overview
                  </span>
                </p>
                {/* second list */}
                <p className="flex flex-row items-center align-middle gap-2">
                  <IoMdBookmark size={20} />
                  <span className="hover:cursor-pointer underline underline-offset-2 text-[1.1rem]">
                    Reservation affected by Event
                  </span>
                </p>
                {/* third list */}
                <p className="flex flex-row items-center align-middle gap-2">
                  <IoMdBookmark size={20} />
                  <span className="hover:cursor-pointer underline underline-offset-2 text-[1.1rem]">
                    What is not covered
                  </span>
                </p>
                {/* fourth list */}
                <p className="flex flex-row items-center align-middle gap-2">
                  <IoMdBookmark size={20} />
                  <span className="hover:cursor-pointer underline underline-offset-2 text-[1.1rem]">
                    How this policy affects hosts
                  </span>
                </p>
                {/* fifth list */}
                <p className="flex flex-row items-center align-middle gap-2">
                  <IoMdBookmark size={20} />
                  <span className="hover:cursor-pointer underline underline-offset-2 text-[1.1rem]">
                    Other things to be aware of
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="border-[0.02px] border-[#cbc9c9]"></div>
          {/* overview  */}
          <div className="flex flex-col gap-5">
            <p className="text-3xl">Overview</p>
            <p className="text-[1.1rem] text-[#504f4f]">
              In general, cancellations and refunds for Airbnb reservations are
              governed by the listing’s{" "}
              <span className="underline font-medium text-black">
                cancellation policy.
              </span>{" "}
              In the rare circumstances that large-scale events prevent or
              legally prohibit completion of a reservation, the Major Disruptive
              Events Policy (the “Policy”) may apply. When this Policy applies,
              guests can cancel their reservation and receive a refund, travel
              credit and/or other consideration regardless of the reservation’s{" "}
              <span className="underline font-medium text-black">
                cancellation policy.
              </span>{" "}
              and{" "}
              <span className="underline font-medium text-black">
                hosts can cancel without fees or other adverse consequences
              </span>{" "}
              although their listing’s calendar will be blocked for the dates of
              the cancelled reservation.
            </p>
            <p className="text-[1.1rem] text-[#504f4f]">
              This Policy applies to reservations for homes, services and
              experiences and is applicable to reservations that are ongoing or
              that have a check-in on or after the effective date, except as
              otherwise notified by Airbnb to users. The Major Disruptive Events
              Policy is not an insurance policy.
            </p>
          </div>
          {/* what events are covered */}
          <div className="flex flex-col gap-5">
            <p className="text-2xl font-bold text-gray-700">
              What events are covered
            </p>
            <p className="text-[1.1rem] text-[#504f4f]">
              The following events are covered under this Policy if they affect
              your reservation location, occur after the time of booking and
              prevent or legally prohibit completion of a future or ongoing
              reservation (referred to in this Policy as “Events”):
            </p>
            <p className="text-[1.1rem] text-[#504f4f]">
              <span className="font-bold text-black">
                Declared public health emergencies and epidemics.
              </span>{" "}
              Government-declared epidemics, pandemics and public health
              emergencies. This does not include diseases that are endemic (for
              example, the flu) or commonly associated with an area (for
              example, malaria in Thailand). COVID-19 is not covered under this
              Major Disruptive Events Policy.
            </p>
            <p className="text-[1.1rem] text-[#504f4f]">
              <span className="font-bold text-black">
                Government travel restrictions.
              </span>{" "}
              Mandatory travel restrictions imposed by a governmental agency,
              such as an evacuation order or lockdown order. This does not
              include non-binding travel advisories and similar government
              guidance.
            </p>
            <p className="text-[1.1rem] text-[#504f4f]">
              <span className="font-bold text-black">
                Military actions and other hostilities.
              </span>
              Acts of war, hostilities, invasions, civil war, terrorism,
              explosions, bombings, rebellions, riots and insurrection.
            </p>
            <p className="text-[1.1rem] text-[#504f4f]">
              <span className="font-bold text-black">
                Large-scale outages of essential utilities.
              </span>
              Prolonged outages of essential utilities, such as heat, water and
              electricity, affecting the vast majority of homes in a given
              location.
            </p>
            <p className="text-[1.1rem] text-[#504f4f]">
              <span className="font-bold text-black">
                Unforeseeable natural disasters and severe weather events.
              </span>
              Unforeseeable natural disasters and severe weather events.
              Unforeseeable natural disasters, like earthquakes and tsunamis,
              and unforeseeable severe weather events, like tornadoes. This does
              not include events that are foreseeable for a given location, as
              described further below.
            </p>
          </div>
          {/* What happens if a reservation is affected by a covered Event */}
          <div className="flex flex-col gap-5">
            <p className="text-2xl font-bold text-gray-700">
              What happens if a reservation is affected by a covered Event
            </p>
            <p className="text-[1.1rem] text-[#504f4f]">
              When a large-scale event occurs, we assess the situation to
              determine whether the Major Disruptive Events Policy applies. If
              it does, we activate the Policy for the affected area and
              timeframe where we anticipate that the Event will prevent or
              legally prohibit completion of reservations. Reservations outside
              of the defined area and timeframe may not be eligible although{" "}
              <span className="font-medium text-gray-800 underline">
                hosts may still be able to cancel without adverse consequences
                if they are unable to host.
              </span>{" "}
              We continuously monitor these situations and adjust coverage as
              needed to reflect changing conditions. If you believe this Policy
              applies to your reservation, please contact us to enquire about
              eligibility.
            </p>
          </div>
          {/* what is not covered. */}
          <div className="flex flex-col gap-5">
            <p className="text-2xl font-bold text-gray-700">
              What is not covered
            </p>
            <p className="text-[1.1rem] text-[#202020] font-light">
              We understand that other circumstances outside of your control may
              disrupt your plans. In any situations not listed above, your
              reservation remains subject to the host’s{" "}
              <span className="font-medium text-gray-800 underline">
                cancellation policy
              </span>{" "}
              for the listing.
            </p>
            <p className="text-[1.1rem] text-[#101010] font-light">
              Examples of common events not covered by this policy include:
            </p>
            <ul className="flex flex-col gap-2 list-disc pl-10">
              <li>
                Events that affect a guest or their ability to travel, but not
                the reservation location
              </li>
              <li>Unexpected injury or illness</li>
              <li>
                Government obligations like jury duty or court appearances
              </li>
              <li>
                Non-binding travel advisories or other government guidance that
                fall short of a travel ban or prohibition
              </li>
              <li>
                Cancellation or rescheduling of an event for which the
                reservation was made
              </li>
              <li>
                Transport disruptions such as airline insolvency, flight
                cancellations, transport strikes and road closures due to
                maintenance
              </li>
              <li>
                <span className="font-semibold text-gray-900 underline">
                  Weather or natural conditions that are common enough to be
                  foreseeable in a given location,
                </span>
                such as hurricanes in Florida during hurricane season or winter
                weather in the northern hemisphere during winter months – unless
                the event triggers a covered Event that prevents completion of
                the reservation, such as government-issued mandatory travel
                restrictions
              </li>
            </ul>
            <p className="text-[1.1rem] text-[#202020] font-light">
              For reservations not covered by this Policy, we encourage guests
              and hosts to find a mutually acceptable arrangement, such as a
              full or partial refund or an alteration of the booking dates. Note
              that any refunds outside of the reservation’s cancellation policy
              are at the host’s discretion. Airbnb does not take part in or
              guarantee such refunds.
            </p>
          </div>
          {/* how this policy affect hosts. */}
          <div className="flex flex-col gap-5">
            <p className="text-2xl font-bold text-gray-700">
              How this policy affects hosts
            </p>
            <p className="text-[1.1rem] text-[#504f4f]">
              If a reservation is covered by the Major Disruptive Events Policy,
              hosts can cancel{" "}
              <span className="font-semibold text-gray-900 underline">
                without fees or other adverse consequences.
              </span>{" "}
              If a host cancels under this policy, their listing’s calendar will
              be blocked for the dates of the cancelled reservation. If a
              reservation is cancelled under this Policy, the host does not
              receive a payout for the cancelled dates of the reservation, or,
              if the payout has already been made, the refunded amount will be
              withheld from the next payout(s).
            </p>
            <p className="text-[1.1rem] text-[#504f4f]">
              Regardless of whether a reservation is covered by this Policy,
              hosts can cancel for certain{" "}
              <span className="font-semibold text-gray-900 underline">
                valid reasons,
              </span>{" "}
              such as major damage to a listing, without fees or other adverse
              consequences. Hosts are obligated to cancel a reservation if their
              listing is uninhabitable or is inconsistent with what the guest
              booked. Failure to do so may result in listing suspension,
              cancellation of existing reservations and refunds to guests until
              the listing is habitable and consistent with the listing
              description. This also violates our{" "}
              <span className="font-semibold text-gray-900 underline">
                Ground rules
              </span>
              for hosts and can lead to consequences up to and including account
              removal
            </p>
          </div>
          {/* Other things to be aware of */}
          <div className="flex flex-col gap-5">
            <p className="text-2xl font-medium text-gray-900">
              Other things to be aware of
            </p>
            <p className="text-[1.1rem] text-[#201f1f]">
              This Policy does not limit your rights under local regulations,
              and any decisions made by Airbnb under this Policy do not affect
              your statutory rights.
            </p>
          </div>
          {/* did this article helps? yes or no */}
          <div className="flex flex-row gap-3 items-center align-middle">
            <p className="font-bold text-[1.3rem]">Did this article help? </p>
            <p
              className="underline text-black font-medium hover:cursor-pointer"
              onClick={() => {
                isSethelpful("yes");
              }}
            >
              Yes
            </p>
            <p
              className="underline text-black font-medium hover:cursor-pointer"
              onClick={() => {
                isSethelpful("no");
              }}
            >
              No
            </p>
          </div>
          {/* dynamic content which help to get feedback from the users. */}
          <div className="pb-10">
            {isHelpful === "yes" ? (
              <p className="font-bold text-[1.1rem]">
                Thank you for letting us know!
              </p>
            ) : isHelpful === "no" ? (
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                  <p className="text-[1.3rem] font-medium text-gray-900">
                    Tell us a little more.
                  </p>
                  <p className="text-[#555454]">
                    Please select all that apply.
                  </p>
                </div>
                <form action="" className="flex flex-col gap-3 pl-3">
                  <div className="flex gap-4 flex-row">
                    <input
                      type="checkbox"
                      id="first"
                      className="scale-200 border-2 border-gray-400 accent-black"
                    />
                    <label
                      for="first"
                      className="text-[1.2rem] text-[#555454] font-light"
                    >
                      I didn’t find the answer to my question
                    </label>
                  </div>
                  {/* second */}
                  <div className="flex gap-4 flex-row">
                    <input
                      type="checkbox"
                      id="second"
                      className="scale-200 border-2 border-gray-400 accent-black"
                    />
                    <label
                      for="second"
                      className="text-[1.2rem] text-[#555454] font-light"
                    >
                      This info is confusing or unclear
                    </label>
                  </div>
                  {/* third */}
                  <div className="flex gap-4 flex-row">
                    <input
                      type="checkbox"
                      id="third"
                      className="scale-200 border-2 border-gray-400 accent-black"
                    />
                    <label
                      for="third"
                      className="text-[1.2rem] text-[#555454] font-light"
                    >
                      These instructions didn’t work
                    </label>
                  </div>
                  {/* fourth */}
                  <div className="flex gap-4 flex-row">
                    <input
                      type="checkbox"
                      id="fourth"
                      className="scale-200 border-2 border-gray-400 accent-black"
                    />
                    <label
                      for="fourth"
                      className="text-[1.2rem] text-[#555454] font-light"
                    >
                      Something else
                    </label>
                  </div>
                  <div>
                    <button
                      className="bg-black py-2 px-5 rounded-lg text-white"
                      type="submit"
                      name="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* ----------------------------- footer of the page.-------------------------------------- */}
      </div>

      <Footer />
    </div>
  );
}

export default CancelOption;
