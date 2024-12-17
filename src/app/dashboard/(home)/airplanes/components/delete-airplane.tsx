import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import React, { FC } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { deleteAirplane } from "../lib/actions";
import { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";

interface DeleteAirplaneProps {
  id: string;
}

const initialState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button size="sm" disabled={pending} type="submit" variant="destructive">
      <Trash className="mr-2 h-4 w-4" /> Hapus
    </Button>
  );
};

const DeleteAirplane: FC<DeleteAirplaneProps> = ({ id }) => {
  const deleteAirplaneWithId = deleteAirplane.bind(null, id);
  const [state, formAction] = useFormState(deleteAirplaneWithId, initialState);

  return (
    <form action={formAction}>
      <SubmitButton />
    </form>
  );
};

export default DeleteAirplane;
