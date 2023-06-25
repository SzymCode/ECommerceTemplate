import React from "react"
import Wrapper from "@/components/Wrapper"
import Link from "next/link"

const Success = () => {
  return (
    <div className="min-h-[450px] flex items-center text-black">
      <Wrapper>
        <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col mb-5">
          <div className="text-2xl font-bold">
            Thanks for shopping with us!
          </div>
          <div className="text-lg font-bold mt-2">
            Your order has been placed successfully.
          </div>
          <div className="text-base mt-5">
            For any product related query, drop an email to
          </div>
          <div className="underline">ecommercetemplate@shop.com</div>

          <Link href="/" className="text-center w-[160px] font-bold mt-5 transform duration-200 hover:scale-[104%]">
            Continue Shopping
          </Link>
        </div>
      </Wrapper>
    </div>
  )
}

export default Success