"use client";

import React from "react";
import { useFormState } from "react-dom";
import { logout } from "../(home)/lib/actions";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { ActionResult } from "../dashboard/(auth)/signin/form/actions";

const initialState = {
  error: "",
};

const ButtonLogout = () => {
  const [state, formAction] = useFormState(logout, initialState);

  return (
    <form action={formAction}>
      <Button variant="destructive" className="rounded-full">
        <LogOut className="w-4 h-4" />
      </Button>
    </form>
  );
};

export default ButtonLogout;
