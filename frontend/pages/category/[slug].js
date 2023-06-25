import React, { useEffect, useState } from "react"
import { ProductCard, Wrapper } from "@/components"

const Category = () => {
  const productCards = Array.from(Array(30), (_, index) => (<ProductCard key={index} condition={(index % 3) + 1} />))

  return (
    <div className="w-full md:py-20 relative">
      <Wrapper>
        <div className="max-w-[800px] mx-auto mt-8 md:mt-0 text-black">
          <div className="text-center text-[28px] md:text-[34px] mb-10 font-semibold leading-tight">
            Category
          </div>
          <div className="grid grid-cols-5 gap-6">
            {productCards}
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Category
