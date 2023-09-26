import { NavbarButton } from "./Button/NavbarButton"


interface NavbarProps{

}

const Navbar = () =>{

    return(
        <div className="w-full bg-[#E7E7E7] p-2   items-center sm:grid sm:grid-cols-3 ">

            <span className="hidden sm:block font-sans text-fontLight ml-4">
            <span>
                Aaditya Shete
            </span>
            <span className="font-thin ml-2">
                Portfolio
            </span>
            </span>

            <div className=" flex items-center justify-center">

            <span className="flex  flex-row gap-2 justify-self-center">
           <NavbarButton intent={"selected"}>Work</NavbarButton>
           <NavbarButton>About</NavbarButton>
           <NavbarButton>Resume</NavbarButton>
           </span>
           </div>
           
        </div>
    );

}

export default Navbar;