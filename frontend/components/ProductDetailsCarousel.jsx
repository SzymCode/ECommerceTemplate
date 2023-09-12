import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import Image from "next/image"

export default function ProductDetailsCarousel({ images }) {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false} showStatus={false} showThumbs={false} className="productCarousel">
        {images?.map((img) => (
          <Image width={200} height={200} key={img.id} src={img.attributes.url} alt={img.attributes.name}/>
        ))}
      </Carousel>
    </div>
  )
}