import Image from 'next/image'
import DefaultPage from './ComponentLibrary/Components/DefaultPage'
import Navbar from './ComponentLibrary/Components/Navbar'
import { Type, Variants } from './ComponentLibrary/Typography/Type'

export default function Home() {
  return (
   <DefaultPage selected="work">
     <div className="flex flex-col mt-14">
     <div className="flex mt-4 flex-col text-center gap-4">
       <span className="">
         Hi! I&#x27;m
       </span>
       <span className = "font-serif text-6xl">
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
     <div className="flex mt-20 flex-col text-center gap-4">
       <span className="">
       HCIM grad student at <br/> University of Maryland, CP 
       </span>
       <span className = "">
       Graduating May 2024
       </span>
     </div>
     </div>
   </DefaultPage>
  )
}
