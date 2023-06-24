import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const ProductDetailsCarousel = ({ images }) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false} showStatus={false} thumbWidth={60} className="productCarousel">
        <img src="/react-logo.png" />
        <img src="/next-logo.png" />
        <img src="/tailwind-logo.svg" />
      </Carousel>
    </div>
  )
}

export default ProductDetailsCarousel