"use client"

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

import HR1 from '../../../public/assets/hive/HR1.png'
import HR2 from '../../../public/assets/hive/HR2.png'
import HR3 from '../../../public/assets/hive/HR3.png'
import HR4 from '../../../public/assets/hive/HR4.png'
import HR from '../../../public/assets/hive/HR.png'
import HR100 from '../../../public/assets/hive/HR100.png'
import Emp from '../../../public/assets/hive/Emp.png'
import Admin from '../../../public/assets/hive/Admin.png'
import HREmpIssues from '../../../public/assets/hive/HREmpIssues.png'
import AllHappy from '../../../public/assets/hive/allthreehappy.png'
import HeroImage from '../../../public/assets/hive/hero.png';
import TaskFlow from '../ComponentLibrary/Components/TaskFlow/taskFlow'
import React from 'react'
import Card from '../ComponentLibrary/Components/Card/Card'





export default function Hive() {



  return (
    <DefaultPage selected="work">
      <PageSection theme="dark" isFullWidth>
        {/* Hero Section */}
        <>
          <div className="max-h-[75vh]">
            <Image src={HeroImage} alt="Hive - Enabling a safe return to work environment" />
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
                    Enabling a safe <span className="italic font-serif font-normal">return to work</span> environment.
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
              <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-2/3 flex flex-col gap-4 justify-center ">
                      <Type variant="h5" fontType="font-serif"> Mobile Solution</Type>
                      <Type variant="body" fontType="font-serif"> Screenshots from the mobile app for employees</Type>
                    </div>
                    <div className="w-full md:w-1/2">
                      <video loop autoPlay muted className="w-full md:w-2/3 rounded-2xl">
                        <source src="./assets/hive/mobile.mp4" type="video/mp4" />
                      </video>
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
                      HR staff were responsible for uploading employee schedules and managing attendance. They needed efficient tools to streamline their work and ensure employee safety and increase in office attendance.
                    </ListItem>

                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                  <div className="w-2/3">
                    <Image className="w-1/2" src={HR} alt="HR seeking attendance" />
                  </div>
                </div>

              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 flex flex-col items-end justify-start">
                  <div className="w-2/3 ">
                    <Image className="w-1/2" src={Admin} alt="Admin" />
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
                    <Image className="w-1/2" src={Emp} alt="Employees concerned about safety" />
                  </div>
                </div>

              </div>

            </div>
          </Section>



          <Section theme={"light"} name="Research - Understanding the need" number="05" classname="my-20 ">

            <div className="w-full md:w-2/3">
              <Type variant="body">
                To get a better understanding of the problem, we interviewed the HR and some employees.
              </Type>
            </div>
            <div className="flex relative flex-col md:grid md:grid-cols-3 gap-10 p-10 md:p-20">
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
                Employees want safety info and sick employee numbers to feel confident returning to the office.
              </ListItem>
              <div className="flex md:col-span-3  justify-center">
                <Image className="w-1/4" src={HREmpIssues} alt="HR and Employee issues" />
              </div>

            </div>
          </Section>
          <Section theme={"light"} name="Research - Creating User Task Flows" number="06" >
            <div className="w-full min-w-full flex flex-col gap-10">
              <div className="w-full md:w-2/3">

                <Type variant="body">
                  Based on the interview data collected, we created task flows of the major tasks to understand what all was required from the app.
                </Type>
              </div>
              <div className="flex flex-col gap-40">
                <div className="flex w-full min-w-full flex-col gap-10">
                  <Type variant="h4">
                    HR -
                  </Type>
                  <div className="flex flex-col gap-10">
                    <div className="flex flex-col w-full min-w-full gap-2">
                      <Type variant="body">
                        Task 1: Schedule Management
                      </Type>
                      <div>
                        <div className="w-full">
                          <TaskFlow>
                            <TaskFlow.task intent="hr" task="HR staff login to the hive app" />
                            <TaskFlow.task intent="hr" task="They select the location or branch for which they need to manage schedules." />
                            <TaskFlow.task intent="hr" task="HR staff upload the employee schedule, ensuring accuracy and compliance with scheduling guidelines." />
                            <TaskFlow.task intent="hr" task="The app validates and processes the schedule data, alerting HR staff of any errors or inconsistencies." />
                            <TaskFlow.task isLast intent="hr" task="The app validates and processes the schedule data, alerting HR staff of any errors or inconsistencies." />
                          </TaskFlow>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full min-w-full gap-2">
                      <Type variant="body">
                        Task 2: Report Generation
                      </Type>
                      <div>
                        <div className="w-full">

                          <TaskFlow>
                            <TaskFlow.task intent="hr" task="HR staff select the location or branch for which they need to generate reports." />
                            <TaskFlow.task intent="hr" task="They choose the type of report they need (e.g., Health Report, Attendance Report,)." />
                            <TaskFlow.task intent="hr" task="HR staff select the date range or parameters for the report." />
                            <TaskFlow.task intent="hr" task="The app generates the report with the relevant data." />
                            <TaskFlow.task isLast intent="hr" task="HR staff download the report in their preferred format (e.g., PDF, CSV)." />
                          </TaskFlow>
                        </div>
                      </div>

                    </div>
                    <div className="flex flex-col w-full min-w-full gap-2">
                      <Type variant="body">
                        Task 3: Approving Ad-hoc requests
                      </Type>
                      <div>
                        <div className="w-full">

                          <TaskFlow>
                            <TaskFlow.task intent="hr" task="HR staff log in to the Hive app." />
                            <TaskFlow.task intent="hr" task='They navigate to the "Ad-Hoc Requests" section to review pending requests.' />
                            <TaskFlow.task intent="hr" task="HR staff assess the employee&#x27;s request, considering its urgency and necessity." />
                            <TaskFlow.task intent="hr" task="If approved, HR staff grant the employee permission to make the ad-hoc visit." />
                            <TaskFlow.task isLast intent="hr" task="The app notifies the employee of the approval." />
                          </TaskFlow>
                        </div>
                      </div>

                    </div>
                    <div>
                      <Type variant="h5">
                        Key points for HR
                      </Type>
                      <div className="flex relative flex-col md:grid md:grid-cols-2 gap-10 p-10 md:gap-20 md:p-20">
                        <ListItem number="01" name="Schedule Management">
                          HR staff are responsible for ensuring that employee schedules are accurately uploaded to the app. This task requires attention to detail and compliance with company scheduling guidelines.
                        </ListItem>
                        <ListItem number="02" name="Report Generation">
                          HR staff have the responsibility of generating important reports related to health, attendance, and employee information. Accurate and timely report generation is essential for decision-making and compliance.
                        </ListItem>
                        <ListItem number="03" name="Compliance Monitoring">
                          HR staff are tasked with monitoring attendance data and ensuring that employees are following safety and health protocols. This involves corrective actions when discrepancies or non-compliance are identified.
                        </ListItem>
                        <ListItem number="04" name="Communication">
                          Effective communication is critical for HR staff, both within the Hive app (reporting and responding to issues) and external communication with relevant departments or employees for issue resolution.
                        </ListItem>

                    

                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex w-full min-w-full flex-col gap-20">
                  <Type variant="h5">
                    Employees -
                  </Type>
                  <div className="flex flex-col gap-10">
                    <div className="flex flex-col w-full min-w-full gap-2">
                      <Type variant="body">
                        Task 1: Schedule Management
                      </Type>
                      <div>
                        <div className="w-full">
                          <TaskFlow>
                            <TaskFlow.task intent="employees" task="Employee logs into the Hive app." />
                            <TaskFlow.task intent="employees" task="They view the home screen to check their schedule for the day." />
                            <TaskFlow.task intent="employees" task="The app displays their upcoming schedule, including start and end times, location, and any other relevant details." />
                            <TaskFlow.task intent="employees" task="Employee reviews the self-declaration questions related to health and safety." />
                            <TaskFlow.task intent="employees" task="They provide responses to the self-declaration questions." />
                            <TaskFlow.task isLast intent="employees" task="On successful completion of self declaration, employee gets an entry QR code" />
                          </TaskFlow>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full min-w-full gap-2">
                      <Type variant="body">
                        Task 2: Report Generation
                      </Type>
                      <div>
                        <div className="w-full">

                          <TaskFlow>
                            <TaskFlow.task intent="employees" task="Employee arrives at the office entrance." />
                            <TaskFlow.task intent="employees" task="Security personnel use the Hive app to scan the employee&#x27;s QR code." />
                            <TaskFlow.task intent="employees" task="The app verifies the QR code, granting access to the employee." />
                            <TaskFlow.task intent="employees" task="The employee enters the office if access is granted." />
                            <TaskFlow.task isLast intent="employees" task="Employee gets notified at the end of their shift to leave the office" />
                          </TaskFlow>
                        </div>
                      </div>

                    </div>
                    <div className="flex flex-col w-full min-w-full gap-2">
                      <Type variant="body">
                        Task 3: Approving Ad-hoc requests
                      </Type>
                      <div>
                        <div className="w-full">

                          <TaskFlow>
                            <TaskFlow.task intent="employees" task="Employee realizes the need for an ad-hoc visit for work-related reasons." />
                            <TaskFlow.task intent="employees" task='They open the Hive app and navigate to the "Ad-Hoc Request" section.' />
                            <TaskFlow.task intent="employees" task="The employee selects the purpose of the visit and specifies the desired date and time." />
                            <TaskFlow.task intent="employees" task="They provide any additional details or justifications for the visit." />
                            <TaskFlow.task intent="employees" task="The employee submits the ad-hoc request through the app." />
                            <TaskFlow.task isLast intent="employees" task="The app sends the request to HR for approval." />
                          </TaskFlow>
                        </div>
                      </div>

                    </div>
                    <div>
                      <Type variant="h5">
                        Key points for Employees
                      </Type>
                      <div className="flex relative flex-col md:grid md:grid-cols-2 gap-10 p-10 md:gap-20 md:p-20">
                        <ListItem number="01" name="Anticipation and Preparation">
                          Employees feel a sense of anticipation when they check their schedule and answer health-related questions. They may initially feel cautious about the self-declaration process.
                        </ListItem>
                        <ListItem number="02" name="Gaining Access and Ensuring Safety">
                          Successfully gaining access to the office reassures employees of their compliance with safety measures. They feel safe, compliant, and part of a responsible work community.
                        </ListItem>
                        <ListItem number="03" name="Ad-Hoc Request">
                          When the need arises for an unplanned office visit, employees can use the app to request access. However, the process requires HR approval, which may introduce an element of uncertainty or anticipation for the request&#x27;s outcome.
                        </ListItem>
                        <ListItem number="04" name="Convenience and Control">
                          Throughout the workday, the app provides convenience and control. Employees are confident and appreciate the app&#x27;s features for schedule management, communication, and requesting ad-hoc visits.
                        </ListItem>

                       

                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex w-full min-w-full flex-col gap-20">
                  <Type variant="h5">
                    Admin -
                  </Type>
                  <div className="flex flex-col gap-10">
                    <div className="flex flex-col w-full min-w-full gap-2">
                      <Type variant="body">
                        Task 1: Employee Check In
                      </Type>
                      <div>
                        <div className="w-full">
                          <TaskFlow>
                            <TaskFlow.task intent="admin" task="Admin staff stand at the office entrance and prepare to scan employee QR codes" />
                            <TaskFlow.task intent="admin" task="Admin staff scan the QR code" />
                            <TaskFlow.task intent="admin" task="They conduct temperature and oximeter checks and add that information to the app" />
                            <TaskFlow.task intent="admin" isLast task="They allow the employees that satisfy all safety requirements in the office" />
                          </TaskFlow>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full min-w-full gap-2">
                      <Type variant="body">
                        Task 2: Employee Check Out
                      </Type>
                      <div>
                        <div className="w-full">

                          <TaskFlow>
                            <TaskFlow.task intent="admin" task="Admin gets notified at employees end of shift" />
                            <TaskFlow.task intent="admin" task="They check if the employee has left the office" />
                            <TaskFlow.task intent="admin" task="If not they ask the employee to leave" />
                            <TaskFlow.task intent="admin" isLast task="They mark the exit time of the employee on the app." />

                          </TaskFlow>
                        </div>
                      </div>

                    </div>

                    <div>
                      <Type variant="h5">
                        Key points for Admin
                      </Type>
                      <div className="flex relative flex-col md:grid md:grid-cols-2 gap-10 p-10 md:gap-20 md:p-20">
                        <ListItem number="01" name="Access control">
                          Admin staff play a vital role in controlling access to the office by scanning employee QR codes. Their attention to detail ensures the safety and compliance of employees.
                        </ListItem>
                        <ListItem number="02" name="Safety and Compliance">
                          Admin staff must be vigilant in ensuring the safety and compliance of employees by verifying QR codes and self-declarations.
                        </ListItem>

                        
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </Section>

          <Section theme={"light"} name="Defining the structure of the app" number="07">
            <div className="w-full md:w-2/3">

              <Type variant="body">
                Based on the user task flows, we tried to define the structure of the App
              </Type>
            </div>


            <div className="mt-20">
              <Type variant="body">
                We concluded that there was a need of 3 independent apps that worked in sync with each other. These were -
              </Type>

              <div className="flex flex-col md:grid md:grid-cols-3 gap-10 p-10 md:gap-20 md:p-20">
                <ListItem number="01">
                  A web app for the HR/Admin and BCP teams to upload schedules and send announcements.
                </ListItem>
                <ListItem number="02" >
                  A mobile app for employees to see their schedules and announcements and to create ad-hoc requests.
                </ListItem>
                <ListItem number="03" >
                  A mobile app for the security personnel to check-in / check-out employees in the office.
                </ListItem>
              </div>
              <div className="flex md:col-span-2 justify-center">
                          <Image className="w-1/4" src={AllHappy} alt="All stakeholders happy!" />
                        </div>
            </div>
          </Section>
          <Section theme={"light"} name="Sketching Solutions" number="08">
            <div className="w-full flex flex-col md:grid md:grid-cols-2 md:gap-20">
              <Type variant="body">
                We conducted participatory design sessions with all the stakeholders involved to speed up the design process. We needed to get from design to development asap. I was mainly involved with the HR/Admin portal that was a web app. 
              </Type>
              <Type variant="body">
                Once the designs were approved, we built out the app and then conducted testing. Here are some of our sketches
              </Type>
            </div>
            <div className="mt-10">
              <Type variant="h4">
                HR app sketches
              </Type>
              <div className=" mt-10 flex flex-col md:grid md:grid-cols-5  justify-items-center items-center gap-x-2 gap-y-2">
              <Image className=" col-span-2 " src={HR1} alt="A page for adding emp schedule" />
              <Image className="col-span-2 " src={HR2} alt="A page for adding employee schedule" />
              <Image className="hidden md:block col-span-1 row-span-2 md:col-auto" src={HR100} alt="Happy HR" />
              <Image className=" col-span-2 " src={HR3} alt="A page for sending out announcements" />
              <Image className="col-span-2 " src={HR4} alt="A page for generating reports" />
              <Image className="md:hidden col-span-1 row-span-2 md:col-auto" src={HR100} alt="Happy HR" />

            </div>
            </div>
            
            
          </Section>

        </ProcessSection>
      </PageSection>
      <PageSection theme="dark">
        <ResultSection number="09">
        <Type variant="emphasized-body">
              Building <span className="italic font-serif font-normal">trust</span> and ensuring a <span className="italic font-serif font-normal">safe return to work</span> environment
            </Type>
          <div className="mt-10 md:w-2/3">
            <Type variant="body">
              We designed and implemented a highly succesful system in a very short span of 4 months. This system got adopted by Ingram Micro offices worldwide. 
            </Type>
          </div>
          <div className="mt-10">
            
            <Type variant="h5" >
                           My key learnings - 
                        </Type>


            <div className="flex flex-col md:grid md:grid-cols-2 gap-10 p-10 md:gap-20 md:p-20">
              <ListItem number="01" name="Balancing Speed and Quality">
              While speed is essential, it should not come at the expense of quality. The team successfully managed to develop an enterprise-scale application under time constraints, demonstrating the value of finding the right balance between speed and the quality of the final product.
              </ListItem>
              <ListItem number="02" name="Project Management">
                Managing such a project with tight deadlines taught me the importance of effective project management, including setting priorities, allocating resources, and meeting milestones.
              </ListItem>

            </div>

          

          </div>
        </ResultSection>


      </PageSection>
      <PageSection theme="dark"  >
      <Section theme={"dark"} name="Other work" number="" classname="w-full my-20 md:mt-32 p-5 p-5 flex flex-col gap-20">
                    <div className=" sm:px-20 md:px-0 md:columns-2 md:flex-row gap-10">
                    <div className=""> 
          
          <Card title="Crashr" type="crashr" subtitle=" Streamlining the design process" tags="Visual Design • Design System"/>
          </div>

                        <div className="mt-10 md:mt-0">

                        <Card title="Chain Reactive" type="chainreactive" subtitle=" Simplyfing the ordering process" tags="UX design • Fullstack development"/>
                        </div>


                    </div>
                </Section>
            
      </PageSection>

    </DefaultPage>
  )
}
