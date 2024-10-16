import Image from 'next/image'


import React from 'react'
import DefaultPage from '../ComponentLibrary/commons/pages/DefaultPage';
import PageSection from '../ComponentLibrary/commons/pages/PageSection';
import ProjectSection from '../ComponentLibrary/commons/sections/ProjectSection';
import { Type } from '../ComponentLibrary/Typography/Type';
import OverviewSection from '../ComponentLibrary/commons/sections/OverviewSection';
import InfoSection from '../ComponentLibrary/commons/sections/InfoSection';
import SolutionSection from '../ComponentLibrary/commons/sections/SolutionSection';
import ProcessSection from '../ComponentLibrary/commons/sections/ProcessSection';
import Section from '../ComponentLibrary/commons/sections/section';
import GridContentSection from '../ComponentLibrary/Components/GridContentSection';
import ListItem from '../ComponentLibrary/Components/List Items/listitem';
import ResultSection from '../ComponentLibrary/commons/sections/ResultSection';
import OtherWork from '../ComponentLibrary/commons/OtherWork/otherwork';

import Hero from '../../../public/assets/Cadence/hero.png';
import Inspiration from '../../../public/assets/Cadence/inspiration.png'
import MappingSurface from '../../../public/assets/Cadence/mappingsurface.png'
import UserFlow from '../../../public/assets/Cadence/Userflow.png'
import Storyboard from '../../../public/assets/Cadence/Storyboard.png'
import { ButtonOrLink } from '../ComponentLibrary/Components/Button/LinkOrButton';





