import React from "react"
import Link from "next/link"

const ProductCard = ({ children, className }) => {
  return (
    <Link href="/product/1" className="transform overflow-hidden bg-grey duration-200 hover:scale-105 cursor-pointer">
      <img className="w-full bg-black/[0.1] p-2" src="/react-logo.png" alt="Product Image" />
      <div className="sm:p-2 p-1 text-black/[0.9] bg-black/[0.04]">
        <h2 className="text-[16px] sm:text-lg font-medium">Product Name</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 sm:text-lg text-[14px] font-semibold mr-1">$20.00</p>
          <p className="sm:text-xs text-[10px] font-medium line-through mb-2">$25.00</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
