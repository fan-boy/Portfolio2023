import React from 'react'
import DefaultPage from './ComponentLibrary/commons/pages/DefaultPage'
import PageSection from './ComponentLibrary/commons/pages/PageSection'
import { Card, varianttype } from './ComponentLibrary/Components/Card/Card'
import GridContentSection from './ComponentLibrary/Components/GridContentSection'
import TextLoop from './ComponentLibrary/Components/TextLoop'
import BouncingArrow from './ComponentLibrary/Specials/BouncingArrow'
import { Type, Variants } from './ComponentLibrary/Typography/Type'
import projectlist from './projectlist.json';


export default function Home() {


  return (
    <DefaultPage selected="work">
      <PageSection theme="dark">
        <PageSection.ConstrainedWidth>
          <GridContentSection classname="items-end mb-20">
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
              {/* <div className="hidden md:flex  md:flex-col text-center md:text-left gap-4 ">
                <span >
                  <Type variant={"body"}>
                    I empathize with users to bridge the gap <br/> between the intent and impact of a product

                  </Type>
                </span>
              </div>
              <div className="flex  flex-col text-center md:text-left gap-4 md:min-w-1/2">
                <span >
                  <Type variant={"emphasized-body"}>
                    Actively looking for full time roles
                  </Type>
                </span>
                <span >
                <Type variant={"body"}>
                  Graduating May 2024
                </Type>
              </span>
              </div> */}
          </GridContentSection>
          {/* <div className="flex flex-col mt-14 mb-14">
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
            <div className=" md:flex md:flex-row md:gap-12 md:items-center">
              <div className="hidden md:flex mt-20 md:flex-col text-center md:text-left gap-4 md:min-w-1/2">
                <span >
                  <Type variant={"body"}>
                    I empathize with users to <br /> bridge the gap between the <br /> intent and impact of a product

                  </Type>
                </span>
              </div>
              <div className="flex mt-20 flex-col text-center md:text-left gap-4 md:min-w-1/2">
                <span >
                  <Type variant={"emphasized-body"}>
                    Actively looking for full time roles
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
          </div> */}
        </PageSection.ConstrainedWidth>
      </PageSection>


      <PageSection theme="dark"  >
        <PageSection.ConstrainedWidth>
          <div className="mt-40">

          <div className="w-full sm:px-40 md:px-0 md:columns-2 md:flex-row gap-10 mt-40">
            <div className="-mt-40">

              <Card title={projectlist[0].projectName} type={projectlist[0].type as varianttype} subtitle={projectlist[0].subtitle} tags={projectlist[0].tags} />
            </div>
            <div className="mt-10">

              <Card title={projectlist[2].projectName} type={projectlist[2].type as varianttype} subtitle={projectlist[2].subtitle} tags={projectlist[2].tags} />
            </div>

            <div className="mt-10">

              <Card title={projectlist[3].projectName} type={projectlist[3].type as varianttype} subtitle={projectlist[3].subtitle} tags={projectlist[3].tags} />
            </div>
            <div className="mt-10">

              <Card title={projectlist[1].projectName} type={projectlist[1].type as varianttype} subtitle={projectlist[1].subtitle} tags={projectlist[1].tags} />
            </div>
            <div className="mt-10">

              <Card title={projectlist[4].projectName} type={projectlist[4].type as varianttype} subtitle={projectlist[4].subtitle} tags={projectlist[4].tags} />
            </div>
            <div className="mt-10">

              <Card title={projectlist[5].projectName} type={projectlist[5].type as varianttype} subtitle={projectlist[5].subtitle} tags={projectlist[5].tags} />
            </div>

          </div>

          </div>  



        </PageSection.ConstrainedWidth>
      </PageSection>




    </DefaultPage>
  )
}
