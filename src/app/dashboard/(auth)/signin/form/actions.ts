"use server";

import { redirect } from "next/navigation";
import { formSchema } from "./validation";
import prisma from "../../../../../../lib/prisma";
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";

export interface ActionResult {
  errorTitle: string | null;
  errorDesc: string[] | null;
}

export async function handleSignIn(
  prevState: any,
  formData: FormData
): Promise<ActionResult> {
  const values = formSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!values.success) {
    const errorDesc = values.error.issues.map((issue) => issue.message);

    return {
      errorTitle: "Error Validation",
      errorDesc,
    };
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      email: values.data.email,
    },
  });

  if (!existingUser) {
    return {
      errorTitle: "Error",
      errorDesc: ["Email tidak ditemukan"],
    };
  }

  const validPassword = await bcrypt.compare(
    values.data.password,
    existingUser.password
  );

  if (!validPassword) {
    return {
      errorTitle: "Error",
      errorDesc: ["Email / Password salah"],
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

  return redirect("/dashboard");
}
