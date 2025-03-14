import { FlightSeat } from "@prisma/client";
import { useContext } from "react";
import { SeatContext, SeatContextType } from "../providers/seatProvider";

interface SeatItemProps {
  seat: FlightSeat;
}

const SeatItem = ({ seat }: SeatItemProps) => {
  const { setSelectedSeat } = useContext(SeatContext) as SeatContextType;

  return (
    <div className="group flex shrink-0 w-[60px] h-[60px] items-center justify-center relative">
      <label
        htmlFor={seat.seatNumber}
        className="absolute font-bold text-[20px] group-has-[:disabled]:text-[#797684] group-has-[:checked]:text-flysha-black"
      >
        {seat.seatNumber}{" "}
      </label>
      <input
        type="radio"
        name="seat"
        id={seat.seatNumber}
        onClick={() => {
          setSelectedSeat(seat);
        }}
        className="w-[60px] h-[60px] appearance-none rounded-[15px] checked:bg-flysha-light-purple ring-2 ring-white checked:ring-flysha-light-purple disabled:ring-0 disabled:bg-flysha-dark-grey"
        disabled={seat.isBooked ?? false}
      />
    </div>
  );
};

export default SeatItem;
