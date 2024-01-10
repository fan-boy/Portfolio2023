import React from "react";
import Footer from "../../Components/footer";
import Navbar from "../../Components/Navbar";
import { Analytics } from '@vercel/analytics/react';


type theme =
  | "light"
  | "dark"

export default function DefaultPage({
  children,
  selected,
}: {
  children: React.ReactNode,
  selected: string,
}) {
  return (
    <>
     
      <main className={`flex flex-col "`}>
      <Analytics />
        <Navbar selected={selected} />
        {children}
        <Footer />
      </main>
    </>
  )
}
