"use server";

import { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";
import { userSchema } from "../../sign-up/lib/validation";
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import prisma from "../../../../../lib/prisma";

export async function signInUser(
  prevState: unknown,
  formData: FormData
): Promise<ActionResult> {
  // mengambil schema user tertentu saja
  const signInSchema = userSchema.pick({ email: true, password: true });

  const validate = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validate.success) {
    const errorDesc = validate.error.issues.map((issue) => issue.message);

    return {
      errorTitle: "Error Validation",
      errorDesc,
    };
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      email: validate.data.email,
    },
  });

  if (!existingUser) {
    return {
      errorTitle: "Error",
      errorDesc: ["Email tidak ditemukan"],
    };
  }

  const validPassword = await bcrypt.compare(
    validate.data.password,
    existingUser.password
  );

  if (!validPassword) {
    return {
      errorTitle: "Error",
      errorDesc: ["Password salah"],
    };
  }

  try {
    const session = await lucia.createSession(existingUser.id, {});
    const sessionCookie = await lucia.createSessionCookie(session.id);

    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  } catch (error) {
    return {
      errorTitle: "Failed to insert data",
      errorDesc: ["Terjadi masalah pada koneksi, silahkan coba lagi"],
    };
  }

  return redirect("/");
}
