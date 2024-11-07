"use client";

import { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState, useFormStatus } from "react-dom";
import { saveAirplane, updateAirplane } from "../lib/actions";
import { Airplane } from "@prisma/client";
import { FC } from "react";

interface FormAirplaneProps {
  type?: "ADD" | "EDIT";
  defaultValues?: Airplane | null;
}

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} className="w-full">
      {pending ? "Loading..." : "Submit"}
    </Button>
  );
};

const FormAirplane: FC<FormAirplaneProps> = ({ type, defaultValues }) => {
  const updateAirplaneWithId = (_state: ActionResult, formData: FormData) =>
    updateAirplane(null, defaultValues?.id, formData);

  console.log({ type });
  const [state, formAction] = useFormState(
    type === "ADD" ? saveAirplane : updateAirplaneWithId,
    initialFormState
  );

  return (
    <form action={formAction} className="w-[40%] space-y-4">
      {state.errorTitle !== null && (
        <div className=" my-7 bg-red-500 p-4 rounded-lg text-white">
          <div className="font-bold mb-3">{state.errorTitle}</div>

          <ul className="list-inside list-disc">
            {state.errorDesc?.map((value, i) => (
              <li key={i}>{value}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="code">Kode Pesawat</Label>
        <Input
          placeholder="Kode pesawat..."
          name="code"
          id="code"
          defaultValue={defaultValues?.code}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Nama Pesawat</Label>
        <Input
          placeholder="Nama pesawat..."
          name="name"
          id="name"
          defaultValue={defaultValues?.name}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="image">Upload Foto</Label>
        <Input
          type="file"
          placeholder="Upload foto..."
          name="image"
          id="image"
        />
      </div>

      <SubmitButton />
    </form>
  );
};

export default FormAirplane;
