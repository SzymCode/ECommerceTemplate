import React, { useState } from "react"
import { IoMdHeartEmpty } from "react-icons/io"
import ReactMarkdown from "react-markdown"

import { Wrapper, ProductDetailsCarousel, RelatedProducts } from "@/components"

const ProductDetails = ({ product, products }) => {
  const [selectedSize, setSelectedSize] = useState()
  const [showError, setShowError] = useState(false)

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px] text-black">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>

          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              PRODUCT TITLE
            </div>
            <div className="text-lg font-semibold mb-5">
              PRODUCT SUBTITLE
            </div>
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">
                PLN: 99.99zł
              </p>
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-5">
              incl. of taxes
            </div>

            <div className="text-lg font-bold mb-5">
              PRODUCT DETAILS
            </div>
            <div className="markdown text-md mb-10">
              <ReactMarkdown>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </ReactMarkdown>
            </div>

            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
            </button>
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
          </div>
        </div>
        <RelatedProducts/>
      </Wrapper>
    </div>
  )
}

export default ProductDetails
