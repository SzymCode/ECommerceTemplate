import React, { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSelector } from "react-redux"
import { loadStripe } from "@stripe/stripe-js"
import { motion } from "framer-motion"

import { CartItem, Wrapper } from "@/components"
import { makePaymentRequest } from "@/utils/api"


const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
)

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const { cartItems } = useSelector((state) => state.cart)

  const subTotal = useMemo(() => {
    return cartItems.reduce(
      (total, val) => total + val.attributes.price,
      0
    )
  }, [cartItems])

  const handlePayment = async () => {
    try {
      setLoading(true)
      const stripe = await stripePromise
      const res = await makePaymentRequest("/api/orders", {
        products: cartItems
      })
      await stripe.redirectToCheckout({
        sessionId: res.stripeSession.id,
      })
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  return (
    <div className="w-full py-20">
      <Wrapper>
        {cartItems.length > 0 && (
          <>
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Shopping Cart
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 py-10">
              <div className="flex-[2]">
                <div className="text-lg font-bold">
                  Cart Items
                </div>
                {cartItems.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </div>

              <div className="flex-[1]">
                <div className="text-lg font-bold">
                  Summary
                </div>

                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                  <div className="flex justify-between">
                    <div className="uppercase text-md md:text-lg font-medium text-black">
                      Subtotal
                    </div>
                    <div className="text-md md:text-lg font-medium text-black">
                      {subTotal}zł
                    </div>
                  </div>

                  <div className="text-sm md:text-md py-5 border-t mt-5">
                    The subtotal reflects the total price of
                    your order, including duties and taxes,
                    before any applicable discounts. It does
                    not include delivery costs and
                    international transaction fees.
                  </div>
                </div>

                <button onClick={ handlePayment } className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}

        {cartItems.length < 1 && (
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="flex-[2] flex flex-col items-center pb-[50px]">
            <span className="text-xl font-bold">
              Your cart is empty
            </span>
            <span className="text-center mt-4">
              Looks like you have not added anything in your cart.
              <br />
              Go ahead and explore top categories.
            </span>
            <Link href="/" className="w-[260px] mt-10 py-4 rounded-full bg-black text-white text-lg font-medium active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center transition-all duration-300">
              Continue Shopping
            </Link>
          </motion.div>
        )}
      </Wrapper>
    </div>
  )
}

export default Cart