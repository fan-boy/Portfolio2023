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
import MappingSurface from '../../../public/assets/Cadence/mappingsurface.png'
import JourneyMap from '../../../public/assets/monumap/JourneyMap.png'
import Planning from '../../../public/assets/monumap/planning.png'
import Storyboard from '../../../public/assets/monumap/StoryBoard.png'
import { ButtonOrLink } from '../ComponentLibrary/Components/Button/LinkOrButton';





export default function Monumap() {
  const STYLES = { videoIframeContainer: { padding: '56.25% 0 0 0', position: 'relative', }, videoIframe: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' } }
  return (
    <DefaultPage selected="work">
      <PageSection theme="dark" >

        {/* Hero Section */}
        <>
          <div className="max-w-screen-xl max-h-[65vh] rounded-b-lg md:rounded-b-2xl overflow-hidden">
            <Image src={Hero} alt="Cadence - An Interactive art + tech installation" />
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
                      An <span className="italic font-serif font-normal">augmented reality</span> app to bring cities and monuments to life.
                    </ProjectSection.ShortDescription>
                    <ProjectSection.FirstPara>
                      Traveling should be more than just sightseeing—it should be an immersive and entertaining experience. We created MonuMap to revolutionize how people explore and learn about monuments. By leveraging augmented reality, MonuMap transforms the way travelers discover historical information, making it both engaging and informative.
                    </ProjectSection.FirstPara>
                    <ProjectSection.SecondPara>
                      No more searching through endless links or carrying pamphlets—MonuMap brings history to life right on your screen, making every journey a deeper and more meaningful adventure.
                    </ProjectSection.SecondPara>

                  </ProjectSection>

                  {/* Overview and Solution */}
                  <div className="mt-20  ">
                    <OverviewSection>
                      <div className="flex flex-col md:flex-row md:gap-x-20 md:gap-y-0 gap-y-20 justify-center">
                        <OverviewSection.Problem>
                          How might we enhance traditional tourism experiences, to create a more interactive and immersive way for visitors to engage deeply with the city&#39;s rich history and cultural significance?
                        </OverviewSection.Problem>
                        <OverviewSection.Outcome>
                          <OverviewSection.OutcomeParagraph>
                            The MonuMap App leverages Augmented Reality (AR) to create an interactive and educational experience for tourists and residents. By overlaying historical timelines and significant facts onto the monuments, users can explore the city’s history in a visually captivating and immersive manner.
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
                        Figma, Bezi, Adobe Aero, Unity, Lightship VPS
                      </InfoSection.Tools>
                      <InfoSection.Team>
                        Manit Rana
                        Meghana Alla
                      </InfoSection.Team>
                    </InfoSection.Column>
                  </InfoSection>

                </div>
              </div>
            </>




          </div>
        </PageSection.ConstrainedWidth>
      </PageSection>

      <PageSection theme="light">

        {/* Process */}
        <ProcessSection>

          <Section theme={"light"} name="User research" number="04">

            <Section.ConstrainedWidth>

              <div className="w-full flex flex-col mt-10 gap-20">

                <GridContentSection>
                  <div className="w-full">
                    <Type variant="h5Subheading">
                      <span className="italic font-serif font-normal">Observing</span> how people visit <span className="italic font-serif font-normal">monuments</span>
                    </Type>

                  </div>
                  <div className="w-full">
                    <p>
                      <Type variant="body">
                        Our research entailed visiting different monuments in the DMV region and making detailed notes on how people explored and visited the different monuments and making detailed notes.
                      </Type>
                    </p>
                    <p>
                      <Type variant="body">
                        We also interviewed 4 first time tourists to understand how we can improve their experience. These were unstructured interviews.
                      </Type>
                    </p>
                  </div>

                </GridContentSection>
                <GridContentSection>
                  <ListItem number="01" name="Fragmented Learning Experience">
                  Visitors often struggle to find cohesive and detailed information, leading to a disjointed understanding of the monuments they visit.
                  </ListItem>
                  <ListItem number="02" name="Overreliance on Traditional Resources">
                  ourists typically relied on pamphlets or generic web searches, which often failed to provide the depth of information they sought and is often distracting.
                  </ListItem>
                  <ListItem number="03" name="Desire for Enhanced Exploration">
                  First-time tourists showed enthusiasm for a more interactive, self-guided experience that could offer both educational content and engaging visuals.
                  </ListItem>
                  <ListItem number="04" name="Lack of Interactivity">
                  Many tourists expressed that their experiences felt passive, with limited opportunities for engaging with the history and significance of the monuments.
                  </ListItem>

                </GridContentSection>
              </div>
            </Section.ConstrainedWidth>

          </Section>

          <Section theme={"light"} name="Ideating" number="05" classname=" ">
            <Section.ConstrainedWidth>
              <div className="flex flex-col mt-10 gap-20">
                <GridContentSection>
                  <div className="w-full">
                    <Type variant="h5Subheading">
                      Designing the  <span className="italic font-serif font-normal">user flows</span> and <span className="italic font-serif font-normal">interactions</span> to make exploring exciting
                    </Type>

                  </div>
                  <div className="w-full">
                    <p>
                      <Type variant="body">
                        We decided on our approach to augment the monuments and create an infographic around the monuments physical space to enhance the visitors experience.
                      </Type>
                    </p>
                    <p>
                      <Type variant="body">
                        We created storyboards and journey maps to better understand the experience from the users perspective.
                      </Type>
                    </p>
                  </div>

                </GridContentSection>
              </div>

            </Section.ConstrainedWidth>
            <div className="flex flex-col gap-y-4 md:grid md:grid-cols-5 items-center px-4 md:gap-y-40 md:gap-x-10 py-20 ">


              <Image src={Storyboard} className="col-span-2" alt="Storyboard" />
              <Image src={JourneyMap} className="col-span-3" alt="Journey Map" />

            </div>
          </Section>
          <Section theme={"light"} name="Low-fi Prototyping" number="06 " classname="my-20 ">
            <Section.ConstrainedWidth>
              <div className="w-full flex flex-col gap-20 mt-10">
                <GridContentSection>

                  <div className="w-full">
                    <Type variant="h5Subheading">
                      <span className="italic font-serif font-normal">Planning</span> and <span className="italic font-serif font-normal">building</span>  a low-fi  prototype
                    </Type>

                  </div>
                  <div className="w-full flex flex-col gap-4">
                    <p>
                      <Type variant="body">
                        Planning on how to place content around the monuments in the AR space was one of the biggest challenge. We started out with visiting the monument and clicking pictures of the surrounding and trying to sketch where and how we would be placing the content
                      </Type>
                    </p>
                    <p>
                      <Type variant="body">
                        We decided to build the experience for the <span className="font-bold">MLK monument in Washington DC</span>.
                      </Type>
                    </p>
                  </div>



                </GridContentSection>
              </div>

            </Section.ConstrainedWidth>
            <div className="mt-20">
              <Image src={Planning} alt="Planning on how we planned to use the surfaces around the monument to augment it." />
            </div>
          </Section>
          <Section theme={"light"} name="Prototyping" number="07">
            <Section.ConstrainedWidth>
              <div className="w-full flex flex-col gap-20 mt-10">
                <GridContentSection>
                  <div className="w-full">
                    <Type variant="h5Subheading">
                      Getting the <span className="italic font-serif font-normal">tech</span> ready
                    </Type>

                  </div>
                  <div className="w-full">
                    <Type variant="body">
                      Since we wanted to create a locaiton specific experience, we decided to use Lightship VPS.

                    </Type>
                  </div>

                </GridContentSection>


              </div>

            </Section.ConstrainedWidth>
            <div className="flex flex-col gap-y-4 md:grid md:grid-cols-4 md:gap-y-40 md:gap-x-10 mt-20 px-10">



              <div></div>
              <div className=" flex flex-col gap-4 justify-end my-20 items-start">
                <Type variant="h5" fontType="font-serif">3D photogrammetry scans</Type>
                <Type variant="body" > In order to add the location to the Niantic Lightship database we had to conduct a photogammetry 3d scan of the monument.   </Type>
              </div>

              <video loop autoPlay muted className="rounded-2xl">
                <source src="./assets/monumap/scan.mp4" type="video/mp4" />
              </video>
              <div></div>

              <video loop autoPlay muted className="rounded-2xl col-span-3">
                <source src="./assets/monumap/UnityPlacment.mp4" type="video/mp4" />
              </video>
              
              <div className=" flex flex-col  gap-4 justify-end my-20 items-start">
                <Type variant="h5" fontType="font-serif">Adding scans to Unity</Type>
                <Type variant="body" > Added the scans to Unity and placed content around the monument in the virtual space </Type>
              </div>

              
              <div></div>
            </div>
          </Section>
          <Section theme={"light"} name="Content Design" number="08">
            <Section.ConstrainedWidth>
              <div className="w-full flex flex-col gap-20 mt-10">
                <GridContentSection>
                  <div className="w-full">
                    <Type variant="h5Subheading">
                      Desiging the <span className="italic font-serif font-normal">content</span> to augment on the monuments 
                    </Type>

                  </div>
                  <div className="w-full">
                    <Type variant="body">
                      We initially had plans of having a 3D tour guide who would walk you across the monument but due to time constraints we were limited to 2D graphics. 

                    </Type>
                  </div>

                </GridContentSection>


              </div>

            </Section.ConstrainedWidth>
            <div className="flex flex-col gap-y-4 md:grid md:grid-cols-4 md:gap-y-40 md:gap-x-10 mt-20 px-10">



              <div></div>
              <div className=" flex flex-col gap-4 justify-end my-20 items-start">
                <Type variant="h5" fontType="font-serif">3D photogrammetry scans</Type>
                <Type variant="body" > In order to add the location to the Niantic Lightship database we had to conduct a photogammetry 3d scan of the monument.   </Type>
              </div>

              <video loop autoPlay muted className="rounded-2xl">
                <source src="./assets/monumap/scan.mp4" type="video/mp4" />
              </video>
              <div></div>

              <video loop autoPlay muted className="rounded-2xl col-span-3">
                <source src="./assets/monumap/UnityPlacment.mp4" type="video/mp4" />
              </video>
              
              <div className=" flex flex-col  gap-4 justify-end my-20 items-start">
                <Type variant="h5" fontType="font-serif">Adding scans to Unity</Type>
                <Type variant="body" > Added the scans to Unity and placed content around the monument in the virtual space </Type>
              </div>

              
              <div></div>
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
