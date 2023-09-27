import Image from 'next/image'
import DefaultPage from './ComponentLibrary/Components/DefaultPage'
import Navbar from './ComponentLibrary/Components/Navbar'
import { Type, Variants } from './ComponentLibrary/Typography/Type'

export default function Home() {
  return (
    <DefaultPage selected="work">
      <div className="flex flex-col mt-14">
        <div className="md:flex md:flex-row md:items-end md:gap-10">
          <div className="flex mt-4 flex-col text-center md:text-left  md:min-w-1/2 gap-4 md:gap-0">
            <span>
              <Type variant={"body"}>Hi! I&#x27;m</Type>
            </span>
            <span >
              <Type variant={"heroText"}>
                Aaditya
              </Type>
            </span>
          </div>
          <div className="flex mt-9 flex-col text-center md:text-left md:min-w-1/2">
            <span>
              <Type variant={"h3"}> A product designer </Type>
            </span>
            <span className="font-serif text-2xl">
              <Type variant={"h3"}> who codes </Type>
            </span>
          </div>
        </div>
        <div className=" md:flex md:flex-row md:gap-12">
          <div className="hidden md:flex mt-20 md:flex-col text-center md:text-left gap-4 md:min-w-1/2">
            <span >
              <Type variant={"body"}>
                I empathize with users to <br /> bridge the gap between the <br /> intent and impact of a product
                
              </Type>
            </span>
          </div>
          <div className="flex mt-20 flex-col text-center md:text-left gap-4 md:min-w-1/2">
            <span >
              <Type variant={"body"}>
                HCIM grad student at <br /> University of Maryland, CP
              </Type>
            </span>
            <span >
              <Type variant={"body"}>
                Graduating May 2024
              </Type>
            </span>
          </div>
        </div>
        <div className="w-full text-center md:text-left mt-10 md:mt-28 md:flex md:flex-row-reverse">
          <Type variant={"h4"}>
              Selected Work
          </Type>
        </div>
      </div>
      
    </DefaultPage>
  )
}
