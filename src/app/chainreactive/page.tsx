import Image from 'next/image'
import InfoSection from '../ComponentLibrary/commons/sections/InfoSection'
import OverviewSection from '../ComponentLibrary/commons/sections/OverviewSection'
import ProcessSection from '../ComponentLibrary/commons/sections/ProcessSection'
import ProjectSection from '../ComponentLibrary/commons/sections/ProjectSection'
import Section from '../ComponentLibrary/commons/sections/section'
import DefaultPage from '../ComponentLibrary/commons/pages/DefaultPage'
import SectionDivider from '../ComponentLibrary/Components/SectionDivider'
import { Type } from '../ComponentLibrary/Typography/Type'
import PageSection from '../ComponentLibrary/commons/pages/PageSection'
import ListItem from '../ComponentLibrary/Components/List Items/listitem'
import ResultSection from '../ComponentLibrary/commons/sections/ResultSection'

import HeroImage from '../../../public/assets/chainreactive/ChainReactiveHero.png';
import DoordashImage from '../../../public/assets/chainreactive/Doordash.png';
import PostmatesImage from '../../../public/assets/chainreactive/Postmates.png'
import UberEatsImage from '../../../public/assets/chainreactive/UberEats.png'
import Sketch1 from '../../../public/assets/chainreactive/prototyping1.png'
import Sketch2 from '../../../public/assets/chainreactive/prototyping2.png'
import FinalSketch from '../../../public/assets/chainreactive/finalPrototype.png'




