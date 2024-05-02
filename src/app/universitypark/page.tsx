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



import HeroImage from '../../../public/assets/universitypark/hero.png';
import Resident from '../../../public/assets/universitypark/Resident.png';
import GreenTeam from '../../../public/assets/universitypark/GreenTeam.png';
import CrazyEights from '../../../public/assets/universitypark/CrazyEights.png';
import Points from '../../../public/assets/universitypark/points.png';
import Badges from '../../../public/assets/universitypark/Badges.png';
import MidFi from '../../../public/assets/universitypark/MidFi.png';
import CardSort from '../../../public/assets/universitypark/CardSort.png';
import OnlineCardSort from '../../../public/assets/universitypark/OnlineCardSort.png';
import adminHomePage from '../../../public/assets/universitypark/adminHomePage.jpg'
import adminEditPractice from '../../../public/assets/universitypark/adminEditPractice.png';
import adminEditChallenge from '../../../public/assets/universitypark/adminEditChallenge.png';



import React, { useEffect, useState } from 'react'
import OtherWork from '../ComponentLibrary/commons/OtherWork/otherwork'
import ComponentsDisplaySlider from './ComponentsDisplaySlider'






export default function UniversityPark() {
    

    
    return (
        <DefaultPage selected="work">
            <PageSection theme="dark" isFullWidth>
                {/* Hero Section */}
                <>
                    <div className="max-h-[75vh]">
                        <Image src={HeroImage} alt="University Park: Gamifying sustainability" />
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
                                        Empowering <span className="italic font-serif font-normal">sustainable</span> communities

                                    </ProjectSection.IndentedLine>
                                    <ProjectSection.FirstPara>
                                        We had the opportunity to collaborate with the Sustainability Committee of University Park on a project aimed at promoting sustainable living practices among residents. The goal was to create a digital platform that fosters engagement, education, and action towards sustainability within the community.
                                    </ProjectSection.FirstPara>
                                    <ProjectSection.SecondPara>
                                        Over a series of four design sprints, our team worked diligently to understand the needs of University Park residents, develop a comprehensive solution, and create a <span className="font-bold">gamified user-friendly experience</span> that promotes <span className="font-bold">sustainable behaviors</span>.
                                    </ProjectSection.SecondPara>
                                </ProjectSection>

                            </div>

                            <div className="w-full min-w-full flex justify-center md:w-1/3 p-5">
                                <InfoSection>
                                    <InfoSection.Column>
                                        <InfoSection.Role>
                                            Product Designer
                                        </InfoSection.Role>
                                        <InfoSection.Timeline>
                                            Oct 2023 - May 2024
                                        </InfoSection.Timeline>
                                    </InfoSection.Column>
                                    <InfoSection.Column>
                                        <InfoSection.Tools>
                                            Figma,

                                        </InfoSection.Tools>
                                        <InfoSection.Team>
                                            Fatema Motiwala <br />
                                            Meghana Alla <br />
                                            Pooja Gajera <br />
                                            Rushenka Christopher

                                        </InfoSection.Team>
                                    </InfoSection.Column>
                                </InfoSection>

                            </div>
                        </div>
                    </>


                    {/* Overview and Solution */}
                    <div className="my-20 md:my-32 p-5">
                        <OverviewSection>
                            <div className="flex flex-col md:flex-row md:gap-x-20 md:gap-y-0 gap-y-20 justify-center">
                                <OverviewSection.Problem>
                                    How might we effectively encourage University Park residents to adopt and maintain sustainable living practices in their homes and daily lives, while fostering community engagement and collaboration?
                                </OverviewSection.Problem>
                                <OverviewSection.Outcome>
                                    <OverviewSection.OutcomeParagraph>
                                        We designed a multifaceted digital platform that serves as a hub for sustainable living in University Park. The platform includes educational resources, a list of actionable sustainability practices, gamification elements, and administrative tools for the Sustainability Committee.


                                    </OverviewSection.OutcomeParagraph>


                                </OverviewSection.Outcome>
                            </div>
                            <OverviewSection.Solution>
                                <div className="flex flex-col gap-y-20">
                                    <div className="flex flex-col md:flex-row md:gap-x-20"   >
                                        <video loop autoPlay muted className="w-full md:w-2/3 rounded-2xl">
                                            <source src="./assets/universitypark/OnboardingFlow.mp4" type="video/mp4" />
                                        </video>

                                        <div className="w-full md:w-1/3 flex justify-center items-center">
                                            <Type variant="h5" fontType="font-serif"> Resident User Onboarding</Type>
                                        </div>
                                    </div>


                                    <div className="w-full flex flex-col md:flex-row md:gap-x-20">
                                        <div className="w-full md:w-1/3 flex justify-center items-center">
                                            <Type variant="h5" fontType="font-serif"> Completing a Practice and Gamification</Type>
                                        </div>

                                        <video loop autoPlay muted className="w-full md:w-2/3 rounded-2xl">
                                            <source src="./assets/universitypark/Practice Gamification Flow.mp4" type="video/mp4" />
                                        </video>

                                    </div>


                                    <div className="flex flex-col md:flex-row md:gap-x-20"   >
                                        <video loop autoPlay muted className="w-full md:w-2/3 rounded-2xl">
                                            <source src="./assets/universitypark/Create a post in the community.mp4" type="video/mp4" />
                                        </video>

                                        <div className="w-full md:w-1/3 flex justify-center items-center">
                                            <Type variant="h5" fontType="font-serif"> Making a post on the community forum</Type>
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

                    <Section theme={"light"} name="Research and Analysis" number="04">

                        <div className="w-full mt-12">
                            <div className="w-full mt-12 md:w-2/3">
                                <Type variant="h5">
                                    Understanding what sustainability means for University park
                                </Type>
                            </div>
                            <div className="py-5 md:w-2/3">
                                <Type variant="body">
                                    We started from having no idea of sustainability for a town. In order to get a better understanding of sustainability we conducted
                                </Type>
                            </div>
                            <div className="flex relative flex-col md:grid md:grid-cols-2 gap-10 p-10 md:gap-20 md:p-20">
                                <ListItem number="01" name="Market Research">
                                    We took the top down approach and researched everything under f sustainability umbrella in the world and then narrowed it down to UPark neighbors.
                                </ListItem>
                                <ListItem number="02" name="Expert Interviews">
                                    We couldn’t speak with our users yet so we spoke to SME’s and members of the neighboring Tacoma Park sustainability committee to get some inspiration.
                                </ListItem>


                            </div>
                        </div>
                        <div className="w-full mt-12">
                            <div className="w-full mt-12 md:w-2/3">
                                <Type variant="body">
                                    Our research led us to the following:
                                </Type>
                            </div>
                            <div className="flex relative flex-col md:grid md:grid-cols-3 gap-10 p-10 md:gap-20 md:px-20">
                                <ListItem number="01" name="">
                                    A comprehensive list of practices that residents of Upark could perform around their house and rebates associated with them.
                                </ListItem>
                                <ListItem number="02" name="">
                                    Similar previous efforts conducted in and around Upark and why they were not sustianable in the long run,
                                </ListItem>
                                <ListItem number="03" name="">
                                    The draft idea for the system. A Landowner portal that provides all the information and an Admin portal that helps UP sustainability team keep track fo sustainable efforts
                                </ListItem>


                            </div>
                        </div>


                    </Section>

                    <Section theme={"light"} name="Understanding Users" number="05">

                        <div className="w-full flex flex-col mt-12 gap-20">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-1/2 flex flex-col items-center justify-end">
                                    <div className="w-5/6">
                                        <ListItem number="01" name="Residents of University Park">
                                            They will be using the platform to assess their sustainability practices, understand their environmental impact, access information about sustainability initiatives, learn best practices for environmental conservation, and engage with the community on sustainability-related issues.
                                        </ListItem>

                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                                    <div className="w-2/3">
                                        <Image className="w-1/2"  src={Resident} alt="Residents of University Park" />
                                    </div>
                                </div>

                            </div>
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-1/2 flex flex-col items-end justify-center">
                                    <div className="w-2/3 ">
                                        <Image className="w-1/2" src={GreenTeam} alt="Green Team" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col items-center justify-end">
                                    <div className="w-5/6">

                                        <ListItem number="02" name="Green Team">
                                            The Green Team or the Sustainability team of University Park. They are responsible for overseeing the implementation of sustainable practices in University Park. They use the platform to collect data, analyze sustainability metrics, and make informed decisions. They will also update and make changes to the portal
                                        </ListItem>

                                    </div>
                                </div>


                            </div>

                        </div>
                    </Section>
                    <Section theme={"light"} name="Conceptual designs" number="06">
                        <div className="w-full mt-8 flex flex-col gap-8">

                            <Type variant="body" className="md:w-2/3">
                                Building on research insights, we decided to develop an initial mockup of our online platform for the residents of university park.
                            </Type>


                        </div>

                        <div className="w-full mt-12">
                            <div className="w-full mt-12 md:w-2/3">
                                <Type variant="body">
                                    We broke down the platform into a 5 core pages. These were:
                                </Type>
                            </div>
                            <div className="flex relative flex-col md:grid md:grid-cols-3 gap-10 p-10 md:gap-20 md:px-20">
                                <ListItem number="01" name="">
                                    Profile page for the residents
                                </ListItem>


                                <ListItem number="02" name="">
                                    A page to list all the practices
                                </ListItem>

                                <ListItem number="03" name="">
                                    A page to list all the events
                                </ListItem>

                                <ListItem number="04" name="">
                                    A specific practice page
                                </ListItem>

                                <ListItem number="05" name="">
                                    A specific event page
                                </ListItem>

                            </div>
                        </div>
                        <div className="w-full mt-12">
                            <div className="w-full mt-12 md:w-2/3">
                                <Type variant="h5">
                                    Crazy Eights
                                </Type>
                            </div>
                            <div className="py-5 md:w-2/3">
                                <Type variant="body">
                                    We then spent some time sketching out how we thought the pages should look independently and what features they should have and then voted on the best ones.
                                </Type>
                            </div>
                            <div className="flex ">
                                <Image src={CrazyEights} className='' alt="Crashr Primary Logo" />

                            </div>
                        </div>

                        <div className="w-full mt-12">
                            <div className="w-full mt-12 md:w-2/3">
                                <Type variant="h5">
                                    First look at our screens!
                                </Type>
                            </div>
                            <div className="py-5 md:w-2/3">
                                <Type variant="body">
                                    After voting we  made the first version of the product to show our client and get some precious feedback
                                </Type>
                            </div>
                            <div className="flex ">
                                <Image src={MidFi} className='' alt="Crashr Primary Logo" />

                            </div>
                        </div>


                    </Section>
                    <Section theme={"light"} name="Information Architecture" number="07">
                        <div className="w-full mt-12">
                            <div className="w-full mt-12 md:w-2/3 flex flex-col gap-4">
                                <Type variant="body">
                                    In order to determine the information architecture of the practices page we conducted a simple card sorting exercise with the residents of university park and some proxy users.
                                </Type>
                                <Type variant="body">
                                    We conducted this online and in person
                                </Type>
                            </div>
                            <div className="grid grid-cols-2 gap-4 items-center mt-12">
                                <Image src={CardSort} className='' alt="Crashr Primary Logo" />
                                <Image src={OnlineCardSort} className='' alt="Crashr Primary Logo" />
                            </div>
                            <div className="w-full mt-12 ">
                                <Type variant="body">
                                    We got the following categories from the card sort
                                </Type>
                            </div>
                            <div className="flex relative flex-col md:grid md:grid-cols-3 gap-10 p-10 md:gap-20 md:p-20">
                                <ListItem number="01" name="Waste Minimization" />
                                <ListItem number="02" name="Water Management" />
                                <ListItem number="03" name="Habitat and biodiversity" />
                                <ListItem number="04" name="Garden Management" />
                                <ListItem number="05" name="Energy Renewables" />
                            </div>
                        </div>

                    </Section>
                    <Section theme={"light"} name="Adding motivators" number="08">
                        <div className="w-full mt-12">
                            <div className="w-full mt-12 md:w-2/3">
                                <Type variant="body">
                                    Now that we had a list of features and a basic idea of how the page would look we were left with a big challenge.
                                </Type>
                            </div>
                            <div className="w-full mt-12 ">
                                <Type variant="h5">
                                    How might we motivate residents to be sustainable and use this platform?
                                </Type>
                            </div>
                            <div className="flex relative flex-col md:grid md:grid-cols-2 gap-10 p-10 md:gap-20 md:p-20">
                                <ListItem number="01" name="Gamification">
                                    We wanted to use the &quot;leveling up&quot; dopamine trigger to motivate users to be more sustainable. Residents could earn cool badges and show them off on their Profile
                                </ListItem>


                                <ListItem number="02" name="Physical Rewards">
                                    We emphasized the need of physical rewards. Something like a plaque that residents could put on their front yard or town merch.
                                </ListItem>

                                <ListItem number="03" name="Continuous engagement">
                                    The town had to constantly have activities planned for the residents to keep them engaged. Constant engagnement is a form of motivation.
                                </ListItem>

                                <ListItem number="04" name="Community aspect">
                                    We added a community page for people to be able to share their progress and ask questions to their neighbours. Gamification along with the community aspect is a strong motivator.
                                </ListItem>
                            </div>
                        </div>
                        <div>
                            <div className="w-full mt-12 ">
                                <Type variant="h5">
                                    Our game plan
                                </Type>
                            </div>
                            <div className="w-full mt-6 md:w-2/3">
                                <Type variant="body">
                                    We introduced a simple leveling system. Residents could earn points by completing practices and attending events.
                                </Type>
                                <Type variant="body">
                                    They could also earn badges and participate in town challenges.
                                </Type>

                            </div>
                            <div className="w-full flex justify-center gap-4">
                                <div className="w-1/2 flex flex-col gap-4 justify-center items-center ">
                                <Image className="w-2/3 mt-6 " src={Points} alt="University Park: Gamifying sustainability" />
                                <Type variant="body">
                                    Level up by earning points
                                </Type>
                                </div>
                                <div className="w-1/2 flex flex-col gap-4 justify-center items-center ">
                                <Image className="w-2/3 mt-6 " src={Badges} alt="University Park: Gamifying sustainability" />
                                <Type variant="body">
                                    Complete challenges and earn badges
                                </Type>
                                </div>
                                
                            </div>
                        </div>
                    </Section>

                    <Section theme={"light"} name="Design System" number="09">
                        <div className="w-full mt-12">
                            <div className="w-full mt-12 ">
                                <Type variant="h5">
                                    Finalizing the Design System
                                </Type>
                            </div>
                            <div className="w-full mt-6 md:w-2/3">
                                <Type variant="body">
                                    Having 5 creative heads working on this project, this task was more challenging than we anticipated. We started out by creating a moodboard. Each of us then created our own version of a screen and we voted to pick a design theme. After lot of back and forth we were able to finalize our design system
                                </Type>
                            </div>
                            <div className="py-10 md:p-20 flex w-full justify-center">
                                <div className="w-full md:w-5/6 ">
                                    <ComponentsDisplaySlider />
                                </div>

                            </div>
                        </div>
                    </Section>
                    <Section theme={"light"} name="Final screens based on design system" number="10">
                        <div className="w-full flex flex-row items-center justify-center mt-12 gap-4 ">

                            <Type className="w-2/6" variant="h5">
                                Figma Prototype of our screens for user testing:
                            </Type>
                            <iframe className="rounded-2xl border-gray-500 border" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FXmPa2ddmTmsZwwG1Kibpg3%2FUntitled%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-5102%26viewport%3D607%252C366%252C0.02%26t%3DHWFaX8ou532ucJk9-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D1%253A5102%26mode%3Ddesign" allowFullScreen></iframe>
                        </div>
                    </Section>
                    <Section theme={"light"} name="User Testing" number="11">
                        <div className="w-full mt-12">
                            <div className="w-full mt-12 md:w-2/3">
                                <Type variant="body">
                                    We tested out the designs with 7 residents of University Park. Our key findings were as follows:
                                </Type>
                            </div>

                            <div className="flex relative flex-col md:grid md:grid-cols-3 gap-10 p-10 md:gap-20 md:p-20">
                                <ListItem number="01" name="Unclear motive of the application">
                                    There was no clear explanation of the motive behind tha application and how user&apos;s could earn points and progress.
                                </ListItem>

                                <ListItem number="02" name="Practices IA was not clear">
                                    There was a lot of confusion between &quot;Habitat and Biodiversity&quot; and &quot;Garden Management&quot;
                                </ListItem>

                                <ListItem number="03" name="Profile Page could be better organized">
                                    Profile page could be better organized to show the current progress of the user towards ongoing practices, and badges.
                                </ListItem>

                                <ListItem number="04" name="Mixed emotions on gamification">
                                    Some people felt that there was too much gamification. Almost felt like a childrens app.
                                </ListItem>
                                <ListItem number="05" name="Point split up for badges was not clear">
                                    There was a lot of confusion on the points split up for badges and Town challenges.
                                </ListItem>
                            </div>
                        </div>
                        <div>
                            <div className="w-full mt-12 ">
                                <Type variant="h5">
                                    Iterations after testing
                                </Type>
                            </div>
                            <div className="flex relative flex-col md:grid md:grid-cols-3 gap-10 p-10 md:gap-20 md:p-20">
                                <ListItem number="01" name="">
                                    Added an &quot;Our Mission&quot; section on the home page and an elaborate onboarding flow.
                                </ListItem>

                                <ListItem number="02" name="">
                                    Updated the Practices IA and made it more understandable.
                                </ListItem>

                                <ListItem number="03" name="">
                                    Overall simplified the visual design information breakdown to make the content more easier to consume
                                </ListItem>


                            </div>
                            <div className="w-full flex flex-row items-center justify-center mt-12 gap-4 ">

                                <Type className="w-2/6" variant="h5">
                                    Final Prototype of our screens:
                                </Type>
                                <div className="flex flex-col justify-center">
                                    <iframe className="rounded-2xl border-gray-500 border" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FRn4t2e50vXVVze0gCRJ0dq%2FPost-user-testing-screen-updated%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-1897%26viewport%3D73%252C1424%252C0.09%26t%3DvbIFI5h9KMBx0Sy9-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D1%253A1897%26mode%3Ddesign" allowFullScreen></iframe>

                                    <div className="w-full flex justify-center">
                                        <Type className=" w-2/3 p-4 text-center" variant="body">
                                            This prototype just represents the screens. It does not show the gamification or other features in action.
                                        </Type>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Section>
                    <Section theme={"light"} name="Admin" number="12">
                        <div className="w-full mt-12 ">
                            <Type variant="h5">
                                Providing Key Resident Insights
                            </Type>
                        </div>
                        <div className="w-full mt-6 md:w-2/3">
                            <Type variant="body">
                                The admin side homepage showed some key usage insights. This page provides high level overview for all the residents of Upark and the admins could delve deep into the activity of a single household as well
                            </Type>


                        </div>
                        <div className="w-full flex justify-center">
                            <Image className="w-4/5 mt-6 rounded-xl" src={adminHomePage} alt="University Park: Gamifying sustainability" />
                        </div>


                        <div className="w-full mt-12 pt-12">
                            <div className="w-full mt-12">
                                <Type variant="h5">
                                    Editing Resident portal pages
                                </Type>
                            </div>
                            <div className="w-full mt-6 md:w-2/3">
                                <Type variant="body">
                                    Our admin users were not technologically advanced, so we wanted to keep the screens as simple as possible. We decided to take the WYSIWYG approach for editing all the key pages on the website.
                                </Type>
                            </div>
                            <div className="w-full flex justify-center gap-4">
                                <Image className="w-1/2 mt-6 rounded-lg" src={adminEditPractice} alt="University Park: Gamifying sustainability" />
                                <Image className="w-1/2 mt-6 rounded-lg" src={adminEditChallenge} alt="University Park: Gamifying sustainability" />
                            </div>

                        </div>
                        <div>

                        </div>
                    </Section>

                </ProcessSection>
            </PageSection>

            <PageSection theme="dark">
                <ResultSection number="08">
                    {/* <Type variant="emphasized-body">
                        Balancing brand <span className="italic font-serif font-normal">identity</span> with design <span className="italic font-serif font-normal">consistency</span>
                    </Type> */}
                    <div className="mt-10 md:w-2/3">
                        <Type variant="body">
                            The project successfully delivered a multifaceted digital platform that serves as a hub for sustainable living in University Park. The platform includes educational resources, a comprehensive list of actionable sustainability practices, gamification elements to encourage engagement, and administrative tools for the Sustainability Committee.

                        </Type>
                        <Type className="mt-6" variant="body">
                            Through iterative design sprints, user research, and testing, the platform was refined to meet the needs of the target users, including residents, the Green Team, and administrators. The platform aims to foster community engagement, education, and action towards sustainable living practices within the community.
                        </Type>
                    </div>
                    <div className="mt-10">


                        <Type variant="h5" className="mt-10">
                            My key learnings -
                        </Type>


                        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 p-10 md:gap-20 md:p-20">
                            <ListItem number="01" name="Balancing Gamification and Seriousness">
                                Balancing gamification with education and community aspects was key. While gamification drove engagement, too much made it seem gimmicky. Finding the right balance celebrated achievements while emphasizing environmental impact.
                            </ListItem>
                            <ListItem number="02" name="Clarity in Communication and User Experiences">
                                User testing revealed confusion about the app&apos;s purpose and how users could earn points and rewards. To address this, clear explanations through improved onboarding and in-app messaging are essential for better user understanding and engagement.
                            </ListItem>

                        </div>



                    </div>
                </ResultSection>


            </PageSection>
            <PageSection theme="dark"  >
                <OtherWork currentProject="crashr" />
            </PageSection>

        </DefaultPage>
    )
}
