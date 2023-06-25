import React from "react"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import ProductCard from "./ProductCard"

const RelatedProducts = () => {
  const productCards = Array.from(Array(40), (_, index) => (<ProductCard key={index} condition={(index % 3) + 1} />))
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 3,
    }
  }

  return (
    <div className="mt-[50px] md:mt-[25px] mb-[100px] md:mb-0 text-black">
      <div className="w-full = border-t-2 border-gray-300 mx-auto mb-5"/>
      <div className="text-3xl font-bold mb-5">
        You Might Also Like
      </div>
      <Carousel responsive={responsive} containerClass="-ml-[17px] p-2" itemClass="px-[10px]">
        {productCards}
      </Carousel>
    </div>
  )
}

export default RelatedProducts