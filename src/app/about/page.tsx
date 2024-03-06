import Image from 'next/image'
import React from 'react'
import DefaultPage from '../ComponentLibrary/commons/pages/DefaultPage'
import PageSection from '../ComponentLibrary/commons/pages/PageSection'
import Me from '../../../public/assets/about/me.png';
import { Type, Variants } from '../ComponentLibrary/Typography/Type'
import Section from '../ComponentLibrary/commons/sections/section'
import Gallery from './photoalbum'


export default function Home() {
  return (
    <DefaultPage selected="about">

      <PageSection theme="dark" >
        <div className="mt-20">
          <div className="w-full md:flex md:flex-row ">
            <div className="w-full md:w-5/12 relative">

             
              
                <Image
                  src={Me} alt="Me in the fall weather of Boston."
                  fill={true}
                  objectFit='contain'
                />
              
              
            </div>
            <div className="w-full md:w-7/12 p-5">
              <Section name="About me" number="" theme="dark">
                <div className="flex flex-col gap-10">
                  <div className="flex flex-col gap-2">
                    <Type variant="h2">
                      Hello! I&#x27;m Aaditya but you can call me Adi
                    </Type>
                    <Type variant="body">
                      (aa-dit-yaa)
                    </Type>
                  </div>
                  <Type variant="emphasized-body">
                  I am a Product Designer and Fullstack web developer based in Washington DC, USA.
                  </Type>
                  <Type variant="body">
                  My professional journey spans diverse experiences, including shaping the visual identity at Crashr and delving into production-scale product development at Accenture. My time at Ingram Micro emphasized the importance of User Experience design, sparking my passion for understanding user behavior. Wearing dual hats as a User Experience designer and a full-stack web developer, I&#x27;m dedicated to creating exceptional digital experiences.
                  </Type>
                  <Type variant="body">
                  Beyond the screen, I find joy in running, experimenting in the kitchen, gaming, exploring new destinations, and staying updated on technological advancements. Currenly obsessed with film photography. The mountains, with their breathtaking sunrises and sunsets, hold a special place in my heart.
                  </Type>
                  <Type variant="body">
                  I believe in the power of design to address complex human challenges. Bridging the gap between design and development, I aspire to create visually appealing and functionally robust solutions. 
                  </Type>
                  <Type variant="body">
                  Beyond pixels and code, I envision becoming a compassionate and approachable design leader and mentor, fostering creativity and innovation. 
                  </Type>
                </div>
              </Section>
            </div>

          </div>
          <Section name="Some of my 35mm Film Pictures" number="" theme="dark" classname="mt-20">

          </Section>
        </div>
      </PageSection>
      <PageSection theme="dark" isFullWidth>
                {/* Hero Section */}
                <div className="w-full ">
                
                    <Gallery/>
                </div>
            </PageSection>

    </DefaultPage>
  )
}
