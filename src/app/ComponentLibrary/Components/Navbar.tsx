import { NavbarButton } from "./Button/NavbarButton"


interface NavbarProps{

}

const Navbar = () =>{

    return(
        <div className="w-full bg-[#E7E7E7] p-2  gap-2  flex flex-row justify-center">

           <NavbarButton intent={"selected"}>Work</NavbarButton>
           <NavbarButton>About</NavbarButton>
           <NavbarButton>Resume</NavbarButton>
        </div>
    );

}

export default Navbar;