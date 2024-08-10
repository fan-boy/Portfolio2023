import React from "react";
import { theme } from "../commons/pages/PageSection";
import { Type } from "../Typography/Type";

interface SectionDividerProps {
    name: string,
    number: string,
    theme:theme
}

const SectionDivider = (props: SectionDividerProps) => {

    return (
        <div className="w-full max-w-xs sm:max-w-3xl md:max-w-4xl ">
            <div className="flex flex-row w-full justify-between">
                <Type variant="small">{props.name}</Type>
                <Type variant="small">{props.number}</Type>
            </div>
            <hr className={`h-0.25  ${props.theme == "dark"?"bg-fontDark":"bg-fontLight"} border-0 mt-2`}></hr>
        </div>
    );
}

SectionDivider.displayName= "SectionDivider";

export default SectionDivider