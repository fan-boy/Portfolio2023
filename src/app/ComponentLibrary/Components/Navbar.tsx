import { propagateServerField } from "next/dist/server/lib/render-server";
import { ButtonOrLink } from "./Button/LinkOrButton";
import { NavbarButton } from "./Button/NavbarButton"


interface NavbarProps{
    selected:string
}

const Navbar = (props:NavbarProps) =>{

    return(
        <div className="w-full bg-[#E7E7E7] p-2   items-center sm:grid sm:grid-cols-3 ">

            <ButtonOrLink className="hidden sm:block font-sans text-fontLight ml-4" href="/">
            <span>
                Aaditya Shete
            </span>
            <span className="font-thin ml-2">
                Portfolio
            </span>
            </ButtonOrLink>

            <div className=" flex items-center justify-center">

            <span className="flex  flex-row gap-2 justify-self-center">
           <NavbarButton intent={props.selected === "work"?"selected":"default"} href="/">Work</NavbarButton>
           <NavbarButton intent={props.selected === "about"?"selected":"default"} href="/about">About</NavbarButton>
           <NavbarButton intent={props.selected === "resume"?"selected":"default"} href="/resume">Resume</NavbarButton>
           </span>
           </div>
           
        </div>
    );

}

export default Navbar;