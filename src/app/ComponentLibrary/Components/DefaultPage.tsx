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
    <main className=" bg-backgroundDark text-fontDark min-h-screen justify-center">
        <Navbar/>
        <div className="flex justify-center md:container ">
        {children}
        </div>
    </main>
  )
}
