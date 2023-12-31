'use client'

import React from "react";
import { Type } from "../../Typography/Type";
import { cva, VariantProps } from 'class-variance-authority';



interface TaskFlowProps {
  children: React.ReactNode
}

interface taskProps{
    task:string
    isLast?:boolean
}

interface Props extends
    taskProps,
    VariantProps<typeof taskStyles> { }

const taskStyles = cva(
    'flex w-full rounded-sm h-full items-center p-3',
    {
        variants: {
            intent: {
                hr: 'bg-[#D7DDFD]',
                employees:
                    'bg-[#C3DED6]',
                admin: 'bg-[#FBEAAC]',
            },
            fullWidth: {
                true: 'w-full',
            },
        }

    },
);


const TaskFlow = (props: TaskFlowProps) => {

  return (
    
      <div className="w-5/6 flex flex-col md:grid md:grid-cols-6 items-center">
        {props.children}
      </div>
    
  );
}
TaskFlow.task = ({ intent, fullWidth, ...props }: Props ) => (
  <div className="flex flex-col md:flex-row w-full md:h-full items-center ">
     <div className={taskStyles({ intent, fullWidth })}>
            <Type variant="smallest">
              {props.task}
            </Type> 
    </div> 
    {!props.isLast && <>
    <svg className="hidden md:block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"></path></svg>
    <svg className="md:hidden block"xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M204.24,148.24l-72,72a6,6,0,0,1-8.48,0l-72-72a6,6,0,0,1,8.48-8.48L122,201.51V40a6,6,0,0,1,12,0V201.51l61.76-61.75a6,6,0,0,1,8.48,8.48Z"></path></svg>
    </>
    }
  </div>
)



TaskFlow.displayName = 'TaskFlow';

export default TaskFlow;