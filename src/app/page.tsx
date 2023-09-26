import Image from 'next/image'
import DefaultPage from './ComponentLibrary/Components/DefaultPage'
import { Type, Variants } from './ComponentLibrary/Typography/Type'

export default function Home() {
  return (
   <DefaultPage>
     <div className="flex flex-col">
     <div className="flex mt-4 flex-col text-center">
       <span className="">
         Hi! I'm
       </span>
       <span className = "mt-4 font-serif text-6xl">
          Aaditya
       </span>
     </div>
     <div className="flex mt-9 flex-col text-center">
       <span className=" font-serif text-2xl">
         A product designer 
       </span>
       <span className = "font-serif text-2xl">
        who codes
       </span>
     </div>
     <div className="flex mt-20 flex-col text-center ">
       <span className="">
       HCIM grad student at <br/> University of Maryland, CP 
       </span>
       <span className = "mt-4">
       Graduating May 2024
       </span>
     </div>
     </div>
   </DefaultPage>
  )
}
