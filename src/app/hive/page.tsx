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
import CustomerHungry from '../../../public/assets/chainreactive/CustomerHungry.png'
import BusinessOwnerMoney from '../../../public/assets/chainreactive/BusinessOwnerMoney.png'
import CustomerOwnerIssues from '../../../public/assets/chainreactive/Customer&OwnerIssues.png'
import BusinessOwnerHappy from '../../../public/assets/chainreactive/BusinessOwnerHappy.png'
import CustomerHappy from '../../../public/assets/chainreactive/CustomerHappy.png'
import BothHappy from '../../../public/assets/chainreactive/BothHappy.png'




export default function ChainReactive() {
  return (
    <DefaultPage selected="work">
      <PageSection theme="dark" isFullWidth>
        {/* Hero Section */}
        <>
          <div className="max-h-[75vh]">
            <Image src={HeroImage} alt="Chain Reactive LLC - Order Scheduling Case study" />
          </div>
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
                    Eabling a safe <span className="italic font-serif font-normal">return to work</span> environment.
                  </ProjectSection.IndentedLine>
                  <ProjectSection.FirstPara>
                    After the COVID - 19 pandemic when offices started reopening,
                    the business continuity planning (BCP) team at Ingram Micro India gathered a team of
                    5 people and provided us with a problem statement. They wanted an app to
                    enable a safe work environment to return to work.
                  </ProjectSection.FirstPara>
                  <ProjectSection.SecondPara>
                    Ingram Micro India has about 3000 employees all
                    over and we had to come up with a way to ensure a safe
                    return to work for them. This was
                    particularly challenging because we were working on a
                    tight deadline. We had to come up with a plan, design,
                    implement and test a product all within 4 months.
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
                      Jan 2021 - Jul 2021
                    </InfoSection.Timeline>
                  </InfoSection.Column>
                  <InfoSection.Column>
                    <InfoSection.Tools>
                      Adobe XD <br />
                      React JS <br />
                      NodeJS
                    </InfoSection.Tools>
                    <InfoSection.Team>
                      Yusuf Ratlamwala - Team Lead<br />
                      Pradyuman Pareek- Developer<br />
                      Nandinee Holkar- HR <br />
                      Pransu Kushwah- Tester
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
                How might we ensure a seamless and 
                secure return-to-work experience 
                for Ingram Micro employees while 
                addressing any emerging workplace safety concerns?
                </OverviewSection.Problem>
                <OverviewSection.Outcome>
                  <OverviewSection.OutcomeParagraph>
                  We designed and implemented an application 
                  that enabled HR to schedule work slots for 
                  employees and provided a medium for employees 
                  to report their illness and also alert other employees

                   
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
                      <Type variant="h5" fontType="font-serif"> Mobile app for employees</Type>
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

        <Section theme={"light"} name="Understanding People Involved" number="04">
            <Type variant="body">
              Based on the initial breif provided to us, we tried to understand who the users would mainly be. We were able to think of mainly 3  categories of users.
            </Type>

            <div className="w-full flex flex-col mt-12 gap-20">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-end">
                  <div className="w-2/3">
                    <ListItem number="01" name="HR Team">
                    HR staff were responsible for uploading employee schedules and managing attendance. They needed efficient tools to streamline their work and ensure employee safety.
                    </ListItem>

                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                  <div className="w-2/3">
                    <Image className="w-1/2" src={CustomerHungry} alt="Hungry Customers" />
                  </div>
                </div>

              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 flex flex-col items-end justify-start">
                  <div className="w-2/3 ">
                    <Image className="w-1/2" src={BusinessOwnerMoney} alt="Business Owner" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center justify-end">
                  <div className="w-2/3">

                    <ListItem number="02" name="Admin Staff">
                    Admin staff, particularly security personnel, controlled access to the office. Their role was critical in ensuring that only authorized and healthy employees could enter the premises.
                    </ListItem>

                  </div>
                </div>


              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-end">
                  <div className="w-2/3">
                    <ListItem number="03" name="Employees">
                    The employees were going to be the end-users of the app. They relied on the app for accessing their schedules, making ad-hoc requests, and ensuring their safety and compliance with health protocols.
                    </ListItem>

                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                  <div className="w-2/3">
                    <Image className="w-1/2" src={CustomerHungry} alt="Hungry Customers" />
                  </div>
                </div>

              </div>

            </div>
          </Section>

         

          <Section theme={"light"} name="Research - Uncovering Issues" number="05" classname="my-20 ">

            <div className="w-full md:w-2/3">
              <Type variant="body">
                To get a better understanding of the problem, we interviewed the HR and some employees.  
              </Type>
            </div>
            <div className="flex relative flex-col md:grid md:grid-cols-3 gap-10 p-10 md:gap-20 md:p-20">
              <ListItem number="01">
              HR wanted a way to easily upload and manage employee schedules in batches.
              </ListItem>
              <ListItem number="02">
              HR wanted way to send announcements to employees about changes to office hours, safety protocols, and other important information.
              </ListItem>
              <ListItem number="03">
                HR wanted a way to ensure the safety of employees by disabling features for employees who are sick.
              </ListItem>
              <ListItem number="04">
              Employees wanted a way to request ad-hoc office visits through the app.
              </ListItem>
              <ListItem number="05">
                Employees wanted a way to easily enter the office without having to go through a lengthy check-in process
              </ListItem>
              <ListItem number="06">
              Employees wanted a way to feel safe and informed as they return to the office by having access to information about the company&#x27;s safety protocols and the number of employees who are sick.
              </ListItem>
              <div className="">
                <Image className="" src={CustomerOwnerIssues} alt="Business Owner" />
              </div>

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
              <Image src={DoordashImage} alt="Doordash competitve analysis" />
              <Image src={PostmatesImage} alt="Postmates competitve analysis" />
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
            <div className="mt-10 md:mt-20 grid grid-cols-3 md:grid-cols-2  justify-items-center items-center gap-x-2 gap-y-10 md:gap-10">
              <Image className="w-full col-span-2 md:col-span-1" src={Sketch1} alt="A 3 step time picker" />
              <Image className="w-1/2 col-span-1 " src={BusinessOwnerHappy} alt="Happy Business Owners" />
              <Image className="w-1/2 col-span-2 md:col-auto" src={CustomerHappy} alt="Happy customers" />
              <Image className="w-full col-span-1 md:col-auto" src={Sketch2} alt="A one screen timepicker" />

            </div>
            <div className="mt-10">
              <Type variant="h4">
                Final Prototype Sketch
              </Type>
              <div className="grid grid-cols-3 justify-items-center items-end gap-x-2 gap-y-10 md:gap-10 mt-10">
                <Image className="col-span-2" src={FinalSketch} alt="Final prototype sketch" />
                <Image className="w-3/5 col-span-1" src={BothHappy} alt="Happy Customers and Business Owners" />
              </div>
            </div>
          </Section>

        </ProcessSection>
      </PageSection>
      <PageSection theme="dark">
        <ResultSection>

          <div className="md:w-2/3">
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
                The business owner&#x27;s requirement of having the user select the pickup/delivery time was addressed by making a default selection which would be handled by code.
              </ListItem>
              <ListItem number="02" name="Customers">
                The end design was a very simple dropdown which didn’t clutter the screen unnecessarily. This worked from the user&#x27;s perspective.
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
