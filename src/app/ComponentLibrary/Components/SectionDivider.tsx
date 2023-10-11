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
        <div className="w-full">
            <div className="flex flex-row w-full justify-between">
                <Type variant="small">{props.name}</Type>
                <Type variant="small">{props.number}</Type>
            </div>
            <hr className={`h-px  ${props.theme == "dark"?"bg-white":"bg-black"} border-0 `}></hr>
        </div>
    );
}

SectionDivider.displayName= "SectionDivider";

export default SectionDivider