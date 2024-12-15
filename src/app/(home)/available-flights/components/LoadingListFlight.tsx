import React from "react";
import LoadingFlightItem from "./LoadingFlightItem";

const LoadingListFlight = () => {
  return (
    <div className="flex flex-col w-full gap-6">
      <LoadingFlightItem />
      <LoadingFlightItem />
      <LoadingFlightItem />
    </div>
  );
};

export default LoadingListFlight;
