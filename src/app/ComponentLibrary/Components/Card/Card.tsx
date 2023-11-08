'use client'
import Image from 'next/image'
import { cva, VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { Type } from '../../Typography/Type';

import CrashrLogo from '../../../../../public/assets/crashr/CrashrPrimaryLogo.png'


interface CardProps {
    title: string
}

interface Props extends
    CardProps,
    VariantProps<typeof cardStyles> { }
const cardStyles = cva(
    'flex items-center justify-center px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80',
    {
        variants: {
            intent: {
                primary: ' rounded-xl overflow-hidden bg-gray-500  pt-5 flex flex-col hover:bg-backgroundDark gap-10 hover:text-fontDark focus:ring-gray-500',
                secondary:
                    'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 focus:ring-gray-500',
                danger: 'bg-red-500 text-white focus:ring-red-500',
            },
            fullWidth: {
                true: 'w-full',
            },
        },
        defaultVariants: {
            intent: 'primary',
        },
    },
);


const Card = ({ intent, fullWidth, ...props }: Props) => {

    return (
        <div className={cardStyles({ intent, fullWidth })}>
            <div className="w-full flex flex-row justify-between ">
            <Type variant="h5">
                {props.title}
            </Type>
            <Type variant="h5">
                Streamlining the <br />design process
            </Type>
            </div>
            <motion.div
                initial={{ y: 45 }}
                whileHover={{
                    y: -5,
                    scale: 1.1,
                    
                }}
            >
                <Image src={CrashrLogo} alt="Crashr"/>
            </motion.div>

        </div>
    )

}

export default Card;