export default function Home() {
  return (
    <DefaultPage selected="work">
      <PageSection theme="dark" isFullWidth>
        {/* Hero Section */}
        <>
            
              <Image  src={HeroImage}  alt="Chain Reactive LLC - Order Scheduling Case study" />
           
          </>
      </PageSection>
      <PageSection theme="dark">
        <div className="flex flex-col">
          
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
          <div className="my-20 md:mt-32 p-5">
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
                <div className="flex flex-col gap-y-20">
                  <div className="flex flex-col md:flex-row">
                    <video loop autoPlay muted className="w-full md:w-2/3 rounded-2xl">
                      <source src="./assets/chainreactive/desktop.mp4" type="video/mp4" />
                    </video>
                    <div className="w-full md:w-1/3 flex justify-center items-center">
                      <Type variant="h5" fontType="font-serif"> Desktop Solution</Type>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-2/3 flex justify-center items-center">
                      <Type variant="h5" fontType="font-serif"> Mobile Solution</Type>
                    </div>
                    <div className="w-full md:w-1/2">
                      <video loop autoPlay muted className="w-full md:w-2/3 rounded-2xl">
                        <source src="./assets/chainreactive/mobile.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </OverviewSection.Solution>
            </OverviewSection>

          </div>
        </div>
      </PageSection>
      <PageSection theme="light">
        {/* Process */}
        <ProcessSection>

          <Section theme={"light"} name="Understanding Users" number="04">
            <Type variant="body">
              First step was to get an understanding of who the users were.
            </Type>

            <div className="w-full flex flex-col mt-12 gap-20">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-end">
                  <div className="w-2/3">
                    <ListItem number="01" name="Restaurant Customers">
                      The customers who would come to the restaurant to grab food. These were mostly college students with a small population of families and empty nesters.
                    </ListItem>

                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center justify-end">
                  <div className="w-2/3">

                  </div>
                </div>

              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-end">
                  <div className="w-2/3">

                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center justify-end">
                  <div className="w-2/3">

                    <ListItem number="02" name="Business Owners">
                      Business owners were mostly people in the age group of 30-50. They were mostly focused on keeping their business running while also thinking about expanding their income sources.
                    </ListItem>

                  </div>
                </div>


              </div>

            </div>
          </Section>

          <Section theme={"light"} name="User Research - Uncovering Issues" number="05" classname="mt-20">

            <div className="w-full md:w-2/3">
              <Type variant="body">
                To get a baseline understanding of the public space, I conducted semi-structured interviews with businesses and customers. Here are the findings.
              </Type>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-10 p-10 md:gap-20 md:p-20">
              <ListItem number="01">
                The business owners wanted the customers to schedule the order at a specific time so that they could plan their resources accordingly.
              </ListItem>
              <ListItem number="02">
                The menu items or the pricing of items could differ depending upon the requested delivery time.
              </ListItem>
              <ListItem number="03">
                Traditionally, they took orders over the phone so they didn’t face this issue as they could inform the consumer about any changes immediately.
              </ListItem>
              <ListItem number="04">
                Customers wanted the ability to order in advance for special occasions like parties.
              </ListItem>
              <ListItem number="05">
                Customers wanted the ability to plan their meals for the week and hence needed this feature of being able to schedule the order.
              </ListItem>


            </div>
            <div className="mt-8 w-full md:w-3/4 flex flex-col gap-6">
              <Type variant="h4">
                Key finding -
              </Type>
              <Type variant="body">
                From the standpoint of business owners, the order scheduling feature held significant importance, whereas for consumers, it was considered more of an optional feature. This is because consumers primarily placed orders for immediate delivery or pickup.
              </Type>
            </div>
          </Section>
          <Section theme={"light"} name="Competitor Analysis" number="06">

            <div className="w-full flex flex-col md:grid md:grid-cols-3 md:gap-3">
             <Image  src={DoordashImage} alt="Doordash competitve analysis" />
             <Image  src={PostmatesImage} alt="Postmates competitve analysis" />
             <Image src={UberEatsImage} alt="Uber Eats competitve analysis" /> 
            </div>

            <div className="mt-20">
            <Type variant="h4">
                Findings -
              </Type>

            <div className="flex flex-col md:grid md:grid-cols-3 gap-10 p-10 md:gap-20 md:p-20">
              <ListItem number="01" name="Scheduling Times">
              All of the competitors offer choices between group of options
              </ListItem>
              <ListItem number="02" name="Optional order scheduling">
              Most of the competitors had optional order scheduling. Some of them had it right on the first page. 
              </ListItem>
              <ListItem number="03" name="Complicated time pickers">
              The time pickers offered by most of the competitors were too clustered.
              </ListItem>
            </div>
            </div>
          </Section>
          <Section theme={"light"} name="Sketching Solutions" number="07">
          <div className="w-full flex flex-col md:grid md:grid-cols-2 md:gap-20">
            <Type variant="body">
            After gathering research insights, I engaged in ideation to explore potential solutions and user flows. To solidify ideas and visualize the interactions, I initiated the process by creating sketches.
            </Type>
            <Type variant="body">
            Since we were in the early stages of the product we did User testing on the paper prototypes itself
            </Type>
            </div>
            <div className="mt-10 md:mt-20 grid grid-cols-3 md:grid-cols-2 justify-center gap-x-2 gap-y-10 md:gap-10">
            <Image className="w-full col-span-2 md:col-auto" src={Sketch1} alt="Doordash competitve analysis" />
            <Image className="w-full col-span-1 md:col-auto" src={Sketch2} alt="Doordash competitve analysis" />
            <Image className="w-full col-span-1 md:col-auto" src={Sketch2} alt="Doordash competitve analysis" />
            <Image className="w-full col-span-2 md:col-auto" src={Sketch2} alt="Doordash competitve analysis" />
            </div>
            <div className="mt-10">
              <Type variant="h4">
                Final Prototype Sketch
              </Type>
              <div className="grid grid-cols-3 md:grid-cols-2 justify-center gap-x-2 gap-y-10 md:gap-10 mt-10">
               <Image className="w-full col-span-2"  src={FinalSketch} alt="Final prototype sketch" />
              </div>
            </div>
          </Section>

        </ProcessSection>
      </PageSection>
      <PageSection theme="dark">
      <ResultSection>

        <div className="w-2/3">
        <Type variant="body">
        We were able to come up with a design that satisfied the needs of the business owners while also keeping the complexity to a minimum for the consumers.
        </Type>
        </div>
        <div className="mt-10">
          <Type variant="emphasized-body">
          Keeping all <span className="italic font-serif font-normal">stakeholders</span> happy
          </Type>

          
          <div className="flex flex-col md:grid md:grid-cols-2 gap-10 p-10 md:gap-20 md:p-20">
              <ListItem number="01" name="Business Owners">
              The business owner's requirement of having the user select the pickup/delivery time was addressed by making a default selection which would be handled by code.
              </ListItem>
              <ListItem number="02" name="Customers">
              The end design was a very simple dropdown which didn’t clutter the screen unnecessarily. This worked from the user's perspective.
              </ListItem>
          
          </div>

          <Type variant="body">
          Throughout this process, I gained valuable insights on the importance of considering the requirements of all user groups and crafting a design that caters to their needs. Different user groups may have distinct roles and perform diverse actions. By avoiding assumptions and following a structured design process, we were able to create a solution that fulfilled the expectations of all stakeholders. 
          </Type>

        </div>
      </ResultSection>

      
      </PageSection>

    </DefaultPage>
  )
}
