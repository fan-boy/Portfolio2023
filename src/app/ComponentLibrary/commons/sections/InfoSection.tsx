import { propagateServerField } from "next/dist/server/lib/render-server";
import Section from "./section";


interface InfoSectionProps {
  children: React.ReactNode
}



const InfoSection = (props: InfoSectionProps) => {

  return (
    <Section name="Info" number="02" >
      <div className="flex gap-x-8 md:gap-x-0 flex-col gap-y-8">
        {props.children}
      </div>
    </Section>
  );
}
InfoSection.Role = (props: InfoSectionProps) => (
  <div className="flex flex-col w-1/2 md:w-full">
    <span className="font-serif text-md md:text-2xl">
      Role
    </span>
    <span className="font-sans text-md md:text-xl">
      {props.children}
    </span>
  </div>
)
InfoSection.Timeline = (props: InfoSectionProps) => (
  <div className="flex flex-col w-1/2 md:2-full" >
    <span className="font-serif text-md md:text-2xl">
      Timeline
    </span>
    <span className="font-sans text-md md:text-xl">
      {props.children}
    </span>
  </div>
)
InfoSection.Tools = (props: InfoSectionProps) => (
  <div className="flex flex-col w-1/2 md:w-full">
    <span className="font-serif text-md md:text-2xl">
      Tools
    </span>
    <span className="font-sans text-md md:text-xl">
      {props.children}
    </span>
  </div>
)
InfoSection.Team = (props: InfoSectionProps) => (
  <div className="flex flex-col w-1/2 md:w-full" >
    <span className="font-serif text-md md:text-2xl">
      Team
    </span>
    <span className="font-sans text-md md:text-xl">
      {props.children}
    </span>
  </div>
)

InfoSection.Column = (props: InfoSectionProps) => (
  <div className="flex flex-row md:flex-col gap-y-8">
    {props.children}
  </div>
)

InfoSection.displayName = 'InfoSection';

export default InfoSection;