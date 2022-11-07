import type { ReactNode } from "react";
import Navbar from "./Navbar";

export default function LayoutApp({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
