'use client'

import { useState } from "react"
import { Button } from "../../Components/Button/Button"
import TextField from "../../Components/TextBox/textbox"
import { Type } from "../../Typography/Type"
import {motion} from 'framer-motion'

interface PasswordProtectedProps{
    isCorrectPassordProvided:()=> void
}


const PasswordProtected = (props:PasswordProtectedProps) =>{

    const[value,setValue] = useState("");
    const[isError,setError] = useState(false);

    const onChangeValue = (str:string) =>{
        setValue(str);

    }


    const onClickButton = () =>{
        if(value === "pass"){
            props.isCorrectPassordProvided();
        }else{
            setError(true);
        }
    }
    

    return(
        <div className="w-full flex flex-col justify-center p-5 md:p-20 items-center gap-5 md:gap-10">
             <Type variant="h3">
                Sorry!
            </Type>  
            <Type variant="emphasized-body" className="text-center">
                You need a password to access this project!
            </Type> 
            <div className="flex flex-col md:flex-row gap-5">
                <TextField 
                value={value}
                onChange={onChangeValue} />

                <Button intent={"primary"} onClick={onClickButton}>
                    <Type variant="body">
                    Submit
                    </Type>
                </Button>
            </div>  
            {isError && 
            <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            >
                <span className="bg-red-200 text-red-700 rounded-full px-5 py-2">
                    Incorrect Password
                </span>
                </motion.div>}
            <div className="text-center w-full stext-xxs md:text-sm">
                <Type variant="body-small" >
                    If you’re a recruiter, the password is provided on my resume.
                </Type>
                <Type variant="body-small">
                    If you are someone else interested in knowing about my work, please reach out to me.
                </Type>
            </div>

        </div>
    )

}

export default PasswordProtected