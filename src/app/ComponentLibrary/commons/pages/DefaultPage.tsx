import { propagateServerField } from "next/dist/server/lib/render-server";
import Footer from "../../Components/footer";
import Navbar from "../../Components/Navbar";


type theme = 
|"light"
|"dark"

export default function DefaultPage({
    children,
    selected,
  }: {
    children: React.ReactNode,
    selected:string,
  }) {
  return (
    <main className={`flex flex-col "`}>
       
        <Navbar/>
        {children}
        <Footer/>
    </main>
  )
}
