import React from "react";
import SectionDivider from "../../Components/SectionDivider"
import Section from "./section";


interface SectionProps{
    children:React.ReactNode;
}

const ResultSection = (props:SectionProps) =>{

    return(
        <div className = "w-full my-20 p-5 flex flex-col gap-20">
       
       <Section theme="dark" name="Results" number = "08" >
          {props.children}
        </Section>
       
        </div>
    );
}

ResultSection.displayName = "ResultSection";

export default ResultSection;