"use client";

import { FC, ReactNode } from "react";
import SeatProvider from "./providers/seatProvider";
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <SeatProvider>
      {children} <Toaster />
    </SeatProvider>
  );
};

export default Layout;
