import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const LoadingSeatList = () => {
  return (
    <form className="flex flex-row justify-between gap-5">
      <div className="flex gap-5">
        <div className="flex flex-col gap-[19px]">
          {[0, 1, 2, 3, 4].map((item) => (
            <Skeleton
              className="bg-white w-[60px] h-[60px] rounded-xl"
              key={item}
            />
          ))}
        </div>
        <div className="flex flex-col gap-[19px]">
          {[0, 1, 2, 3, 4].map((item) => (
            <Skeleton
              className="bg-white w-[60px] h-[60px] rounded-xl"
              key={item}
            />
          ))}
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-[19px]">
          {[0, 1, 2, 3, 4].map((item) => (
            <Skeleton
              className="bg-white w-[60px] h-[60px] rounded-xl"
              key={item}
            />
          ))}
        </div>
        <div className="flex flex-col gap-[19px]">
          {[0, 1, 2, 3, 4].map((item) => (
            <Skeleton
              className="bg-white w-[60px] h-[60px] rounded-xl"
              key={item}
            />
          ))}
        </div>
      </div>
    </form>
  );
};

export default LoadingSeatList;
