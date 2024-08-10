import { Children } from "react";
import { Type } from "../../Typography/Type";
import Section from "./section";

interface OverviewSectionProps{
  children: React.ReactNode

}


const OverviewSection = (props:OverviewSectionProps) =>{
    return(
        <Section theme="dark" name="Overview" number = "03"  >
          {props.children}
        </Section>
    );
}

OverviewSection.Problem = (props:OverviewSectionProps) => {

  return(
    <div className="w-full md:w-1/2 flex flex-col ">
      <span className="font-sans font-semibold text-md md:text-lg">
      Problem
    </span>

      <Type variant="body" className="max-w-prose">
      {props.children}
      </Type>

    </div>
  );

}

OverviewSection.Outcome = (props:OverviewSectionProps) => {

  return(
    <div className="w-full md:w-1/2 flex flex-col ">
      <span className="font-sans font-semibold text-md md:text-lg">
      Outcome
    </span>
      
      {props.children}
      

    </div>
  );

}

OverviewSection.Solution = (props:OverviewSectionProps) =>{
  return(
    <div className=" w-full justify-self-start flex-col mt-20 gap-y-10 md:gap-y-20">
      <Type variant="h4">
        Solution
      </Type>
      <div>
      {props.children}
      </div>

    </div>
  );
}

OverviewSection.OutcomeParagraph = (props:OverviewSectionProps) =>{
  return(
  
    <Type variant ="body">
      {props.children}
    </Type>
  
  );
}

OverviewSection.displayName="OverviewSection";

export default OverviewSection;