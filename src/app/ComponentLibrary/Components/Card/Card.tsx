'use client'
import Image from 'next/image'
import { cva, VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { Type } from '../../Typography/Type';

import ChainReactive from 'public/assets/home/ChainReactive/ChainreactiveImage.png'
import Crashr from 'public/assets/home/crashr/CrashrImage.png'
import Hive from 'public/assets/home/hive/hiveimage.png'
import EverestOS from 'public/assets/home/everestos/everestosCard.png'
import UPark from 'public/assets/home/universitypark/UParkCard.png'
import React from 'react';
import Link from 'next/link';




export interface CardProps {
    title: string,
    jobtype?:string,
    subtitle:string,
    tags:string,
    isLocked?:boolean
}

export type varianttype = "crashr" | "chainreactive" | "hive" | "everestos" | null | undefined;

interface Props extends
    CardProps,
    VariantProps<typeof cardStyles> { }
const cardStyles = cva(
    'rounded-2xl md:w-full group h-3/6 overflow-hidden items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80 ',
    {
        variants: {
            type: {
                crashr: 'bg-crashrCard hover:bg-backgroundDark gap-10 hover:text-fontDark focus:ring-gray-500',
                chainreactive:
                    'bg-chainReactiveCard',
                hive: 'bg-hiveCard text-white focus:ring-red-500',
                everestos:'bg-everestosCard',
                upark:'bg-uParkCard'
            },
            
        },
        defaultVariants: {
            type: 'crashr',
        },
    },
);


export const Card = ({ type, ...props }: Props) => {
    let image = Crashr;
    let link = "/";

    switch(props.title){
        case "University Park":
            image = UPark;
            link = "/universitypark"
            break;
        case "Crashr":
            image = Crashr;
            link = "/crashr"
            break;
        case "Chain Reactive LLC":
            image = ChainReactive;
            link = "/chainreactive"
            break;
        case "Hive":
            image = Hive;
            link = "/hive"
            break;
        case "Everest OS":
            image = EverestOS;
            link = "/everestos"
            break;
        default:
            image= Crashr;
            link="/"

    }

    return (
        // <div className={cardStyles({ intent, fullWidth })}>
        //     <div className="w-full flex flex-row justify-between ">
        //     <Type variant="h5">
        //         {props.title}
        //     </Type>
        //     <Type variant="h5">
        //         Streamlining the <br />design process
        //     </Type>
        //     </div>


        // </div>

        
            <div className={cardStyles({ type })}>
                <Link href={link}>
                <div className="max-w-full flex flex-col ">
                    <div className="w-full flex flex-col gap-16 pl-10 py-10">
                        <div className="w-full flex flex-col justify-between ">
                            <div className="w-full flex flex-row justify-between">
                            <div className="">
                            <Type variant="h2">
                                {props.title}
                            </Type>
                            <Type variant="h5">
                                {props.jobtype}
                            </Type>
                            </div>
                            {props.isLocked &&
                            <div className="w-1/6">

                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F5F5F5" viewBox="0 0 256 256"><path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"></path></svg>
                            </div>
                            }
                            </div>
                            <div className="w-5/6 mt-5">
                            <Type variant="h5Sans">
                               {props.subtitle}
                            </Type>
                            </div>
                        </div>
                        {/* <Type variant="h5Sans">
                            {props.tags}
                        </Type> */}
                    </div>
                    <div className="ml-10 group-hover:scale-102 transform transition duration-y">
                    <Image src={image}  alt={props.title} />
                    </div>    
                </div>
                </Link>
            </div>
        
    )

}

