import { Metadata } from "next";
import { FC } from "react";
import FormSignIn from "./form";

interface SignInPageProps {}

export const metadata: Metadata = {
  title: "Dashboard | Sign In",
};

const SignInPage: FC<SignInPageProps> = () => {
  return <FormSignIn />;
};

export default SignInPage;
