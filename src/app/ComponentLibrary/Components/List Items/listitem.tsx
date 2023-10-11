import React from "react";
import { Type } from "../../Typography/Type";

interface ListItemProps {
    number: string,
    children?:React.ReactNode,
    name?: string,
}

const ListItem = (props: ListItemProps) => {

    return (
        <div>
            <div >
                      <Type variant="emphasized-body" className="font-semibold">{props.number}</Type>
                      {props.name && <Type variant="h4">{props.name}</Type>}
                    </div>
                   {props.children && <div className="mt-2">
                      <Type variant="body">
                        {props.children}
                      </Type>

                    </div>}
        </div>
    );
}

ListItem.displayName= "ListItem";

export default ListItem