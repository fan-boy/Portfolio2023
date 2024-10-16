import SectionDivider from "../../Components/SectionDivider"
import { theme } from "../pages/PageSection";


interface SectionProps{
    children:React.ReactNode;
    name:string;
    number:string;
    theme:theme;
    classname?:string
    dontCenter?:boolean
}

interface SubSectionProps{
    children:React.ReactNode;
}

const Section = (props:SectionProps) =>{

    let classname= "";

    if(props.classname && props.classname.length>0) {
        classname = props.classname;
        
    }

    return(
        <div className={`w-full  flex flex-col ${props.dontCenter?"items-start":"items-center"} ${classname}`}>
            
             <SectionDivider theme = {props.theme} name={props.name} number={props.number}/>
            
            <div className={`mt-5 lg:overflow-x-hidden lg:max-w-8xl md:mt-8 flex flex-col ${props.dontCenter?"items-start":"items-center"} justify-center`}>
                {props.children}

            </div>

        </div>
    );
}

Section.ConstrainedWidth = (props:SubSectionProps)=>(
    <div className="flex  max-w-xs sm:max-w-3xl md:max-w-4xl justify-center ">
        <div className="flex flex-col w-full">
        {props.children}
        </div>
        </div>
);


Section.displayName = "Section";

export default Section;