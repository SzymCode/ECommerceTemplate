import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import ProductCard from "./ProductCard"

const RelatedProducts = ({ products }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 3
    }
  }

  return (
    <div className="mt-[50px] md:mt-[25px] mb-[100px] md:mb-0">
      <div className="w-full = border-t-2 border-gray-300 mx-auto mb-5"/>
      <div className="text-2xl font-bold mb-5">
        You Might Also Like
      </div>
      <Carousel responsive={responsive} containerClass="ml-[-17px] p-2" itemClass="px-[10px]">
        {products?.data?.map((product) => (
          <ProductCard key={product?.id} data={product} />
        ))}
      </Carousel>
    </div>
  )
}

export default RelatedProducts