import Image from 'next/image'
import InfoSection from '../ComponentLibrary/commons/sections/InfoSection'
import OverviewSection from '../ComponentLibrary/commons/sections/OverviewSection'
import Section from '../ComponentLibrary/commons/sections/section'
import DefaultPage from '../ComponentLibrary/Components/DefaultPage'
import SectionDivider from '../ComponentLibrary/Components/SectionDivider'
import { Type } from '../ComponentLibrary/Typography/Type'

export default function Home() {
  return (
    <DefaultPage selected="work">
      <div className="flex flex-col">
        {/* Hero Section */}
        <>
          <div className="hidden md:flex flex-row w-full min-w-full text-left gap-x-56">
            <Type variant="h1">
              Chain Reactive LLC
            </Type>
            <Type variant="h4">
              Order <br /> Scheduling
            </Type>
          </div>
        </>
        {/* Project and Info Section */}
        <>
          <div className="flex mt-10 flex-col md:flex-row gap-2">
            <div className="flex justify-center w-full md:w-2/3 p-5">
              <Section name="Project" number="01" >
                <div className="md:whitespace-nowrap md:-ml-10">
                  <Type variant="emphasized-body">
                    Building a <span className="italic font-serif font-normal">scalable solution</span> for small businesses.</Type>
                </div>

                <div className="mt-6 md:mt-8 md:pr-20">
                  <Type variant="body">
                    We wanted to focus on empowering local businesses and small 
                    mom-pop restaurants in rural areas, starting with the town of 
                    Lewisburg. Our objective was to enhance the existing POS 
                    system offered by the company and contribute to the vibrant
                    culture of community development and upbringing prevalent in
                    United States.
                  </Type>
                </div>
                <div className="mt-8 md:mt-10 md:pr-20">
                  <Type variant="body">
                    Recognizing the challenges faced by these businesses due to the
                    limited availability or inefficiency of popular apps like Doordash
                    and Grubhub in rural areas, my goal was to create a user-
                    friendly and adaptable online ordering experience for both
                    businesses and customers, ensuring a seamless process.
                  </Type>
                </div>
              </Section>
            </div>

            <div className="w-full min-w-full flex justify-center md:w-1/3 p-5">
              <InfoSection />

            </div>
          </div>
        </>


        {/* Overview and Solution */}
        <div className="mt-20 md:mt-32 p-5">
          <OverviewSection>
            <div className="flex flex-col md:flex-row md:gap-x-20 md:gap-y-0 gap-y-20 justify-center">
              <OverviewSection.Problem>
                How might we empower customers 
                to conveniently select a pickup or 
                delivery time before browsing the 
                menu, ensuring that their choice 
                influences menu items and prices?
              </OverviewSection.Problem>
              <OverviewSection.Outcome>
                <p className="text-left">
                  We designed and implemented a highly
                  dynamic component for supporting the 
                  order scheduling needs of both the 
                  customers and business owners.

                </p>
                <p className="mt-2 md:mt-4">
                  Check out the solution and order tasty 
                  food at https://www.siamlewisburg.com/  
                  (for Lewisburg, PA)


                </p>
              </OverviewSection.Outcome>
            </div>
            <OverviewSection.Solution>
              Test
              </OverviewSection.Solution>
          </OverviewSection>

        </div>

      </div>
    </DefaultPage>
  )
}
