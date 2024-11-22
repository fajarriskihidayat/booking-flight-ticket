import Navbar from "@/app/components/Navbar";
import FilterAirline from "./components/FilterAirline";
import FilterClass from "./components/FilterClass";
import FilterFlight from "./components/FilterFlight";
import ListFlights from "./components/ListFlights";
import React, { Suspense } from "react";
import LoadingFilterAirline from "./components/LoadingFilterAirline";
import { useSearchParams } from "next/navigation";
import Title from "./components/Title";

const AvailableFlightsPage = () => {
  return (
    <>
      <section
        id="Header"
        className="bg-[url('/assets/images/background/airplane.png')] bg-no-repeat bg-cover bg-left-top h-[290px] relative"
      >
        <div className="Header-content bg-gradient-to-r from-[#080318] to-[rgba(8,3,24,0)] h-[290px]">
          <Navbar />
          <Title />
          <div className="w-full h-[15px] bg-gradient-to-t from-[#080318] to-[rgba(8,3,24,0)] absolute bottom-0"></div>
        </div>
      </section>

      <section
        id="Content"
        className="container max-w-[1130px] mx-auto -mt-[33px] z-10 relative pb-[105px]"
      >
        <div className="flex w-full">
          <form className="ticket-filter flex flex-col shrink-0 w-[230px] gap-[30px] text-flysha-off-purple">
            <FilterClass />
            <FilterFlight />
            <Suspense fallback={<LoadingFilterAirline />}>
              <FilterAirline />
            </Suspense>
          </form>
          <ListFlights />
        </div>
      </section>
    </>
  );
};

export default AvailableFlightsPage;
