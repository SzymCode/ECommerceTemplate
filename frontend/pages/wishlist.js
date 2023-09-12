import React from "react"
import { useSelector } from "react-redux"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { WishlistItem, Wrapper } from "@/components"

export default function Wishlist() {
  const { wishlistItems } = useSelector((state) => state.wishlist)
  const router = useRouter()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.4 }}
      className="w-full py-20">
      <Wrapper>
        {wishlistItems.length > 0 && (
          <>
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Wishlist
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 py-10">
              {wishlistItems.map((item) => (
                <WishlistItem key={item.id} data={item} />
              ))}
            </div>
          </>
        )}

        {wishlistItems.length < 1 && (
          <motion.div className="flex-[2] flex flex-col items-center pb-[50px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}>
            <span className="text-xl font-bold">Your wishlist is empty</span>
            <span className="text-center mt-4">
              Looks like you have not added anything to your wishlist.
              <br />
              Go ahead and add items to your wishlist.
            </span>
            <button onClick={() => router.push("/")} className="w-[260px] mt-10 py-4 rounded-full bg-black text-white text-lg font-medium active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center transition-all duration-300">
              Continue Shopping
            </button>
          </motion.div>
        )}
      </Wrapper>
    </motion.div>
  )
}
