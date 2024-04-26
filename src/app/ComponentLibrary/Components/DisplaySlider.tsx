'use client';


import Slider from "react-slick";
import Image, { StaticImageData } from 'next/image'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";

interface DisplaySliderProps{
    imageArray:{
        imageSrc: StaticImageData;
        altText: string;
    }[]
}

const DisplaySlider = (props: DisplaySliderProps) => {

    const [selectedIndex,setSelectedIndex] = useState(0);

    const [hasUserClicked,setHasUserClicked] = useState(false);

    


        const userClick = () =>{
            setHasUserClicked(true);
        }

    var settings = {

        dots: true,

        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        accessibility:true,
        autoplay:!hasUserClicked,
        autoplaySpeed:3000,
        dotsClass: "!grid grid-cols-6 flex justify-center",
        customPaging: function (i: number) {
            return (
                <div >
                    
                    
                    <Image className={` ${selectedIndex === i?"border border-2 border-slate-500 p-1":" opacity-50 p-2"} cursor-pointer`} onClick={userClick} src={props.imageArray[i].imageSrc} alt={`Dot ${i}`} />
                    
                    
                </div>
            );
        },
        beforeChange: (oldIndex:number, newIndex:number) => {
            setSelectedIndex(newIndex);
        }

      
      };

return (

    <Slider {...settings}>
        {props.imageArray && props.imageArray.map((image, index) => (
            <div key={index} >
                <Image src={image.imageSrc} alt={image.altText} />
            </div>
        ))}
    </Slider>

)


}

export default DisplaySlider;