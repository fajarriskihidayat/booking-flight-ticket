import { Metadata } from "next";
import { getAirplanes } from "../../../airplanes/lib/data";
import FormFlight from "../../components/form-flight";
import { FC } from "react";
import { getFlightById } from "../../lib/data";

type Params = {
  id: string;
};

interface EditFlightPageProps {
  params: Params;
}

export const metadata: Metadata = {
  title: "Dashboard | Edit Data Flight",
};

const EditFlightPage: FC<EditFlightPageProps> = async ({ params }) => {
  const airplanes = await getAirplanes();
  const flight = await getFlightById(params.id);

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Edit Data Flight</div>
      </div>

      <FormFlight airplanes={airplanes} type="EDIT" defaultValues={flight} />
    </>
  );
};

export default EditFlightPage;
