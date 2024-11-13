import { FC } from "react";
import FormAirplane from "../../components/form-airplane";
import { getAirplaneById } from "../../lib/actions";
import { Metadata } from "next";

type Params = {
  id: string;
};

interface EditAirplanePageProps {
  params: Params;
}

export const metadata: Metadata = {
  title: "Dashboard | Edit Data Airplane",
};

const EditAirplanePage: FC<EditAirplanePageProps> = async ({ params }) => {
  const data = await getAirplaneById(params.id);

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Edit Data Airplane</div>
      </div>

      <FormAirplane type="EDIT" defaultValues={data} />
    </>
  );
};

export default EditAirplanePage;
