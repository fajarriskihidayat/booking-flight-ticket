import Navbar from "@/app/components/Navbar";
import React from "react";
import TicketCard from "./components/TicketCard";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { countTicket, getMyTickets } from "./lib/data";

const MyTicketsPage = async () => {
  const { session, user } = await getUser();

  if (!session || user.role !== "CUSTOMER") {
    return redirect("/sign-in");
  }

  const data = await getMyTickets(user.id);
  const count = await countTicket(user.id);

  return (
    <>
      <section
        id="Header"
        className="bg-[url('/assets/images/background/airplane.png')] bg-no-repeat bg-cover bg-left-top h-[290px] relative"
      >
        <div className="Header-content bg-gradient-to-r from-[#080318] to-[rgba(8,3,24,0)] h-[290px]">
          <Navbar />
          <div className="title container max-w-[1130px] mx-auto flex flex-col gap-1 pt-[50px] pb-[68px]">
            <h1 className="font-bold text-[32px] leading-[48px]">My Tickets</h1>
            <p className="font-medium text-lg leading-[27px]">
              {count} flight tickets
            </p>
          </div>
          <div className="w-full h-[15px] bg-gradient-to-t from-[#080318] to-[rgba(8,3,24,0)] absolute bottom-0"></div>
        </div>
      </section>

      <section
        id="Content"
        className="container max-w-[1130px] mx-auto flex justify-end -mt-[60px] pb-[100px] z-10 relative"
      >
        <div className="ticket-container flex flex-col w-[900px] gap-6">
          {data.map((val) => (
            <TicketCard key={val.id} data={val} />
          ))}

          <p className="text-center text-sm text-[#A0A0AC] h-fit">
            You’ve reached the end of results.
          </p>
        </div>
      </section>
    </>
  );
};

export default MyTicketsPage;
