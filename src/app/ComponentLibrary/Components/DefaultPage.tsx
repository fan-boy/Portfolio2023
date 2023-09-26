import { propagateServerField } from "next/dist/server/lib/render-server";
import Navbar from "./Navbar";

export default function DefaultPage({
    children,
    selected
  }: {
    children: React.ReactNode,
    selected:string
  }) {
  return (
    <main className=" flex flex-col bg-backgroundDark text-fontDark min-h-screen ">
        <Navbar/>
        <div className="flex justify-center md:container ">
        {children}
        </div>
    </main>
  )
}
