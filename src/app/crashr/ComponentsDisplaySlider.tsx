'use client';


import Slider from "react-slick";
import Image from 'next/image'


import SlideOne from '../../../public/assets/crashr/Components/1.png'
import SlideTwo from '../../../public/assets/crashr/Components/2.png'
import SlideThree from '../../../public/assets/crashr/Components/3.png'
import SlideFour from '../../../public/assets/crashr/Components/4.png'
import SlideFive from '../../../public/assets/crashr/Components/5.png'
import SlideSix from '../../../public/assets/crashr/Components/6.png'
import SlideSeven from '../../../public/assets/crashr/Components/7.png'
import SlideEight from '../../../public/assets/crashr/Components/8.png'
import SlideNine from '../../../public/assets/crashr/Components/9.png'
import SlideTen from '../../../public/assets/crashr/Components/10.png'
import SlideEleven from '../../../public/assets/crashr/Components/11.png'
import SlideTwelve from '../../../public/assets/crashr/Components/12.png'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import CustomDot from "./CustomDots/CustomDots";

const ComponentsDisplaySlider = () => {

    const [selectedIndex,setSelectedIndex] = useState(0);

    const [hasUserClicked,setHasUserClicked] = useState(false);

    let imageArray =
        [
            {
                imageSrc: SlideOne,
                altText: "Hello"
            },
            {
                imageSrc: SlideTwo,
                altText: "Hello"
            },
            {
                imageSrc: SlideThree,
                altText: "Hello"
            },
            {
                imageSrc: SlideFour,
                altText: "Hello"
            },
            {
                imageSrc: SlideFive,
                altText: "Hello"
            },
            {
                imageSrc: SlideSix,
                altText: "Hello"
            },
            {
                imageSrc: SlideSeven,
                altText: "Hello"
            },
            {
                imageSrc: SlideEight,
                altText: "Hello"
            },
            {
                imageSrc: SlideNine,
                altText: "Hello"
            },
            {
                imageSrc: SlideTen,
                altText: "Hello"
            },
            {
                imageSrc: SlideEleven,
                altText: "Hello"
            },
            {
                imageSrc: SlideTwelve,
                altText: "Hello"
            }
        ]


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
                    
                    
                    <Image className={` ${selectedIndex === i?"border border-2 border-slate-500 p-1":" opacity-50 p-2"} cursor-pointer`} onClick={userClick} src={imageArray[i].imageSrc} alt={`Dot ${i}`} />
                    
                    
                </div>
            );
        },
        beforeChange: (oldIndex:number, newIndex:number) => {
            setSelectedIndex(newIndex);
        }

      
      };

return (

    <Slider {...settings}>
        {imageArray && imageArray.map((image, index) => (
            <div key={index} >
                <Image src={image.imageSrc} alt={image.altText} />
            </div>
        ))}
    </Slider>

)


}

export default ComponentsDisplaySlider