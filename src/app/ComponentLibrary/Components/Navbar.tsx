import { propagateServerField } from "next/dist/server/lib/render-server";
import { ButtonOrLink } from "./Button/LinkOrButton";
import { NavbarButton } from "./Button/NavbarButton"


interface NavbarProps{
    selected:string
}

const Navbar = (props:NavbarProps) =>{

    return(
        <div className="w-full bg-backgroundDark text-fontDark flex justify-center">

            <div className="w-full lg:max-w-8xl p-2   items-center flex justify-between  ">

            <ButtonOrLink className="hidden sm:block font-sans font-regular ml-4" href="/">
            <span>
                Aaditya Shete
            </span>
            </ButtonOrLink>

            <div className=" w-full sm:w-min flex  justify-center sm:items-right justify-right">

            <span className="flex  flex-row gap-2 ">
           <NavbarButton intent={props.selected === "work"?"selected":"default"} href="/">Work</NavbarButton>
           <NavbarButton intent={props.selected === "about"?"selected":"default"} href="/about">About</NavbarButton>
           <NavbarButton intent={props.selected === "resume"?"selected":"default"} href="/resume">Resume</NavbarButton>
           </span>
           </div>
           </div>
        </div>
    );

}

export default Navbar;