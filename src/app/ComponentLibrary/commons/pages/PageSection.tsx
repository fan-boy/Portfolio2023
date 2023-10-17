import { propagateServerField } from "next/dist/server/lib/render-server";
import Navbar from "../../Components/Navbar";


export type theme = 
|"light"
|"dark"

export default function PageSection({
    children,
    theme,
    isFullWidth
  }: {
    children: React.ReactNode,
    theme:theme,
    isFullWidth?:boolean
  }) {
  return (
    isFullWidth?(
    <div className="w-full">
      {children}
    </div> ):(
    <main className={`flex flex-col `}>
       
        <div className={`flex  justify-center ${theme == "dark"?"bg-backgroundDark text-fontDark":"bg-backgroundLight text-fontLight"}`}>
        <div className="flex  max-w-xs sm:max-w-3xl md:max-w-5xl justify-center ">
        <div className="flex  flex-col w-full">
        {children}
        </div>
        </div>
        </div>
    </main>)
  )
}
