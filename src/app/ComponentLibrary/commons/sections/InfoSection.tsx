import Section from "./section";




const InfoSection = () =>{

    return(
        <Section name="Info" number = "02" >
        <div className="flex gap-x-8 md:gap-x-0 flex-col gap-y-8">
              <div className="flex flex-row md:flex-col gap-y-8">
              <div className="flex flex-col w-1/2 md:w-full">
                <span className="font-serif text-md md:text-2xl">
                  Role
                </span>
                <span className="font-sans text-md md:text-xl">
                  Lead Designer and Developer
                </span>
              </div>
              <div className="flex flex-col w-1/2 md:2-full" >
                <span className="font-serif text-md md:text-2xl">
                  Timeline
                </span>
                <span className="font-sans text-md md:text-xl">
                  Jul 2021 - Aug 2022
                </span>
              </div>
              </div>
              <div className="flex flex-row md:flex-col gap-y-8">
              <div className="flex flex-col w-1/2 md:w-full">
                <span className="font-serif text-md md:text-2xl">
                  Tools
                </span>
                <span className="font-sans text-md md:text-xl">
                  Adobe XD, Figma <br />
                  React JS <br />
                  NodeJS
                </span>

              </div>
              <div className="flex flex-col w-1/2 md:w-full">
                <span className="font-serif text-md md:text-2xl">
                  Team
                </span>
                <span className="font-sans text-md md:text-xl">
                  Adrian Pinter - CEO
                </span>
              </div>
              </div>
            </div>
        </Section>
    );
}

export default InfoSection;