export default function Cadence() {
  const STYLES = { videoIframeContainer: { padding: '56.25% 0 0 0', position: 'relative', }, videoIframe: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' } }
  return (
    <DefaultPage selected="work">
      <PageSection theme="dark" >

        {/* Hero Section */}
        <>
          <div className="max-w-screen-xl max-h-[65vh] rounded-b-lg md:rounded-b-2xl overflow-hidden">
             <Image src={Hero} alt="Cadence - An Interactive art + tech installation"/>   
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
                      <span className="italic font-serif font-normal">Interactive art installation</span> that reacts to <span className="italic font-serif font-normal">users movement</span> and creates an <span className="italic font-serif font-normal">audio visual experience</span>

                    </ProjectSection.ShortDescription>
                    <ProjectSection.FirstPara>
                      I wanted to explore new interaction patterns. The IMD incubator at UMD gave me the opportunity to explore new immersive tech and create an amazing experience. The objective of this incubator was to build art installations to be showcased in the NextNow Fest 2024, a art tech festival at UMD.
                    </ProjectSection.FirstPara>
                    

                  </ProjectSection>

                  {/* Overview and Solution */}
                  <div className="mt-20  ">
                    <OverviewSection>
                      <div className="flex flex-col md:flex-row md:gap-x-20 md:gap-y-0 gap-y-20 justify-center">
                        <OverviewSection.Problem>
                          How might we create a seamless and harmonious experience where users could influence music and visuals through their movements?
                        </OverviewSection.Problem>
                        <OverviewSection.Outcome>
                          <OverviewSection.OutcomeParagraph>
                            We used body movements captured by a motion detector sensor to modify and enhance existing music, creating a dynamic and immersive experience.
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
                        Lead Designer and Developer
                      </InfoSection.Role>
                      <InfoSection.Timeline>
                        Jun 2024 - Aug 2024
                      </InfoSection.Timeline>
                    </InfoSection.Column>
                    <InfoSection.Column>
                      <InfoSection.Tools>
                        Figma, Procreate, Blender, Unity, Touchdesigner
                      </InfoSection.Tools>
                      <InfoSection.Team>
                        Arjav Jain
                      </InfoSection.Team>
                    </InfoSection.Column>
                  </InfoSection>

                </div>
              </div>
            </>




          </div>
        </PageSection.ConstrainedWidth>


        <PageSection.FullWidth theme="dark" >
          <SolutionSection>

            <div className="p-20 w-full h-screen relative rounded-2xl my-20">
              <iframe
                title="vimeo-player"
                src={"https://player.vimeo.com/video/1000887393?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
                width="100%"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
              >
              </iframe>

            </div>
          </SolutionSection>
        </PageSection.FullWidth>
      </PageSection>
      <PageSection theme="light">

        {/* Process */}
        <ProcessSection>

          <Section theme={"light"} name="Finding inspiration" number="04">

            <Section.ConstrainedWidth>

              <div className="w-full flex flex-col mt-10 gap-20">

                <GridContentSection>
                  <div className="w-full">
                    <Type variant="h5Subheading">
                      Looking for  <span className="italic font-serif font-normal">inspiration</span>
                    </Type>

                  </div>
                  <div className="w-full">
                    <Type variant="body">
                      I tried to look for an idea in the simplest and most unexpected places and I found it while watching the movie Whiplash.
                    </Type>
                  </div>

                </GridContentSection>
                <GridContentSection>
              
              <div className="flex flex-col gap-2">
            <Image src={Inspiration} className='' alt="Inspiration" />
            <span className="flex gap-2 items-end">
            <Type variant="body" > Image Source: </Type> <ButtonOrLink href="https://hate-sink.fandom.com/wiki/Terence_Fletcher">HateSinkWiki</ButtonOrLink>
            </span>
            </div>
            <div className=" flex flex-col gap-4 justify-end py-20 items-start">
                      <Type variant="h5" fontType="font-serif"> Orchestra Conductor</Type>
                      <Type variant="body" > Wouldnt it be cool if body movement created some music? </Type>
                    </div>

           
            </GridContentSection>

              </div>
            </Section.ConstrainedWidth>
           
          </Section>

          <Section theme={"light"} name="Research &amp; Discovery" number="05" classname="my-20 ">
            <Section.ConstrainedWidth>
              <div className="flex flex-col mt-10 gap-20">
                <GridContentSection>
                  <div className="w-full">
                    <Type variant="h5Subheading">
                      Designing the  <span className="italic font-serif font-normal">user flows</span> and <span className="italic font-serif font-normal">interactions</span>
                    </Type>

                  </div>
                  <div className="w-full">
                    <Type variant="body">
                      I tried to sketch out and create story boards and userflows of how I wanted the experience to feel.
                    </Type>
                  </div>

                </GridContentSection>
              </div>
              
            </Section.ConstrainedWidth>
            <div className="flex flex-col gap-y-4 md:grid md:grid-cols-3 items-center px-4 md:gap-y-40 md:gap-x-10 py-20 ">

                <Image src={UserFlow} className="col-span-1" alt="High levelUserflow"/>
                <Image src={Storyboard} className="col-span-2" alt="Storyboard"/>

              </div>
          </Section>
          <Section theme={"light"} name="Building the base" number="06 " classname="my-20 ">
            <Section.ConstrainedWidth>
            <div className="w-full flex flex-col gap-20 mt-10">
              <GridContentSection>

                <div className="w-full">
                  <Type variant="h5Subheading">
                    Building the  <span className="italic font-serif font-normal">POC</span>
                  </Type>

                </div>
                <div className="w-full">
                  <Type variant="body">
                    I tried to get the core concept of the experience working with the tech I had. I built the POC using Touchdesigner with Kinect Azure for motion detection. I used Max msp for music generation and built a basic therim.
                  </Type>
                </div>
                


              </GridContentSection>
             </div>

            </Section.ConstrainedWidth>
            <div className="flex flex-col gap-y-4 md:grid md:grid-cols-4 md:gap-y-40 md:gap-x-10 mt-20 ">
                  
                 
                
                  <div></div>
            <div className=" flex flex-col gap-4 justify-end  items-start">
                      <Type variant="h5" fontType="font-serif"> A simple therim</Type>
                      <Type variant="body" > Unmute the video to hear the sound. Warning: The sound is harsh.  </Type>
                    </div>
                  
                    <video loop autoPlay muted controls className=" rounded-2xl">
                      <source src="./assets/Cadence/poc.mp4" type="video/mp4" />
                    </video>
                    </div>
          </Section>
          <Section theme={"light"} name="Prototyping" number="07">
            <Section.ConstrainedWidth>
            <div className="w-full flex flex-col gap-20 mt-10">
              <GridContentSection>
                <div className="w-full">
                  <Type variant="h5Subheading">
                    Buidling <span className="italic font-serif font-normal">the experience </span>
                  </Type>

                </div>
                <div className="w-full">
                  <Type variant="body">
                    After we got the POC validated, we worked on making the experience more immersive by adding an audio reactive particle cloud visualization and mapping it to different surfaces that we built using cardboard.

                  </Type>
                </div>

              </GridContentSection>

              
            </div>  

            </Section.ConstrainedWidth>
            <div className="flex flex-col gap-y-4 md:grid md:grid-cols-4 md:gap-y-40 md:gap-x-10 p-20 ">
                  
            <Image src={MappingSurface} className='col-span-3 rounded-2xl' alt="Mapping surface" />

            <div className=" flex flex-col gap-4 justify-end py-20 items-start">
                      <Type variant="h5" fontType="font-serif"> Building Projection surfaces</Type>
                      <Type variant="body" > We built multiple surfaces using cardboard and covered them using white paper and spray paint  </Type>
                    </div>
                
                  
            <div className=" flex flex-col gap-4 justify-end py-20 items-start">
                      <Type variant="h5" fontType="font-serif"> Mapping the projection</Type>
                      <Type variant="body" > We used Kantan mapper to map different visualizations to each surface we created </Type>
                    </div>
                  
                    <video loop autoPlay muted controls className="col-span-3 rounded-2xl">
                      <source src="./assets/Cadence/mapping.mp4" type="video/mp4" />
                    </video>
                    </div>
          </Section>
          <Section theme={"light"} name="User Testing" number="08">
            <Section.ConstrainedWidth>
            <div className="w-full flex flex-col gap-20 mt-10 mb-10">
              <GridContentSection>
                <div className="w-full">
                  <Type variant="h5Subheading">
                  <span className="italic font-serif font-normal">Testing</span> and <span className="italic font-serif font-normal">iterating  </span>
                  </Type>

                </div>
                <div className="w-full">
                  <Type variant="body">
                    We tested our installation with 10 users and gathered some feedback and iterated on the installation. 
                    Our key learnings were:
                  </Type>
                </div>

              </GridContentSection>

              <GridContentSection>
                                    <ListItem number="01" name="Magical experience">
                                        We got a lot of positive feedback from the users. Most of them described the experience as “magical” and feeling “part of the art.”
                                    </ListItem>
                                    <ListItem number="02" name="Unclear interaction patterns">
                                        Based on our observation of the users we could tell that the gestures for changing music were not clear and intuitive. We changed it up to make it even more immersive.
                                    </ListItem>
                                </GridContentSection>
      </div>

            </Section.ConstrainedWidth>
            </Section>

        </ProcessSection>
      </PageSection>
      <PageSection theme="dark">
        <ResultSection number="09">

          <div className="flex flex-col mt-10 gap-20">

            <GridContentSection>
              <div className="w-full">
                <Type variant="h5Subheading">
                  Innovating <span className="italic font-serif font-normal">Interaction</span> and <span className="italic font-serif font-normal">Technical Balance</span>
                </Type>

              </div>
              <div className="w-full">
                <Type variant="body">
                  We were able to come up with a design that satisfied the needs of the business owners while also keeping the complexity to a minimum for the consumers.
                </Type>
              </div>

            </GridContentSection>








            <GridContentSection>
              <ListItem number="01" name="Designing New Interaction Patterns">
                Developing innovative interaction patterns was crucial in creating an engaging user experience. By exploring various ways users could interact with the installation, I discovered that combining familiar elements with novel interactions can lead to more intuitive and enjoyable experiences. This process involved continuous experimentation and iteration, ensuring that the final interaction patterns were not only functional but also captivating for users.
              </ListItem>
              <ListItem number="02" name="Balancing Technical and Creative Aspects">
                One of the significant challenges was balancing technical constraints with creative aspirations. The initial goal of generating harmonious music directly from body movements proved difficult, leading to a pivot in the approach. By using existing music and modifying it based on user interactions, I was able to achieve a harmonious and immersive experience while staying within technical limitations. This taught me the importance of flexibility and adaptability in achieving project goals.
              </ListItem>
            </GridContentSection>
          </div>
        </ResultSection>


      </PageSection>
      <PageSection theme="dark"  >

        <OtherWork currentProject={"cadence"} />
      </PageSection>

    </DefaultPage>
  )
}
