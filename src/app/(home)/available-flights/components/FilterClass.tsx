"use client";

import { TypeSeat } from "@prisma/client";
import React, { ChangeEvent, useContext } from "react";
import {
  FContext,
  FilterActionKind,
  FlightContext,
} from "../providers/flight-provider";

const SEAT_OPTIONS: TypeSeat[] = ["ECONOMY", "BUSINESS", "FIRST"];

const FilterClass = () => {
  const { dispatch } = useContext(FlightContext) as FContext;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FilterActionKind.SET_SEAT,
      payload: {
        planeId: "",
        seat: e.target.value,
      },
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold">Seat Class</p>
      {SEAT_OPTIONS.map((item, i) => (
        <label
          htmlFor={item}
          key={i}
          className="font-semibold flex items-center gap-[10px] has-[:checked]:text-white"
        >
          <input
            type="radio"
            name="seat"
            id={item}
            value={item}
            onChange={handleChange}
            className="w-[18px] h-[18px] appearance-none checked:border-[3px] checked:border-solid checked:border-flysha-black rounded-full checked:bg-flysha-light-purple ring-2 ring-flysha-off-purple checked:ring-white"
          />
          {item}
        </label>
      ))}
    </div>
  );
};

export default FilterClass;
