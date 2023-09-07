import Image from 'next/image'
import { Type, Variants } from './ComponentLibrary/Typography/Type'

export default function Home() {
  return (
    <main className="flex bg-backgroundDark text-fontDark min-h-screen    ">
      <div className="flex flex-col container mx-auto items-center w-full">
      <div>
        Navbar
      </div>

      <div className="w-full flex justify-center">

      {/* <div className="flex flex-row">
        <div className ="flex basis-1/2 max-w-md grid grid-rows-2 gap-y-16">
        <div className=" flex p-10 flex-col">
        <Type variant="emphasized-body"> Hi! I'm,</Type>
        <Type variant="heroText">Aaditya</Type>
        </div>
        <div className=" p-10 ">
        <Type variant="emphasized-body"> I empathize with users to bridge the gap between the intent and impact of a product</Type>
        </div>
        </div>
        <div className ="flex basis-1/2 max-w-md grid grid-rows-2 gap-y-32">
        <div className="   flex  self-end  flex-col">
        <Type variant="h2"> A product designer</Type>
        <Type variant="h2">who codes</Type>
        </div>
        <div className=" ">
        <Type variant="emphasized-body"> HCIM grad student at University of Maryland, College Park</Type>
        </div>
        </div>
        </div> */}
      <div className="flex flex-col mx-auto items-start justify-center  xl:w-3/4">
      <div className="flex  m-5 flex-col md:flex-row  justify-center" >

        <div className="md:basis-1/2 flex p-10 w-min  flex-col">
        <Type variant="emphasized-body"> Hi! I'm,</Type>
        <Type variant="heroText">Aaditya</Type>
        </div>
        <div className="md:basis-1/2 p-10 flex w-min self-end flex-col">
        <Type variant="h2" className="whitespace-nowrap"> A product designer</Type>
        <Type variant="h2" className="whitespace-nowrap">who codes</Type>
        </div>

      </div>

      <div className="flex  m-5 flex-col-reverse md:flex-row items-start justify-center" >

        <div className="md:basis-1/2 px-10 py-10  ">
        <Type variant="emphasized-body" className = " whitespace-normal"> I empathize with users to {"\n"} bridge the gap between the {"\n"} product intent and impact</Type> 
        
        </div>
        <div className="md:basis-1/2 w-min pr-10 py-10 ">
        <Type variant="emphasized-body" className = "whitespace-nowrap"> HCIM grad student at </Type> 
        <Type variant="emphasized-body" className = "whitespace-nowrap"> University of Maryland, CP</Type>  
        <Type variant="emphasized-body" className = "whitespace-nowrap"> Graduating May 2024</Type>
        </div>

      </div>
      </div>
      </div> 
      
      <h2 className='font-sans '>
        Is this quicksand?
      </h2>
      </div>
    </main>
  )
}
