'use client'

import { useState } from "react"
import { Button } from "../../Components/Button/Button"
import TextField from "../../Components/TextBox/textbox"
import { Type } from "../../Typography/Type"

interface PasswordProtectedProps{
    isCorrectPassordProvided:()=> void
}


const PasswordProtected = (props:PasswordProtectedProps) =>{

    const[value,setValue] = useState("");

    const onChangeValue = (str:string) =>{
        setValue(str);

        if(str =="pass"){
            props.isCorrectPassordProvided();
        }
    }

    

    return(
        <div className="w-full flex flex-col justify-center p-20 items-center mt-20 gap-10">
             <Type variant="h3">
                Sorry!
            </Type>  
            <Type variant="emphasized-body">
                You need a password to access this project!
            </Type> 
            <div className="flex flex-row gap-5">
                <TextField 
                value={value}
                onChange={onChangeValue} />

                <Button intent={"primary"}>
                    Submit
                </Button>
            </div>  

        </div>
    )

}

export default PasswordProtected