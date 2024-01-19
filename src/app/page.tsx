import React from 'react'
import DefaultPage from './ComponentLibrary/commons/pages/DefaultPage'
import PageSection from './ComponentLibrary/commons/pages/PageSection'
import Card from './ComponentLibrary/Components/Card/Card'
import TextLoop from './ComponentLibrary/Components/TextLoop'
import BouncingArrow from './ComponentLibrary/Specials/BouncingArrow'
import { Type, Variants } from './ComponentLibrary/Typography/Type'


export default function Home() {
  return (
    <DefaultPage selected="work">
      <PageSection theme="dark">
        <div className="flex flex-col mt-14 mb-14">
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
            <div className="flex mt-9 flex-col text-center md:text-left md:min-w-1/2 w-full">
              <span>
                <Type variant={"h3"}> A product designer </Type>
              </span>
              <span className="w-full">
                <TextLoop /> 
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
            <div className="flex flex-row gap-5">
              <Type variant="emphasized-body">
                Selected Work
              </Type>
              <BouncingArrow />
            </div>
          </div>
        </div>

      </PageSection>


      <PageSection theme="dark"  >
        <div className="w-full sm:px-40 md:px-0 md:columns-2 md:flex-row pt-40 gap-10">
          <div className="-mt-40">

            <Card title="Crashr" isLocked type="crashr" subtitle=" Streamlining the design process" tags="Visual design • Design System" />
          </div>
          <div className="mt-10">

            <Card title="Hive" type="hive" subtitle=" Enabling a safe return to work" tags="Service design • Web design" />
          </div>
          <div className="mt-10">

            <Card title="Chain Reactive" type="chainreactive" subtitle=" Simplyfing the ordering process" tags="UX design • Fullstack development" />
          </div>

        </div>
      </PageSection>


    

    </DefaultPage>
  )
}
