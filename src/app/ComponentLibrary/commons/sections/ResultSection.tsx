import React from "react";
import SectionDivider from "../../Components/SectionDivider"
import Section from "./section";


interface SectionProps{
    children:React.ReactNode;
    number:string
}

const ResultSection = (props:SectionProps) =>{

    return(
        <div className = "w-full my-20 p-5 flex flex-col gap-20">
       
       <Section theme="dark" name="Learnings" number = {props.number} >
           <Section.ConstrainedWidth>
          {props.children}
          </Section.ConstrainedWidth>
        </Section>
       
        </div>
    );
}

ResultSection.displayName = "ResultSection";

export default ResultSection;