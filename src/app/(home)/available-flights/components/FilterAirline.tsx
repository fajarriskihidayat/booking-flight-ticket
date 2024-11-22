import React from "react";
import { getAirplanes } from "../../lib/data";
import CheckboxAirline from "./CheckboxAirline";

const FilterAirline = async () => {
  const airplanes = await getAirplanes();

  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold">Airlines</p>
      {airplanes.map((item, i) => (
        <CheckboxAirline item={item} key={i} />
      ))}
    </div>
  );
};

export default FilterAirline;
