import SectionDivider from "../../Components/SectionDivider"
import { theme } from "../pages/PageSection";


interface SectionProps{
    children:React.ReactNode;
    name:string;
    number:string;
    theme:theme;
    classname?:string
}

const Section = (props:SectionProps) =>{

    if(props.classname) debugger;

    return(
        <div className="w-full">
            <SectionDivider theme = {props.theme} name={props.name} number={props.number}/>

            <div className="mt-5 md:mt-8">
                {props.children}

            </div>

        </div>
    );
}

Section.displayName = "Section";

export default Section;