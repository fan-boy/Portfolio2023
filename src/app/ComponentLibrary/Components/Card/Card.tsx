'use client'
import Image from 'next/image'
import { cva, VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { Type } from '../../Typography/Type';

import ChainReactive from '../../../../../public/assets/home/ChainReactive/ChainReactiveImage.png'
import Crashr from '../../../../../public/assets/home/crashr/CrashrImage.png'
import Hive from '../../../../../public/assets/home/hive/hiveimage.png'
import React from 'react';
import Link from 'next/link';


interface CardProps {
    title: string,
    subtitle:string,
    tags:string
}

interface Props extends
    CardProps,
    VariantProps<typeof cardStyles> { }
const cardStyles = cva(
    'rounded-2xl w-full h-3/6 overflow-hidden items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80',
    {
        variants: {
            type: {
                crashr: 'bg-crashrCard hover:bg-backgroundDark gap-10 hover:text-fontDark focus:ring-gray-500',
                chainreactive:
                    'bg-chainReactiveCard',
                hive: 'bg-hiveCard text-white focus:ring-red-500',
                everestos:''
            },
            
        },
        defaultVariants: {
            type: 'crashr',
        },
    },
);


const Card = ({ type, ...props }: Props) => {
    let image = Crashr;
    let link = "/";

    switch(props.title){
        case "Crashr":
            image = Crashr;
            link = "/crashr"
            break;
        case "Chain Reactive":
            image = ChainReactive;
            link = "/chainreactive"
            break;
        case "Hive":
            image = Hive;
            link = "/hive"
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
                            <Type variant="h3">
                                {props.title}
                            </Type>
                            <Type variant="h5">
                               {props.subtitle}
                            </Type>
                        </div>
                        <Type variant="h5">
                            {props.tags}
                        </Type>
                    </div>
                    <div className="ml-10">
                    <Image src={image}  alt={props.title} />
                    </div>    
                </div>
                </Link>
            </div>
        
    )

}

export default Card;