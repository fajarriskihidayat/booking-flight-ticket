"use client";

import { useSearchParams } from "next/navigation";
import React, { useContext } from "react";
import { FContext, FlightContext } from "../providers/flight-provider";
import { Skeleton } from "@/components/ui/skeleton";

const Title = () => {
  const search = useSearchParams();
  const params = {
    departure: search.get("departure"),
    arrival: search.get("arrival"),
  };

  const { flights, isLoading } = useContext(FlightContext) as FContext;

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
        {isLoading ? (
          <Skeleton className="w-[140px] h-3 bg-white" />
        ) : (
          `${flights?.length} flights avaiable`
        )}
      </p>
    </div>
  );
};

export default Title;
