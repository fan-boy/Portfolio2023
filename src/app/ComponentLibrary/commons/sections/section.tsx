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

    let classname= "";

    if(props.classname && props.classname.length>0) {
        classname = props.classname;
        
    }

    return(
        <div className={`w-full ${classname}`}>
            <SectionDivider theme = {props.theme} name={props.name} number={props.number}/>

            <div className="mt-5 md:mt-8">
                {props.children}

            </div>

        </div>
    );
}

Section.displayName = "Section";

export default Section;