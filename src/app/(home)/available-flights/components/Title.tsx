"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const Title = () => {
  const search = useSearchParams();
  const params = {
    departure: search.get("departure"),
    arrival: search.get("arrival"),
  };

  return (
    <div className="title container max-w-[1130px] mx-auto flex flex-col gap-1 pt-[50px] pb-[68px]">
      <h1 className="font-bold text-[32px] leading-[48px]">
        {params.departure && params.arrival
          ? `${params?.departure} to ${params?.arrival}`
          : params.departure
          ? params.departure
          : params.arrival
          ? params.arrival
          : "All Flights"}
      </h1>
      <p className="font-medium text-lg leading-[27px]">
        183,042 flights avaiable
      </p>
    </div>
  );
};

export default Title;
