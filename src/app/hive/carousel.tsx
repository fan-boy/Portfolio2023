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
        dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      
      };
    

return (

    <Slider {...settings}>
        {imageArray && imageArray.map((image, index) => (
            <div key={index} >
                <Image className="m-2 p-2 rounded-xl" src={image.imageSrc} alt={image.altText} />
            </div>
        ))}
    </Slider>

)


}

export default Carousel;