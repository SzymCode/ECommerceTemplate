import Image from "next/image"
import React from "react"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useDispatch } from "react-redux"

import { removeFromWishlist } from "@/store/wishlistSlice"

export default function WishlistItem({ data }) {
  const p = data.attributes
  const dispatch = useDispatch()

  function removeFromWishlistHandler() {
    dispatch(removeFromWishlist({ id: data.id }))
  }

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-[50px] md:w-[80px]">
        <Image src={p.thumbnail.data.attributes.url} alt={name} width={80} height={80} />
      </div>

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {p.name}
          </div>

          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            {p.price}zł
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <RiDeleteBin6Line
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
            onClick={removeFromWishlistHandler}
          />
        </div>
      </div>
    </div>
  )
}
