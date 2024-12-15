"use client";

import { Airplane } from "@prisma/client";
import React, { ChangeEvent, FC, useContext } from "react";
import {
  FContext,
  FilterActionKind,
  FlightContext,
} from "../providers/flight-provider";

interface CheckboxAirlineProps {
  item: Airplane;
}

const CheckboxAirline: FC<CheckboxAirlineProps> = ({ item }) => {
  const { dispatch } = useContext(FlightContext) as FContext;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    dispatch({
      type: checked
        ? FilterActionKind.ADD_PLANE
        : FilterActionKind.REMOVE_PLANE,
      payload: {
        planeId: value,
      },
    });
  };

  return (
    <label
      htmlFor={item.name}
      className="font-semibold flex items-center gap-[10px] text-white"
    >
      <input
        type="checkbox"
        name="airlines"
        value={item.id}
        id={item.name}
        onChange={handleChange}
        className="w-[18px] h-[18px] appearance-none checked:border-[3px] checked:border-solid checked:border-flysha-black rounded-[6px] checked:bg-flysha-light-purple ring-2 ring-flysha-off-purple checked:ring-white"
      />
      {item.name}
    </label>
  );
};

export default CheckboxAirline;
