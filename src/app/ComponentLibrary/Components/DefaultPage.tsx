import { propagateServerField } from "next/dist/server/lib/render-server";

export default function DefaultPage({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <main className=" flex bg-backgroundDark text-fontDark min-h-screen justify-center">
        <div className="flex justify-center md:container ">
        {children}
        </div>
    </main>
  )
}
