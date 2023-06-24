import React from "react"
import Link from "next/link"

const ProductCard = ({ children, className }) => {
  return (
    <Link href="/product/1" className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
      <img className="w-100" src="/react-logo.png" alt="Product Image" />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">Product Name</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">$20.00</p>
          <p className="text-base font-medium line-through">$25.00</p>
          <p className="ml-auto text-base font-medium text-green-500"></p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard