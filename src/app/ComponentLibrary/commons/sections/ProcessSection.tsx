import React from "react";
import SectionDivider from "../../Components/SectionDivider"
import Section from "./section";


interface SectionProps{
    children:React.ReactNode;
}

const ProcessSection = (props:SectionProps) =>{

    return(
        <div className = "w-full my-20 p-5 flex flex-col gap-20">
       
            {props.children}
       
        </div>
    );
}

ProcessSection.displayName = "ProcessSection";

export default ProcessSection;