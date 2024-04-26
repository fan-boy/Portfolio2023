
import SlideOne from '../../../public/assets/universitypark/Components/1.png'
import SlideTwo from '../../../public/assets/universitypark/Components/2.png'
import SlideThree from '../../../public/assets/universitypark/Components/3.png'
import SlideFour from '../../../public/assets/universitypark/Components/4.png'
import SlideFive from '../../../public/assets/universitypark/Components/5.png'
import SlideSix from '../../../public/assets/universitypark/Components/6.png'
import SlideSeven from '../../../public/assets/universitypark/Components/7.png'
import SlideEight from '../../../public/assets/universitypark/Components/8.png'
import SlideNine from '../../../public/assets/universitypark/Components/9.png'
import SlideTen from '../../../public/assets/universitypark/Components/10.png'
import SlideEleven from '../../../public/assets/universitypark/Components/11.png'
import SlideTwelve from '../../../public/assets/universitypark/Components/12.png'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import DisplaySlider from "../ComponentLibrary/Components/DisplaySlider";

const ComponentsDisplaySlider = () => {

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

    

return (

    <DisplaySlider imageArray={imageArray}/>

)


}

export default ComponentsDisplaySlider