import React, { useEffect, useState } from "react"
import  { ProductCard, Wrapper } from "@/components"

const Category = () => {
  return (
    <div className="w-full md:py-20 relative">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0 text-black">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Category
          </div>
         </div>
      </Wrapper>
    </div>
  )
}
export default Category