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
import { motion, AnimatePresence } from "framer-motion";


import HeroImage from '../../../public/assets/crashr/hero.png';
import CrashrLogo from '../../../public/assets/crashr/CrashrPrimaryLogo.png'
import CrashrMarketing from '../../../public/assets/crashr/CrashrMarketing.png'
import BombersLogo from '../../../public/assets/crashr/bombersPrimaryLogo.png'
import BombersMarketing from '../../../public/assets/crashr/BombersMarketing.png'
import MobileBlank from '../../../public/assets/crashr/MobileBlankGrid.png'
import MobileGrid from '../../../public/assets/crashr/MobileGrid.png'
import MobileDetailed from '../../../public/assets/crashr/MobileDeatiledGrid.png'
import DesktopBlank from '../../../public/assets/crashr/blankDesktop.png'
import DesktopDetailed from '../../../public/assets/crashr/24ptDesktop.png'
import Typography from '../../../public/assets/crashr/Typography.png'
import CrashrColor from '../../../public/assets/crashr/CrashrColor.png'
import BombersColor from '../../../public/assets/crashr/BombersColor.png'
import BrandLogoIconVariants from '../../../public/assets/crashr/LogoIconVariants.png'
import SpecialIcons from '../../../public/assets/crashr/SpecialIcons.png'
import ComponentsDisplaySlider from './ComponentsDisplaySlider'
import PasswordProtected from '../ComponentLibrary/commons/sections/PasswordSection'
import React, { useEffect, useState } from 'react'
import OtherWork from '../ComponentLibrary/commons/OtherWork/otherwork'
import GridContentSection from '../ComponentLibrary/Components/GridContentSection'






