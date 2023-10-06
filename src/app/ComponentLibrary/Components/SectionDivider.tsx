import React from "react";
import { Type } from "../Typography/Type";

interface SectionDividerProps {
    name: string,
    number: string
}

const SectionDivider = (props: SectionDividerProps) => {

    return (
        <div className="w-full">
            <div className="flex flex-row w-full justify-between">
                <Type variant="small">{props.name}</Type>
                <Type variant="small">{props.number}</Type>
            </div>
            <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
    );
}

export default SectionDivider