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

import HeroImage from 'public/assets/everestos/Hero.png'
import SuggestionsOnLockScreen from '/public/assets/everestos/SuggestionsOnLockScreen.png'
import Inspo from '/public/assets/everestos/Inspiration.png'
import Colors from '/public/assets/everestos/colors.png'
import Logo from '/public/assets/everestos/Logo.png'
import TypeSelection from '/public/assets/everestos/Type.png'
import Rituals from '/public/assets/everestos/Rituals.png'
import React from 'react'
import { Button } from '../ComponentLibrary/Components/Button/Button'
import OtherWork from '../ComponentLibrary/commons/OtherWork/otherwork'
import SolutionSection from '../ComponentLibrary/commons/sections/SolutionSection'
import GridContentSection from '../ComponentLibrary/Components/GridContentSection'




export default function EverestOS() {
  return (
    <DefaultPage selected="work">
      <PageSection theme="dark" >
        
        {/* Hero Section */}
        <>
        <div className="max-w-screen-xl max-h-[65vh] rounded-b-lg md:rounded-b-2xl overflow-hidden">
            <Image src={HeroImage} alt="Everest OS - Reimagining operating systems" />
          </div>
        </>
        <PageSection.ConstrainedWidth>
        <div className="flex flex-col">

          {/* Project and Info Section */}
          <>
            <div className="flex mt-10 flex-col md:flex-row gap-2">
              <div className="flex flex-col justify-center w-full md:w-2/3 p-5">

                <ProjectSection>
                  <ProjectSection.ShortDescription>
                    <span className="italic font-serif font-normal">Reimagining</span> operating systems and <span className="italic font-serif font-normal">elevating</span> the Digital Experience.
                  </ProjectSection.ShortDescription>
                  <ProjectSection.FirstPara>
                    I always wondered about how people would go about designing an OS. I felt it was an interesting challenge and decided to take up on it in my Advanced visual design class.
                  </ProjectSection.FirstPara>
                  <ProjectSection.SecondPara>
                    Since this was a visual design course project, My key focus was on designing visually appealing screens and interactions.  I focused on creating a new OS rather than skinning an existing one.
                  </ProjectSection.SecondPara>
                  <ProjectSection.ThirdPara>
                    <span className="font-semibold">
                      EverestOS is simply an OS concept. It is in no way a complete OS proposal. It is just a practice project.
                    </span>
                  </ProjectSection.ThirdPara>
                </ProjectSection>
                {/* Overview and Solution */}
          <div className="mt-20 md:mt-32">
            <OverviewSection>
              <div className="flex flex-col md:flex-row md:gap-x-20 md:gap-y-0 gap-y-20 justify-center">
                <OverviewSection.Problem>
                  How might we develop an operating
                  system that seamlessly blends
                  innovation with tranquility, providing
                  users with a unique and enriching
                  digital experience.
                </OverviewSection.Problem>
                <OverviewSection.Outcome>
                  <OverviewSection.OutcomeParagraph>
                    I designed a contextually aware OS whose primary component was the users calendar.
                    I focused on enhancing efficiency, personalizing user interactions,
                    and creating a cohesive and recognizable brand.

                  </OverviewSection.OutcomeParagraph>


                </OverviewSection.Outcome>
              </div>
              
            </OverviewSection>

          </div>

              </div>

              <div className="w-full min-w-full flex justify-center md:w-1/3 p-5">
                <InfoSection>
                  <InfoSection.Column>
                    <InfoSection.Role>
                      Product Designer
                    </InfoSection.Role>
                    <InfoSection.Timeline>
                      Aug 2023 - Dec 2023
                    </InfoSection.Timeline>
                  </InfoSection.Column>
                  <InfoSection.Column>
                    <InfoSection.Tools>
                      Figma,
                      Protopie,
                      Illustrator
                    </InfoSection.Tools>
                    <InfoSection.Team>
                      Jason Aston - Professor<br />
                      Class members - Critics
                    </InfoSection.Team>
                  </InfoSection.Column>
                </InfoSection>

              </div>
            </div>
          </>


          
        </div>
        </PageSection.ConstrainedWidth>
      
      <PageSection.FullWidth theme="dark">
       <SolutionSection>
       <div className="flex flex-col gap-y-4 md:grid md:grid-cols-4 md:gap-y-40 md:gap-x-10 py-20 ">
                  
                    <Image src={SuggestionsOnLockScreen} alt="Everest OS - Reimagining operating systems" className="col-span-3"  />

                    <div className="w-full flex justify-center items-center">
                      <Type variant="h5" fontType="font-serif"> Contextually aware suggestions on lock screen</Type>
                    </div>
                  

                 
                    <div className="w-full flex justify-center items-center">
                      <Type variant="h5" fontType="font-serif"> Daily planning with Rituals</Type>
                    </div>

                    <Image src={Rituals} alt="Everest OS - Reimagining operating systems" className="w-full col-span-3 rounded-2xl" />

                  

                
                    <video loop autoPlay muted className="w-full col-span-3 rounded-2xl">
                      <source src="./assets/everestos/CalendarIntegration.mp4" type="video/mp4" />
                    </video>
                    <div className="w-full flex justify-center items-center">
                      <Type variant="h5" fontType="font-serif"> Seamless calendar integration</Type>
                    </div>
                  
                  
                    <div className="w-full flex justify-center items-center">
                      <Type variant="h5" fontType="font-serif"> Simplify your process with smart workflows</Type>
                    </div>

                    <video loop autoPlay muted className="w-full col-span-3 rounded-2xl">
                      <source src="./assets/everestos/Workflows.mp4" type="video/mp4" />
                    </video>

                  
                  
                    <video loop autoPlay muted className="w-full col-span-3 rounded-2xl">
                      <source src="./assets/everestos/multitasking.mp4" type="video/mp4" />
                    </video>
                    <div className="w-full flex justify-center items-center">
                      <Type variant="h5" fontType="font-serif"> Easy clutter less multitasking</Type>
                    </div>
                  
                  
                    <div className="w-full flex justify-center items-center">
                      <Type variant="h5" fontType="font-serif"> Fast access to most used apps</Type>
                    </div>

                    <video loop autoPlay muted className="w-full col-span-3 rounded-2xl">
                      <source src="./assets/everestos/EasyAccess.mp4" type="video/mp4" />
                    </video>
                </div>
       </SolutionSection>
       </PageSection.FullWidth>
      </PageSection>
      <PageSection theme="light">
        {/* Process */}
        <ProcessSection>

          <Section theme={"light"} name="Defining expectations" number="04">
            <Section.ConstrainedWidth>
              <div className="flex flex-col mt-10 gap-20">
                <GridContentSection>
                  <div className="w-full">
                    <Type variant="h5Subheading">
                      <span className="italic font-serif font-normal">What this project is and what to expect?</span>
                    </Type>

                  </div>
                  <div className="w-full">
                    <Type variant="body">
                      My goal with this project was to practice my visual design, interaction design and prototyping skills. I conducted user research and a usability testing session.
                    </Type>
                  </div>

                </GridContentSection>

                <GridContentSection>
                  <ListItem number="01" name="Personal Project">
                    This is a personal project to develop and improve my skills. There are no metrics or outcomes beyond my personal growth.
                  </ListItem>
                  <ListItem number="02" name="Practicing visual and interaction design">
                    I focused on high visual polish, consistency, building a design system and a design language for this project.
                  </ListItem>
                  <ListItem number="03" name="Trying new things">
                    I also wanted to work on this project to try new things and expand my creative potential.
                  </ListItem>

                </GridContentSection>
              </div>
            </Section.ConstrainedWidth>
          </Section>
          <Section theme={"light"} name="Reserarch" number="05">
            <Section.ConstrainedWidth>

              <div className="flex flex-col mt-10 gap-20">
                <GridContentSection>
                  <div className="w-full">
                    <Type variant="h5Subheading">
                      Understanding the  <span className="italic font-serif font-normal">evolution of OS</span>
                    </Type>

                  </div>
                  <div className="w-full">
                    <Type variant="body">
                      First step was to get an understanding of how the current OS were designed and how they have evolved.
                    </Type>
                  </div>

                </GridContentSection>

                <GridContentSection>
                  <ListItem number="1950s - 1960s" >
                    No real operating systems; computers were typically programmed directly in machine code or assembly language.
                  </ListItem>
                  <ListItem number="1960s - 1970s" >
                    I focused on high visual polish, consistency, building a design system and a design language for this project.
                  </ListItem>
                  <ListItem number="1970s - 1980s" >
                    The first graphical user interfaces (GUIs) emerged.<br /><br />

                    Apple&#39;s Lisa (1983) and Macintosh (1984) introduced the desktop metaphor with icons and a mouse.<br /><br />

                    Microsoft&#39;s Windows 1.0 (1985) had a simple GUI, but it was not widely adopted.
                  </ListItem>
                  <ListItem number="1980s - 1990s" >
                    Macintosh System Software evolved with each release, refining the visual design.<br /><br />

                    Windows 3.0 (1990) introduced a more Windows-like GUI and started gaining popularity.

                  </ListItem>

                  <ListItem number="1990s - 2010s" >
                    Windows Vista (2007) introduced the Aero visual style with translucent elements.<br /><br />

                    Windows 7 (2009) refined Aero and became a widely praised OS visually.<br /><br />

                    macOS introduced various visual themes, including Leopard, Snow Leopard, and Yosemite.<br /><br />

                    Mobile operating systems like iOS and Android brought touch-friendly interfaces.

                  </ListItem>
                  <ListItem number="2010s - present" >
                    Windows 8 (2012) introduced a touch-centric Metro UI but received mixed reviews.<br /><br />

                    Windows 10 (2015) combined elements of Windows 7 and 8 for a more cohesive look.<br /><br />

                    macOS continued with visual updates like Mojave&#39;s Dark Mode (2018).<br /><br />

                    Mobile OSes continued to evolve with iOS, Android, and the introduction of gesture-based navigation.<br /><br />

                    Flat design and minimalism became popular across platforms.

                  </ListItem>
                </GridContentSection>

                <div className="w-full flex justify-center">


                  <Button href="https://www.figma.com/file/7hlbbhpWnTJckS7kulB9ba?type=design&node-id=84-68&mode=design" intent="primary" theme="light">Research Findings</Button>
                </div>
              </div>
              <div className="flex flex-col mt-40 gap-20">
                <GridContentSection>
                  <div className="w-full">
                    <Type variant="h5Subheading">
                      How <span className="italic font-serif font-normal">AI</span> can change the OS?
                    </Type>

                  </div>
                  <div className="w-full">
                    <Type variant="body">
                      I felt that OS have not changed a lot since inception, while the supporting hardware has changed a lot. Now especially with the onset of AI, I wanted to reimagine how an OS would look while integrating key AI capabilities. Here are some possibilities I evaluated-
                    </Type>
                  </div>

                </GridContentSection>

                <GridContentSection>
                  <ListItem number="01" >
                    Personalization
                  </ListItem>
                  <ListItem number="02" >
                    Natural Language Interaction
                  </ListItem>
                  <ListItem number="03" >
                    Contextual awareness
                  </ListItem>
                  <ListItem number="04" >
                    Cross-Platform Integration
                  </ListItem>
                  <ListItem number="05" >
                    Adaptive Workflows
                  </ListItem>
                  <ListItem number="06" >
                    Proactive assistance
                  </ListItem>
                </GridContentSection>


              </div>
            </Section.ConstrainedWidth>
          </Section>
          <Section theme={"light"} name="Inspiration" number="05">
          <Section.ConstrainedWidth>
          <div className="flex flex-col mt-10 gap-20">
                <GridContentSection>
                  <div className="w-full">
                    <Type variant="h5Subheading">
                     Finding <span className="italic font-serif font-normal">visual insipiration</span> 
                    </Type>

                  </div>
                  <div className="w-full">
                    <Type variant="body">
                    I have always loved hiking in the Himalayas. I feel that hiking is very similar to everyday life with some extreme challenges. I got inspired by my own experience for this. My aim was to capture the calm yet adventerous nature of the mountains
                    </Type>
                    <Type variant="body" className="font-semibold">
                EverestOS is inspired by a hikers experience on one of the most beautiful places on this world - The Himalayas
              </Type>
                  </div>

                </GridContentSection>


              </div>
            </Section.ConstrainedWidth>
            <Image src={Inspo} alt="Himalayas" className="w-full mt-20 px-20" />

            
          </Section>
          <Section theme={"light"} name="Branding" number="06">
          <Section.ConstrainedWidth>
          <div className="flex flex-col mt-10 gap-20">
                <GridContentSection>
                  <div className="w-full">
                    <Type variant="h5Subheading">
                     Building out the <span className="italic font-serif font-normal">branding. Color</span> 
                    </Type>

                  </div>
                  <div className="w-full">
                    <Type variant="body">
                    I started out by defining the color scheme. I picked up colors from what you would see in the Himalayas. I loved how in a sea of flowers or a bed of trees, a single more contrasty flower or tree popped out and I used that as my inspiration.
                    </Type>
                    
                  </div>

                </GridContentSection>
                <Image src={Colors} alt="Himalayas" className="w-full " />
                <GridContentSection>
                  <div className="w-full">
                    <Type variant="h5Subheading">
                      <span className="italic font-serif font-normal">Typography</span> 
                    </Type>

                  </div>
                  <div className="w-full">
                    <Type variant="body">
                    I decided to go with a single font - Proxima Nova. Its clean and modern appearance aligns with the sleek and contemporary aesthetic of the modern gears and equipment that hikers may use during their journey.
                    </Type>
                    
                  </div>

                </GridContentSection>
                <Image src={TypeSelection} alt="Himalayas" className="w-full" />
                <GridContentSection>
                  <div className="w-full">
                    <Type variant="h5Subheading">
                    Designing the <span className="italic font-serif font-normal">Logo</span> 
                    </Type>

                  </div>
                  <div className="w-full">
                    <Type variant="body">
                    I wanted the logo to capture the essence of the Himalayas while portraying the peak of productivity. What better than to use Mt Everest itself!
                    </Type>
                    
                  </div>

                </GridContentSection>
                <Image src={Logo} alt="Himalayas" className="w-full" />
                <GridContentSection>
                  <div className="w-full">
                    <Type variant="h5Subheading">
                    Defining the <span className="italic font-serif font-normal">Brand Identity</span> 
                    </Type>

                  </div>
                  <div className="w-full">
                    <Type variant="body">
                    I then created an extensive branding document complete with the brands vision, mission and rules for color, type usage .
                    </Type>
                    
                  </div>

                </GridContentSection>
                <div className="w-full flex justify-center">
                <Button href="https://www.figma.com/proto/7hlbbhpWnTJckS7kulB9ba/Aaditya's-Design-File?page-id=1045%3A784&type=design&node-id=1045-789&viewport=489%2C174%2C0.24&t=nUpfADmRyZ51qq8G-1&scaling=scale-down-width&mode=design" intent="primary" theme="light">
              Branding document
              </Button>
              </div>

              </div>
            

            </Section.ConstrainedWidth>
          </Section>
          <Section theme={"light"} name="Creating OS screens" number="07">
          <Section.ConstrainedWidth>
            <div className="flex flex-col mt-10 gap-20">
            <GridContentSection>
                  <div className="w-full">
                    <Type variant="h5Subheading">
                    Designing the <span className="italic font-serif font-normal">OS screens</span> 
                    </Type>

                  </div>
                  <div className="w-full">
                    <Type variant="body">
                    The OS screens needed to be unique and something never seen before. I started out with simple paper sketches and low fidelity prototypes.
                    </Type>
                    
                  </div>

                </GridContentSection>
            </div>
            
            

                    </Section.ConstrainedWidth>
                    <div className="w-full flex justify-center mt-20">
            <video loop autoPlay muted className="w-full md:w-2/3 rounded-2xl  ">
                      <source src="./assets/everestos/ScreenEvolution.mp4" type="video/mp4" />
                    </video>
                    </div>
          </Section>
          <Section theme={"light"} name="Creating a marketing website" number="08">
          <Section.ConstrainedWidth>
          <div className="flex flex-col mt-10 gap-20">
            <GridContentSection>
                  <div className="w-full">
                    <Type variant="h5Subheading">
                    Designing a <span className="italic font-serif font-normal">marketing website</span> fot the OS
                    </Type>

                  </div>
                  <div className="w-full">
                    <Type variant="body">
                    I realized that the most important aspect of an OS is how it is marketed. I wanted to create a website that is true to the inspiration of the OS. Something that would take the customer on a journey across the features of the OS.
                    </Type>
                    
                  </div>

                </GridContentSection>
            </div>
            
            </Section.ConstrainedWidth>
            <div className="w-full flex flex-col items-center mt-20 gap-10" >
            <video loop autoPlay muted className="w-full md:w-5/6 rounded-2xl object-fill ">
                      <source src="./assets/everestos/Website.mp4" type="video/mp4" />
                    </video>
                    <Button href="https://cloud.protopie.io/p/21ce59ec858ac93810338978?ui=true&scaleToFit=true&enableHotspotHints=true&cursorType=touch&mockup=true&bgColor=%23F5F5F5&playSpeed=1"  intent="primary" theme="light">Website prototype</Button>
                   
                    </div>
                  

            
          </Section>

        </ProcessSection>
      </PageSection>
      <PageSection theme="dark">
        <ResultSection number="09">
          <div className="mt-10 flex flex-col gap-20">
        <GridContentSection>
                  <div className="w-full">
                    <Type variant="h5Subheading">
                    <span className="italic font-serif font-normal">Reflecting</span> on the project outcomes
                    </Type>

                  </div>
                  <div className="w-full">
                    <Type variant="body">
                    I was able to successfully come up with a design for the OS. Although the design is not comprehensive enough it was a very interesting project to work on. This is still a work in progress and there is a lot of work that needs to be done. 
                    </Type>
                    
                  </div>

                </GridContentSection>
                <GridContentSection>
                <ListItem number="01" name="Branding as a Design Element">
              Recognizing the role of branding as an integral part of the design process is crucial. Consistency in visual elements, from color schemes to typography, is a powerful tool in creating a cohesive and recognizable brand identity.
              </ListItem>
              <ListItem number="02" name="Harmonizing Innovation and User Experience">
              Understanding how to seamlessly integrate cutting-edge features with a tranquil user experience is a critical skill. This project highlighted the importance of not only introducing innovations but ensuring they enhance, rather than disrupt, the overall user journey.
              </ListItem>
                </GridContentSection>
                </div>

         
        </ResultSection>


      </PageSection>
      <PageSection theme="dark"  >
        <OtherWork currentProject="everestos"/>


      </PageSection>

    </DefaultPage>
  )
}
