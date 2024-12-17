"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { logout } from "../actions";
import { ActionResult } from "../../(auth)/signin/form/actions";
import { useFormState } from "react-dom";

const initialState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

const ButtonLogout = () => {
  const [state, formAction] = useFormState(logout, initialState);

  return (
    <div className="space-y-2">
      <form action={formAction}>
        <Button
          type="submit"
          variant={"destructive"}
          className="w-full justify-start"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </form>
    </div>
  );
};

export default ButtonLogout;
