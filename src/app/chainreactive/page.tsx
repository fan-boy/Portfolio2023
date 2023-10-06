import Image from 'next/image'
import InfoSection from '../ComponentLibrary/commons/sections/InfoSection'
import OverviewSection from '../ComponentLibrary/commons/sections/OverviewSection'
import ProjectSection from '../ComponentLibrary/commons/sections/ProjectSection'
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

              <ProjectSection>
                <ProjectSection.IndentedLine>
                  Building a <span className="italic font-serif font-normal">scalable solution</span> for small businesses.
                </ProjectSection.IndentedLine>
                <ProjectSection.FirstPara>
                  We wanted to focus on empowering local businesses and small
                  mom-pop restaurants in rural areas, starting with the town of
                  Lewisburg. Our objective was to enhance the existing POS
                  system offered by the company and contribute to the vibrant
                  culture of community development and upbringing prevalent in
                  United States.
                </ProjectSection.FirstPara>
                <ProjectSection.SecondPara>
                  Recognizing the challenges faced by these businesses due to the
                  limited availability or inefficiency of popular apps like Doordash
                  and Grubhub in rural areas, my goal was to create a user-
                  friendly and adaptable online ordering experience for both
                  businesses and customers, ensuring a seamless process.
                </ProjectSection.SecondPara>
              </ProjectSection>

            </div>

            <div className="w-full min-w-full flex justify-center md:w-1/3 p-5">
              <InfoSection>
                <InfoSection.Column>
                  <InfoSection.Role>
                    Lead Designer and Developer
                  </InfoSection.Role>
                  <InfoSection.Timeline>
                    Jul 2021 - Aug 2022
                  </InfoSection.Timeline>
                </InfoSection.Column>
                <InfoSection.Column>
                  <InfoSection.Tools>
                    Adobe XD, Figma <br />
                    React JS <br />
                    NodeJS
                  </InfoSection.Tools>
                  <InfoSection.Team>
                    Adrian Pinter - CEO
                  </InfoSection.Team>
                </InfoSection.Column>
              </InfoSection>

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
                <OverviewSection.OutcomeParagraph>
                  We designed and implemented a highly
                  dynamic component for supporting the
                  order scheduling needs of both the
                  customers and business owners.
                  <br />
                  <br />


                  Check out the solution and order tasty
                  food at https://www.siamlewisburg.com/
                  (for Lewisburg, PA)
                </OverviewSection.OutcomeParagraph>


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
