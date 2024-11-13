import { DataTable } from "@/components/ui/data-table";
import { Metadata } from "next";
import { getUsers } from "./lib/data";
import { columns } from "./components/columns-user";

export const metadata: Metadata = {
  title: "Dashboard | Users",
};

const TicketPage = async () => {
  const users = await getUsers();

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Users</div>
      </div>
      <DataTable columns={columns} data={users} />
    </>
  );
};

export default TicketPage;
