import Image from "next/image"
import React from "react"
import { RiDeleteBin6Line } from "react-icons/ri"

const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b transform duration-200 hover:scale-[102%]">
      <div className="shrink-0 aspect-square w-[50px] md:w-[90px]">
        <Image src="/react-logo.png" alt="product" width={100} height={100}/>
      </div>

      <div className="w-full flex flex-col">
        <div className="flex md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            PRODUCT TITLE
          </div>


          <div className="flex flex-col items-center">
            <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
              99.99 zł
            </div>
            <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px] mt-5" />
          </div>
        </div>

        <div className="text-md font-medium text-black/[0.5] -mt-8 max-w-xs overflow-hidden max-h-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  )
}

export default CartItem

