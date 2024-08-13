import { propagateServerField } from "next/dist/server/lib/render-server";
import { ButtonOrLink } from "./Button/LinkOrButton";
import { NavbarButton } from "./Button/NavbarButton"


interface GridContentSectionProps{
    children: React.ReactNode
    classname?: string
}

const GridContentSection = (props:GridContentSectionProps) =>{

    return(
        <div className={`w-full flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-20 ${props.classname}`}>
            {props.children}
            
        </div>
    );

}

export default GridContentSection;