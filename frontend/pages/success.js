import React from "react"
import Wrapper from "@/components/Wrapper"
import Link from "next/link"

import RunConfetti from "@/components/Confetti"

const Success = () => {
  return (
    <div className="min-h-[450px] flex items-center text-black">
      <RunConfetti/>
      <Wrapper>
        <div className="max-w-[600px] items-center text-center p-5 mx-auto flex flex-col mb-5">
          <div className="text-2xl font-bold">
            Thanks for shopping with us!
          </div>
          <div className="text-lg font-bold mt-2">
            Your order has been placed successfully.
          </div>
          <div className="text-base mt-5">
            For any product related query, drop an email to:
          </div>
          <div className="underline">ecommercetemplate@shop.com</div>

          <Link href="/" className="w-[260px] mt-10 py-4 rounded-full bg-black text-white text-lg font-medium active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center transition-all duration-300">
            Continue Shopping
          </Link>
        </div>
      </Wrapper>
    </div>
  )
}

export default Success