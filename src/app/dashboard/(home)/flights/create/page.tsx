import { Metadata } from "next";
import { getAirplanes } from "../../airplanes/lib/data";
import FormFlight from "../components/form-flight";

export const metadata: Metadata = {
  title: "Dashboard | Create Data Flight",
};

const CreateFlightPage = async () => {
  const airplanes = await getAirplanes();

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Tambah Data Flight</div>
      </div>

      <FormFlight airplanes={airplanes} type="ADD" />
    </>
  );
};

export default CreateFlightPage;