export default function Crashr() {
    let spacing = "my-20 md:my-32 p-5";






    return (
        <DefaultPage selected="work">
            <PageSection theme="dark">

                {/* Hero Section */}
                <>
                    <div className="max-w-screen-xl max-h-[65vh] rounded-b-lg md:rounded-b-2xl overflow-hidden">
                        <Image src={HeroImage} alt="Crashr x Bombers - Streamlining the design process" className="rounded-b-lg md:rounded-b-2xl" />
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
                                            <span className="italic font-serif font-normal">Unifying</span> Design and <span className="italic font-serif font-normal">Elevating</span> User Experience

                                        </ProjectSection.ShortDescription>
                                        <ProjectSection.FirstPara>
                                            Crashr is a rising star in the NFT marketplace scene, revolutionizing how people buy, sell, and collect NFTs. Committed to offering a user-friendly platform for digital artists, collectors, and enthusiasts, Crashr aspires to leave a significant mark in the ever-evolving NFT landscape.
                                        </ProjectSection.FirstPara>
                                        <ProjectSection.SecondPara>
                                            Their initial website launch, lacking user input, led to usability challenges and brand inconsistencies. They also had Bombers, an alternative community page with a contrasting aesthetic style.  My main goal was with harmonizing their design system and revamping both mobile and desktop sites for Crashr and Bombers while keeping their separate identities.
                                        </ProjectSection.SecondPara>
                                    </ProjectSection>
                                    {/* Overview and Solution */}
                                    <div className="my-20 md:my-32">
                                        <OverviewSection>
                                            <div className="flex flex-col md:flex-row md:gap-x-20 md:gap-y-0 gap-y-20 justify-center">
                                                <OverviewSection.Problem>
                                                    How might we harmonize the design systems of Crashr and Bombers, enhancing the usability and visual cohesiveness of both the mobile and desktop websites, while preserving their distinct brand identities?
                                                </OverviewSection.Problem>
                                                <OverviewSection.Outcome>
                                                    <OverviewSection.OutcomeParagraph>
                                                        We conceptualized and designed a design system and created a strong foundation for the Crashr/Bombers brand.


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
                                                Product Design Intern
                                            </InfoSection.Role>
                                            <InfoSection.Timeline>
                                                Jul 2023 - Aug 2023
                                            </InfoSection.Timeline>
                                        </InfoSection.Column>
                                        <InfoSection.Column>
                                            <InfoSection.Tools>
                                                Figma
                                            </InfoSection.Tools>
                                            <InfoSection.Team>
                                                Riri Tamura - Head of Design <br />
                                                Elsie Lee - Product Designer
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

                    <Section theme={"light"} name="Understanding The Brand’s Visual Identity" number="04">
                        <Section.ConstrainedWidth>

                            <div className="flex flex-col mt-10 gap-20">
                                <GridContentSection>
                                    <div className="w-full">
                                        <Type variant="h5Subheading">
                                            Understanding the <span className="italic font-serif font-normal">tone of the brand</span>
                                        </Type>

                                    </div>
                                    <div className="w-full">
                                        <Type variant="body">
                                            I had to work with 2 brands. Crashr and Bombers. Bombers was the fun little brother of the main brand focussing more on NFT's. I conducted semi structured interviews with the team to understand the tone they wanted Crashr and Bombers to exude.
                                        </Type>
                                    </div>

                                </GridContentSection>
                                <GridContentSection>
                                    <ListItem number="01" name="Professional">
                                        Given its aim to be a trusted NFT marketplace, professionalism is essential in all interactions and communications.
                                    </ListItem>
                                    <ListItem number="02" name="Innovative">
                                        As a tech-driven platform in the NFT space, Crashr should reflect a modern and innovative tone to stay current with industry trends.
                                    </ListItem>
                                    <ListItem number="03" name="Trustworthy">
                                        Users need to have confidence in Crashr&#x27;s security and reliability, so the tone should convey trustworthiness.
                                    </ListItem>
                                    <ListItem number="04" name="Serious">
                                        Balances professionalism, particularly with valuable digital assets.
                                    </ListItem>
                                    <ListItem number="05" name="Engaging">
                                        Keeps users interested and active, especially with NFT artworks and community engagement.
                                    </ListItem>

                                </GridContentSection>

                                <GridContentSection>
                                    <div className="w-full">
                                        <Type variant="h5Subheading">
                                            Understanding the <span className="italic font-serif font-normal">existing branding</span>
                                        </Type>

                                    </div>
                                    <div className="w-full">
                                        <Type variant="body">
                                            I starterd by looking at the logos and the marketing material used over X (twitter) and Discord to see if its giving the desired tone.
                                        </Type>
                                    </div>

                                </GridContentSection>
                                <GridContentSection>
                                    <div className="flex flex-col gap-5">
                                        <Image src={CrashrLogo} className='w-1/2 md:w-1/4' alt="Crashr Primary Logo" />

                                        <div>
                                            <ol>
                                                <li>
                                                    <Type variant="body">
                                                        The Crashr logo exudes movement and dynamism.
                                                    </Type>
                                                </li>
                                                <li>
                                                    <Type variant="body">
                                                        Red and black colors offer high-impact contrast: red grabs attention, black adds sophistication.
                                                    </Type>
                                                </li>
                                                <li>
                                                    <Type variant="body">
                                                        Minimalist design embodies Crashr&#x27;s simplicity and elegance, aligning with brand identity.
                                                    </Type>
                                                </li>
                                            </ol>



                                        </div>
                                    </div>
                                    <Image src={CrashrMarketing} alt="Crashr Marketing content from twitter" />
                                    <Image src={BombersMarketing} alt="Bombers Marketing content from twitter" />
                                    <div className="flex flex-col  gap-5">
                                        <Image src={BombersLogo} className='w-2/3 md:w-1/3' alt="Crashr Primary Logo" />

                                        <div>
                                            <ol>
                                                <li>
                                                    <Type variant="body">
                                                        Bombers logo is a contemporary and innovative design. It features a stylized, clean, and sleek visual representation.
                                                    </Type>
                                                </li>
                                                <li>
                                                    <Type variant="body">
                                                        The use of a light background puts the focus on the contents.
                                                    </Type>
                                                </li>
                                                <li>
                                                    <Type variant="body">
                                                        The use of white space and simple typography helps to create a clean and modern look.
                                                    </Type>
                                                </li>
                                                <li>
                                                    <Type variant="body">
                                                        The clean lines, simple typography, and bold colors create a stylish look.
                                                    </Type>
                                                </li>
                                            </ol>



                                        </div>
                                    </div>

                                </GridContentSection>
                            </div>



                        </Section.ConstrainedWidth>
                    </Section>

                    <Section theme={"light"} name="Setting up the base of the design system" number="05" classname="mt-20">

                        <Section.ConstrainedWidth>

                            <div className="flex flex-col mt-10 gap-20">
                                <GridContentSection>
                                    <div className="w-full">
                                        <Type variant="h5Subheading">
                                            Defining the  basics<span className="italic font-serif font-normal"> Grid System</span>
                                        </Type>

                                    </div>
                                    <div className="w-full">
                                        <Type variant="body">
                                            We started out by defining the grid system for desktop and mobile.
                                        </Type>
                                    </div>

                                </GridContentSection>
                            </div>
                        </Section.ConstrainedWidth>

                        <div className="flex flex-col gap-40 mt-20">

                            <div className="flex flex-col gap-5 px-10">

                                <div className="w-full justify-center px-20 flex flex-col md:grid md:grid-cols-3 gap-6 items-start text-center">
                                    <div className="flex flex-col gap-3 justify-center">
                                        <Image src={MobileBlank} alt="Blank Mobile Grid" />
                                        <Type variant="h5">A 4 column grid layout</Type>
                                    </div>
                                    <div className="flex flex-col gap-3 justify-center">
                                        <Image src={MobileGrid} alt="Blank Mobile Grid" />
                                        <Type variant="h5">Used when designing large pages ie. homepages, landing pages, etc.</Type>
                                    </div>
                                    <div className="flex flex-col gap-3 justify-center">
                                        <Image src={MobileDetailed} alt="Blank Mobile Grid" />
                                        <Type variant="h5">Used when designing more detailed pages with smaller items ie. lists</Type>
                                    </div>

                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="w-full justify-center px-20 flex flex-col md:grid md:grid-cols-6 gap-6 items-center ">

                                    <Image src={DesktopBlank} className="col-span-4" alt="Desktop Grid" />
                                    <Type variant="h5" className="col-span-2">Use when you’re designing large pages ie. homepages, landing pages, etc.</Type>
                                    <Type variant="h5" className="col-span-2">Use when you’re designing more detailed pages with smaller items ie. lists</Type>
                                    <Image src={DesktopDetailed} className="col-span-4" alt="Desktop Grid for detailed pages" />

                                </div>
                            </div>
                        </div>


                        <Section.ConstrainedWidth>

                            <div className="mt-20 flex flex-col gap-20">
                                <GridContentSection>
                                    <div className="w-full">
                                        <Type variant="h5Subheading">
                                            <span className="italic font-serif font-normal">Typography</span>
                                        </Type>

                                    </div>
                                    <div className="w-full">
                                        <Type variant="body">
                                            Keeping the brand identity in mind, we needed a type that was modern and futuristic.
                                            We decided to go with Inconsolata for heading font and Open Sans for body.
                                        </Type>
                                    </div>

                                </GridContentSection>

                                <GridContentSection>
                                    <div className="w-full">
                                        <ListItem name="Inconsolata">
                                            It’s a monospaced typeface that gives a “techy” feeling <br />
                                            It has 8 weights and also variable version, leaving room for changes in the future<br />
                                            It’s open source.<br />
                                            It’s very readable
                                        </ListItem>

                                    </div>
                                    <div className="w-full">
                                        <ListItem name="Open Sans">
                                            It has clean lines and well balanced proportions <br />
                                            It has a friendly but professional feel <br />
                                            It’s open source.<br />
                                            It’s very readable
                                        </ListItem>
                                    </div>

                                </GridContentSection>

                            </div>
                        </Section.ConstrainedWidth>


                        <Image src={Typography} className="px-10 mt-20" alt="Text Styles we created for Crashr" />

                        <Section.ConstrainedWidth>
                            <div className="mt-20 flex flex-col gap-20">
                                <GridContentSection>
                                    <div className="w-full">
                                        <Type variant="h5Subheading">
                                            <span className="italic font-serif font-normal">Color</span>
                                        </Type>

                                    </div>
                                    <div className="w-full">
                                        <Type variant="body">
                                            We wanted to avoid using the Crashr Red from the logo as much as possible. We decided to build a color pallet around the red and use it sparingly in background gradients and only in places extremely necessary..

                                            For Bombers we used a contrasting color scheme. We avoided the reds completely and used the secondary color from Crashr as the Primary color.
                                        </Type>
                                    </div>

                                </GridContentSection>



                            </div>
                        </Section.ConstrainedWidth>
                        <GridContentSection classname="px-10 mt-20">
                            <div className="flex flex-col gap-4">
                                <Type variant="h5">
                                    Crashr
                                </Type>
                                <Image src={CrashrColor} alt="Text Styles we created for Crashr" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <Type variant="h5">
                                    Bombers
                                </Type>
                                <Image src={BombersColor} alt="Text Styles we created for Crashr" />
                            </div>

                        </GridContentSection>


                        <Section.ConstrainedWidth>



                        </Section.ConstrainedWidth>
                    </Section>
                    <Section theme={"light"} name="Building the Icons" number="06">
                        <Section.ConstrainedWidth>

                            <div className="mt-20 flex flex-col gap-20">
                                <GridContentSection>
                                    <div className="w-full">
                                        <Type variant="h5Subheading">
                                            <span className="italic font-serif font-normal">Iconography</span>
                                        </Type>

                                    </div>
                                    <div className="w-full">
                                        <Type variant="body">
                                            We decided to use HeroIcons as our icon library due to its large number of variant options.We also created specific icons that were needed.                                        </Type>
                                    </div>

                                </GridContentSection>




                            </div>

                        </Section.ConstrainedWidth>

                        <GridContentSection classname="mt-20 px-10">
                            <div className="flex flex-col gap-6">
                                <Type variant="h5">Brand Logo icon Variants</Type>
                                <Image src={BrandLogoIconVariants} alt="Brand Logo Variants for Crashr and Bombers" />
                            </div>
                            <div className="flex flex-col gap-6">
                                <Type variant="h5">Special Icons</Type>
                                <Image src={SpecialIcons} alt="Text Styles we created for Crashr" />
                            </div>
                        </GridContentSection>





                    </Section>
                    <Section theme={"light"} name="Creating the Components" number="07">
                        <Section.ConstrainedWidth>
                            <div className="flex flex-col mt-10 gap-20">
                                <GridContentSection>
                                    <div className="w-full">
                                        <Type variant="h5Subheading">
                                            Building the <span className="italic font-serif font-normal">component library</span>
                                        </Type>

                                    </div>
                                    <div className="w-full">
                                        <Type variant="body">
                                            We started out by creating the screens. We created components and modified them as and when required.
                                        </Type>
                                    </div>

                                </GridContentSection>
                                <div className="flex w-full justify-center">
                                    <div className="w-full  ">
                                        <ComponentsDisplaySlider />
                                    </div>

                                </div>
                            </div>
                        </Section.ConstrainedWidth>


                    </Section>

                </ProcessSection>
            </PageSection>

            <PageSection theme="dark">
                <ResultSection number="08">
                    <div className="flex flex-col mt-10 gap-20">

                        <GridContentSection>
                            <div className="w-full">
                                <Type variant="h5Subheading">
                                    Balancing brand <span className="italic font-serif font-normal">identity</span> with design <span className="italic font-serif font-normal">consistency</span>
                                </Type>

                            </div>
                            <div className="w-full">
                                <Type variant="body">
                                    The successful development of a unified design system for Crashr and Bombers NFT marketplaces not only improved the overall user experience but also demonstrated the effectiveness of creating a cohesive design system for brands with contrasting visual identities. The project enabled efficient design and development processes while respecting the uniqueness of each brand.
                                </Type>
                            </div>

                        </GridContentSection>
                        <GridContentSection>
                            <ListItem number="01" name="Embrace Flexibility in Design Systems">
                                I&#x27;ve learned that a successful design system should strike a balance between consistency and brand individuality. To accommodate contrasting brand identities like Crashr and Bombers, a design system must be flexible, allowing each brand to express its unique visual elements while maintaining a cohesive structure.
                            </ListItem>
                            <ListItem number="02" name="Collaboration Drives Success">
                                Throughout this project, I realized the immense value of collaboration. Effective communication and collaboration between design, development, and marketing teams were vital to ensure the design system catered to the distinct needs of both brands, resulting in a harmonious yet unique user experience.
                            </ListItem>

                        </GridContentSection>

                    </div>


                </ResultSection>


            </PageSection>
            <PageSection theme="dark"  >
                <OtherWork currentProject="crashr" />
            </PageSection>

        </DefaultPage>
    )
}
