import React from "react"
import Link from "next/link"
import Image from 'next/image'
import { useDispatch } from "react-redux"
import { addToCart } from "@/store/cartSlice"

const ProductCard = ({ data: { attributes: product, id } }) => {
  const dispatch = useDispatch()

  return (
    <div className="transform duration-200 hover:scale-105">
      <Link href={`/product/${product.slug}`}>
        <div className="overflow-hidden bg-grey cursor-pointer">
          <div className="p-2.5 sm:p-4 bg-slate-200">
            <Image className="rounded-2xl" width={200} height={200} src={product.thumbnail.data.attributes.url} alt={product.name}/>
          </div>
          <div className="sm:p-2 p-1 text-black/[0.9] bg-black/[0.04]">
            <h2 className="text-[16px] sm:text-lg font-medium mr-1 whitespace-nowrap overflow-hidden">
              {product.name}
            </h2>
            <div className="flex items-center text-black/[0.5]">
              <p className="mr-1 sm:mr-2 sm:text-lg text-[12px] font-semibold mr-1">
                {product.price}zł
              </p>
              <p className="sm:text-xs text-[8px] font-medium line-through mb-2">
                {product.original_price}zł
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
