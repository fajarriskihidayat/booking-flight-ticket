"use client";

import { useContext } from "react";
import FlightItem from "./FlightItem";
import { FContext, FlightContext } from "../providers/flight-provider";
import LoadingListFlight from "./LoadingListFlight";

const ListFlights = () => {
  const { flights, isLoading } = useContext(FlightContext) as FContext;

  if (isLoading) {
    return <LoadingListFlight />;
  }

  return (
    <div className="ticket-container flex flex-col w-full gap-6">
      {flights?.map((item) => (
        <FlightItem key={item.id} data={item} />
      ))}
      <p className="text-center text-sm text-[#A0A0AC] h-fit">
        You’ve reached the end of results.
      </p>
    </div>
  );
};

export default ListFlights;
