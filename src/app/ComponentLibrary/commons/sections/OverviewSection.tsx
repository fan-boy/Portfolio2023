import { Children } from "react";
import { Type } from "../../Typography/Type";
import Section from "./section";

interface OverviewSectionProps{
  children: React.ReactNode

}


const OverviewSection = (props:OverviewSectionProps) =>{
    return(
        <Section name="Overview" number = "03" >
          {props.children}
        </Section>
    );
}

OverviewSection.Problem = (props:OverviewSectionProps) => {

  return(
    <div className="w-full md:w-1/2 flex flex-col gap-y-6 md:gap-y-8">
      <Type variant="h4">
        The Problem
      </Type>

      <Type variant="emphasized-body" className="max-w-prose">
      {props.children}
      </Type>

    </div>
  );

}

OverviewSection.Outcome = (props:OverviewSectionProps) => {

  return(
    <div className="w-full md:w-1/2 flex flex-col gap-y-6 md:gap-y-8">
      <Type variant="h4">
        The Outcome
      </Type>
      
      {props.children}
      

    </div>
  );

}

OverviewSection.Solution = (props:OverviewSectionProps) =>{
  return(
    <div className="w-full flex flex-col mt-20">
      <Type variant="h4">
        The Solution
      </Type>
      
      {props.children}
      

    </div>
  );
}

OverviewSection.OutcomeParagraph = (props:OverviewSectionProps) =>{
  return(
    <Type variant = "body">
      {props.children}
    </Type>
  );
}

OverviewSection.displayName="OverviewSection";

export default OverviewSection;