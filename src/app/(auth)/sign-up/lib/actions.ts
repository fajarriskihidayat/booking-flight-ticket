"use server";

import { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";
import { userSchema } from "./validation";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import prisma from "../../../../../lib/prisma";

export async function signUpUser(
  prevState: unknown,
  formData: FormData
): Promise<ActionResult> {
  const validate = userSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    passport: formData.get("passport"),
  });

  if (!validate.success) {
    const errorDesc = validate.error.issues.map((issue) => issue.message);

    return {
      errorTitle: "Error Validation",
      errorDesc,
    };
  }

  const hashingPassword = bcrypt.hashSync(validate.data.password, 10);

  try {
    await prisma.user.create({
      data: {
        ...validate.data,
        password: hashingPassword,
        role: "CUSTOMER",
      },
    });
  } catch (error) {
    return {
      errorTitle: "Failed to insert data",
      errorDesc: ["Terjadi masalah pada koneksi, silahkan coba lagi"],
    };
  }

  return redirect("/sign-in");
}
