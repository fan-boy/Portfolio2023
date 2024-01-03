'use client'
import React from "react";
import Image from 'next/image'
import DefaultPage from "../ComponentLibrary/commons/pages/DefaultPage";
import PageSection from "../ComponentLibrary/commons/pages/PageSection";
import ResumePage from '../../../public/assets/resume/resume.png';
import { Button } from "../ComponentLibrary/Components/Button/Button";
import { Type } from "../ComponentLibrary/Typography/Type";



export default function Resume(){
    const onClickButton = () =>{

    }

    return(
        <DefaultPage selected="resume">
             <PageSection theme="dark" >
             <div className="flex w-full justify-center mt-10 flex-row gap-2">
                <div className="flex flex-col justify-center w-full md:w-2/3 p-5 gap-5">
                 
                 <Image src={ResumePage} className="rounded-2xl" alt="Me in the fall weather of Boston."
                  
                  />
                  <div className="flex w-full justify-center">
                  <Button intent={"primary"}  onClick={onClickButton}>
                    <Type variant="body">
                    Download
                    </Type>
                </Button>
                  </div>
                  </div>   
                  
            </div>
                 
             </PageSection>
        </DefaultPage>
    )
}