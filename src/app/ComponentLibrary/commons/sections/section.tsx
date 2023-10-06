import SectionDivider from "../../Components/SectionDivider"


interface SectionProps{
    children:React.ReactNode;
    name:string;
    number:string;
}

const Section = (props:SectionProps) =>{

    return(
        <div className="w-full">
            <SectionDivider name={props.name} number={props.number}/>

            <div className="mt-5 md:mt-8">
                {props.children}

            </div>

        </div>
    );
}

export default Section;