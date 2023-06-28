import React from "react"
import Link from "next/link"
import Image from 'next/image'

const ProductCard = ({ data: { attributes: p, id } }) => {
  return (
    <div className="transform duration-200 hover:scale-105">
      <Link href={`/products/${p.slug}`} className="overflow-hidden bg-grey cursor-pointer">

        <div className="p-4 bg-slate-200 justify-center">
          <Image className="rounded-2xl" width={200} height={200} src={p.thumbnail.data.attributes.url} alt={p.name}/>
        </div>
        <div className="sm:p-2 p-1 text-black/[0.9] bg-black/[0.04]">
          <h2 className="text-[16px] sm:text-lg font-medium">
            {p.name}
          </h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 sm:text-lg text-[14px] font-semibold mr-1">
              {p.price}zł
            </p>
            <p className="sm:text-xs text-[10px] font-medium line-through mb-2">
              {p.original_price}zł
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
