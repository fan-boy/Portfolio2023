import { Children } from "react";
import { Type } from "../../Typography/Type";
import Section from "./section";

interface OverviewSectionProps{
  children: React.ReactNode

}


const SolutionSection = (props:OverviewSectionProps) =>{
    return(
        <>
          {props.children}
        </>
    );
}



export default SolutionSection;