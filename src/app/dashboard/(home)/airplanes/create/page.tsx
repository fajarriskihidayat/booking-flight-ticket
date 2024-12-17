import React from "react";
import FormAirplane from "../components/form-airplane";

const CreateAirplanePage = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Tambah Data Airplane</div>
      </div>

      <FormAirplane type="ADD" />
    </>
  );
};

export default CreateAirplanePage;
