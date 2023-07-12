import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import Wrapper from "@/components/Wrapper"

const Failed = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="min-h-[450px] flex text-black py-16">
      <Wrapper>
        <div className="max-w-[600px] items-center text-center rounded-lg p-5 mx-auto flex flex-col">
          <div className="text-2xl font-bold">
            Payment failed!
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
    </motion.div>
  )
}

export default Failed