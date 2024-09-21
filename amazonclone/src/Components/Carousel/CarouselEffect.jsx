import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from './data';


function CarouselEffect() {
  return (
    <div>
      <Carousel
      autoPlay={true}
      // infiniteLoop={true}
      infiniteLoop={true}
      showIndicators={false}
      showThumbs={false}
      >
   

    {
        img.map((imageItemLink,i)=>{
            return <img src={imageItemLink} key={i}/>
            })


    }
    
      </Carousel>
    </div>
  )
}

export default CarouselEffect
