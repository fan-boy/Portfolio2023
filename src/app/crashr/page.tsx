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
import { useState } from 'react'






export default function Crashr() {
    let spacing = "my-20 md:my-32 p-5";

    const [isPasswordProvided, setIsPasswordProvided] = useState(true);

    const isCorrectPassowrd = () =>{
        setIsPasswordProvided(true);
    }
    return (
        <DefaultPage selected="work">
            <PageSection theme="dark" isFullWidth>
                {/* Hero Section */}
                <>
                    <div className="max-h-[75vh]">
                        <Image src={HeroImage} alt="Crashr x Bombers - Streamlining the design process" />
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
                                        <span className="italic font-serif font-normal">Unifying</span> Design and <span className="italic font-serif font-normal">Elevating</span> User Experience

                                    </ProjectSection.IndentedLine>
                                    <ProjectSection.FirstPara>
                                        Crashr is a rising star in the NFT marketplace scene, revolutionizing how people buy, sell, and collect NFTs. Committed to offering a user-friendly platform for digital artists, collectors, and enthusiasts, Crashr aspires to leave a significant mark in the ever-evolving NFT landscape.
                                    </ProjectSection.FirstPara>
                                    <ProjectSection.SecondPara>
                                        Their initial website launch, lacking user input, led to usability challenges and brand inconsistencies. They also had Bombers, an alternative community page with a contrasting aesthetic style.  My main goal was with harmonizing their design system and revamping both mobile and desktop sites for Crashr and Bombers while keeping their separate identities.
                                    </ProjectSection.SecondPara>
                                </ProjectSection>

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


                    {/* Overview and Solution */}
                    <div className="my-20 md:my-32 p-5">
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

            </PageSection>
           
<AnimatePresence>
{!isPasswordProvided &&
<motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
            <PageSection theme="light">
               
            <PasswordProtected isCorrectPassordProvided={isCorrectPassowrd}/>
           
            </PageSection>
            </motion.div>
}
            </AnimatePresence>
            <AnimatePresence>
            {isPasswordProvided &&
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            >
            <PageSection theme="light">

               
                {/* Process */}
                <ProcessSection>

                    <Section theme={"light"} name="Understanding The Brand’s Visual Identity" number="04">
                        <div className="p-5">
                            <Type variant="body">
                                Crashr - The ultimate NFT platform that’s more than just trading.
                            </Type>
                            <Type variant="body">
                                Bombers - The fun little brother focusing on NFT&#x27;s.
                            </Type>
                        </div>
                        <div className="w-full mt-12">
                            <div className="w-full mt-12 md:w-2/3">
                                <Type variant="h5">
                                    Understanding the Tone
                                </Type>
                            </div>
                            <div className="flex relative flex-col md:grid md:grid-cols-3 gap-10 p-10 md:gap-20 md:p-20">
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

                            </div>
                        </div>
                        <div className="w-full mt-12">
                            <div className="w-full mt-12 md:w-2/3">
                                <Type variant="h5">
                                    Understanding the Branding
                                </Type>
                            </div>
                            <div className="w-full mt-12 md:w-2/3">
                                <Type variant="body">
                                    Looking at the logos and the marketing material used over X (twitter) and Discord.
                                </Type>
                            </div>
                            <div className="flex relative flex-col  md:grid md:grid-cols-12 gap-y-20 gap-x-10 p-10 ">
                                <div className="flex flex-col md:col-span-5 gap-5">
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
                                <Image src={CrashrMarketing} className="md:col-span-7" alt="Crashr Marketing content from twitter" />
                                <Image src={BombersMarketing} className="md:col-span-7" alt="Bombers Marketing content from twitter" />
                                <div className="flex flex-col md:col-span-5 gap-5">
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
                            </div>
                        </div>

                    </Section>

                    <Section theme={"light"} name="Setting up the base of the design system" number="05" classname="mt-20">


                        <div className="mt-8 w-full  flex flex-col gap-16">
                            <div className="flex flex-col gap-8">
                                <Type variant="h5">
                                    Defining the grid system
                                </Type>
                                <div className="flex flex-col gap-5">
                                    <Type variant="body">
                                        Mobile-
                                    </Type>
                                    <div className="w-full justify-center px-20 flex flex-col md:grid md:grid-cols-3 gap-6 items-start text-center">
                                        <div className="flex flex-col gap-3 justify-center">
                                            <Image src={MobileBlank} alt="Blank Mobile Grid" />
                                            <Type variant="body">A 4 column grid layout</Type>
                                        </div>
                                        <div className="flex flex-col gap-3 justify-center">
                                            <Image src={MobileGrid} alt="Blank Mobile Grid" />
                                            <Type variant="body">Used when designing large pages ie. homepages, landing pages, etc.</Type>
                                        </div>
                                        <div className="flex flex-col gap-3 justify-center">
                                            <Image src={MobileDetailed} alt="Blank Mobile Grid" />
                                            <Type variant="body">Used when designing more detailed pages with smaller items ie. lists</Type>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <Type variant="body">
                                        Desktop-
                                    </Type>
                                    <div className="w-full justify-center px-20 flex flex-col md:grid md:grid-cols-6 gap-6 items-center ">

                                        <Image src={DesktopBlank} className="col-span-4" alt="Desktop Grid" />
                                        <Type variant="body" className="col-span-2">Use when you’re designing large pages ie. homepages, landing pages, etc.</Type>
                                        <Type variant="body" className="col-span-2">Use when you’re designing more detailed pages with smaller items ie. lists</Type>
                                        <Image src={DesktopDetailed} className="col-span-4" alt="Desktop Grid for detailed pages" />

                                    </div>
                                </div>
                            </div>

                            <div className="w-full  flex flex-col gap-8">
                                <Type variant="h5">
                                    Typography
                                </Type>
                                <Type variant="body" className="md:w-2/3">
                                    Keeping the brand identity in mind, we needed a type that was modern and futuristic.
                                    We decided to go with Inconsolata for heading font because of multiple reasons-
                                    
                                    
                                </Type>
                                <Type variant="ul" className="list-disc p-5">
                                <li>It’s a monospaced typeface that gives a “techy” feeling </li>
                                        <li>It’s open source.</li>
                                        <li>It has 8 weights and also variable version, leaving room for changes in the future</li>
                                        <li>It’s very readable</li>
                                </Type>
                                <Type variant="body">
                                For body copy we decided to go with Open Sans. We wanted something Neutral. Open Sans has a friendly but professional feel because of its clean lines and well balanced proportions.
                                </Type>
                                <Image src={Typography} alt="Text Styles we created for Crashr" />
                            </div>
                            <div className="w-full  flex flex-col gap-8">
                                <Type variant="h5">
                                    Color
                                </Type>
                                <Type variant="body" className="md:w-2/3">
                                    We wanted to avoid using the Crashr Red from the logo as much as possible. We decided to build a color pallet around the red and use it sparingly in background gradients and only in places extremely necessary..
                                </Type>
                                <Type variant="body" className="md:w-2/3">
                                    For Bombers we used a contrasting color scheme. We avoided the reds completely and used the secondary color from Crashr as the Primary color.
                                </Type>
                                <div className="flex flex-col w-full md:grid md:grid-cols-2 gap-8 items-start">
                                    <div className="flex flex-col gap-6">
                                        <Type variant="body">Crashr</Type>
                                        <Image src={CrashrColor} alt="Text Styles we created for Crashr" />
                                    </div>
                                    <div className="flex flex-col gap-6">
                                        <Type variant="body">Bombers</Type>
                                        <Image src={BombersColor} alt="Text Styles we created for Crashr" />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </Section>
                    <Section theme={"light"} name="Building the Icons" number="06">
                        <div className="w-full mt-8 flex flex-col gap-8">
                            <Type variant="h5">
                                Iconography
                            </Type>
                            <Type variant="body" className="md:w-2/3">
                            We decided to use HeroIcons as our icon library due to its large number of variant options.
                            </Type>
                            <Type variant="body" className="md:w-2/3">
                            We also created specific icons that were needed
                            </Type>
                            <div className="flex flex-col w-full md:grid md:grid-cols-2 gap-8 items-start">
                                <div className="flex flex-col gap-6">
                                    <Type variant="body">Brand Logo icon Variants</Type>
                                    <Image src={BrandLogoIconVariants} alt="Brand Logo Variants for Crashr and Bombers" />
                                </div>
                                <div className="flex flex-col gap-6">
                                    <Type variant="body">Special Icons</Type>
                                    <Image src={SpecialIcons} alt="Text Styles we created for Crashr" />
                                </div>
                            </div>
                        </div>
                        

                      
                    </Section>
                    <Section theme={"light"} name="Creating the Components" number="07">
                        <div className=" flex flex-col md:w-2/3">
                            <Type variant="body">
                                We started out by creating the screens. We created components and modified them as and when required.
                            </Type>
                            <Type variant="body">
                                First step was defining the rules. After which we started creating components.
                            </Type>
                        </div>
                        
                        <div className="py-10 md:p-20 flex w-full justify-center">
                            <div className="w-full md:w-5/6 ">
                            <ComponentsDisplaySlider />
                            </div>

                        </div>
                    </Section>

                </ProcessSection>
            </PageSection>
            </motion.div>
}
</AnimatePresence>
           <PageSection theme="dark">
                <ResultSection>
                <Type variant="emphasized-body">
                            Balancing brand <span className="italic font-serif font-normal">identity</span> with design <span className="italic font-serif font-normal">consistency</span>
                        </Type>
                    <div className="mt-10 md:w-2/3">
                        <Type variant="body">
                        The successful development of a unified design system for Crashr and Bombers NFT marketplaces not only improved the overall user experience but also demonstrated the effectiveness of creating a cohesive design system for brands with contrasting visual identities. The project enabled efficient design and development processes while respecting the uniqueness of each brand.
                        </Type>
                    </div>
                    <div className="mt-10">
                        

                        <Type variant="h5" className="mt-10">
                           My key learnings - 
                        </Type>


                        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 p-10 md:gap-20 md:p-20">
                            <ListItem number="01" name="Embrace Flexibility in Design Systems">
                            I&#x27;ve learned that a successful design system should strike a balance between consistency and brand individuality. To accommodate contrasting brand identities like Crashr and Bombers, a design system must be flexible, allowing each brand to express its unique visual elements while maintaining a cohesive structure.
                            </ListItem>
                            <ListItem number="02" name="Collaboration Drives Success">
                            Throughout this project, I realized the immense value of collaboration. Effective communication and collaboration between design, development, and marketing teams were vital to ensure the design system catered to the distinct needs of both brands, resulting in a harmonious yet unique user experience.
                            </ListItem>

                        </div>

                       

                    </div>
                </ResultSection>


            </PageSection>

        </DefaultPage>
    )
}
