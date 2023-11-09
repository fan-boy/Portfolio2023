'use client';


import Slider from "react-slick";
import Image from 'next/image'


import screen1 from '../../../public/assets/hive/Screens/1.png'
import screen2 from '../../../public/assets/hive/Screens/2.png'
import screen3 from '../../../public/assets/hive/Screens/3.png'
import screen4 from '../../../public/assets/hive/Screens/4.png'
import screen5 from '../../../public/assets/hive/Screens/5.png'
import screen6 from '../../../public/assets/hive/Screens/6.png'
import screen7 from '../../../public/assets/hive/Screens/7.png'
import screen8 from '../../../public/assets/hive/Screens/8.png'
import screen9 from '../../../public/assets/hive/Screens/9.png'
import screen10 from '../../../public/assets/hive/Screens/10.png'
import screen11 from '../../../public/assets/hive/Screens/11.png'
import screen12 from '../../../public/assets/hive/Screens/12.png'
import screen13 from '../../../public/assets/hive/Screens/13.png'
import screen14 from '../../../public/assets/hive/Screens/14.png'
import screen15 from '../../../public/assets/hive/Screens/15.png'
import screen16 from '../../../public/assets/hive/Screens/16.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const Carousel = () => {


    let imageArray =
        [
            {
                imageSrc: screen1,
                altText: "Hello"
            },
            {
                imageSrc: screen2,
                altText: "Hello"
            },
            {
                imageSrc: screen3,
                altText: "Hello"
            },
            {
                imageSrc: screen4,
                altText: "Hello"
            },
            {
                imageSrc: screen5,
                altText: "Hello"
            },
            {
                imageSrc: screen6,
                altText: "Hello"
            },
            {
                imageSrc: screen7,
                altText: "Hello"
            },
            {
                imageSrc: screen8,
                altText: "Hello"
            },
            {
                imageSrc: screen10,
                altText: "Hello"
            },
            {
                imageSrc: screen11,
                altText: "Hello"
            },
            {
                imageSrc: screen12,
                altText: "Hello"
            },
            {
                imageSrc: screen13,
                altText: "Hello"
            },
            {
                imageSrc: screen14,
                altText: "Hello"
            },
            {
                imageSrc: screen15,
                altText: "Hello"
            },
            {
                imageSrc: screen16,
                altText: "Hello"
            }

        ]



    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#F5F5F5" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168A8,8,0,0,1,176,128Z"></path></svg>,
        nextArrow: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F5F5F5" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path></svg>
    
    };


    return (

        <Slider {...settings}>
            {imageArray && imageArray.map((image, index) => (
                <div key={index} >
                    <Image className="p-2 rounded-xl" src={image.imageSrc} alt={image.altText} />
                </div>
            ))}
             
        </Slider>

    )


}

export default Carousel;