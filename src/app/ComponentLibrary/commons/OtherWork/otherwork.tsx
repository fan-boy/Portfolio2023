import { propagateServerField } from "next/dist/server/lib/render-server";
import React from "react";
import { Card, varianttype } from "../../Components/Card/Card";
import Section from "../sections/section";
import projectlist from '../../../projectlist.json';


interface OtherWorkProps {
    currentProject: string
}



const OtherWork = (props: OtherWorkProps) => {

    let currentProjectIndex = projectlist.findIndex(p => p.type === props.currentProject);

    let cards: JSX.Element[] = [];
    let currentIndex = currentProjectIndex + 1;


    const pushCards = () => {

        if (currentIndex <= projectlist.length - 1) {
            cards.push(
                <div className="" key={currentIndex}>

                    <Card title={projectlist[currentIndex].projectName}
                        type={projectlist[currentIndex].type as varianttype}
                        subtitle={projectlist[currentIndex].subtitle}
                        tags={projectlist[currentIndex].tags} />
                </div>

            )
            if (currentIndex + 1 <= projectlist.length -1 ) {
                cards.push(
                    <div className="mt-10 md:mt-0" key={currentIndex}>

                        <Card title={projectlist[currentIndex + 1].projectName}
                            type={projectlist[currentIndex + 1].type as varianttype}
                            subtitle={projectlist[currentIndex + 1].subtitle}
                            tags={projectlist[currentIndex + 1].tags} />
                    </div>

                )
            } else {
                cards.push(
                    <div className="mt-10 md:mt-0" key={currentIndex}>

                        <Card title={projectlist[0].projectName}
                            type={projectlist[0].type as varianttype}
                            subtitle={projectlist[0].subtitle}
                            tags={projectlist[0].tags} />
                    </div>
                )
            }
        } else {
            currentIndex = 0;
            pushCards();
        }
    }

    pushCards();





    return (
        <Section theme="dark" name="Other work" number="" classname="w-full my-20 md:mt-32 p-5 p-5 flex flex-col gap-20" >
            <div className=" sm:px-20 md:px-0 md:columns-2 md:flex-row gap-10">
                {cards}

            </div>
        </Section>
    );
}


export default OtherWork;