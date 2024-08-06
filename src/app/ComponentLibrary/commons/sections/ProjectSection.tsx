import { propagateServerField } from "next/dist/server/lib/render-server";
import React from "react";
import { Type } from "../../Typography/Type";
import InfoSection from "./InfoSection";
import Section from "./section";


interface ProjectSectionProps {
  children: React.ReactNode
}



const ProjectSection = (props: ProjectSectionProps) => {

  return (
    <Section theme="dark" name="Project" number="01" >
        {props.children}
    </Section>
  );
}
ProjectSection.ShortDescription = (props: ProjectSectionProps) => (
    <div className="">
    <Type variant="emphasized-body">
       {props.children} 
    </Type>
  </div>
)
ProjectSection.FirstPara = (props: ProjectSectionProps) => (
    <div className="mt-3 md:pr-20">
                  <Type variant="body">
                    {props.children}
                  </Type>
                </div>
)
ProjectSection.SecondPara = (props: ProjectSectionProps) => (
    <div className="mt-1 md:pr-20">
                  <Type variant="body">
                    {props.children}
                  </Type>
                </div>
)
ProjectSection.ThirdPara = (props: ProjectSectionProps) => (
  <div className="mt-1 md:pr-20">
  <Type variant="body">
     {props.children} 
  </Type>
</div>
)


ProjectSection.displayName = 'ProjectSection';

export default ProjectSection;