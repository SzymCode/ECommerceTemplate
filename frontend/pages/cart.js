import React from "react"
import { CartItem, Wrapper } from "@/components"

const Cart = ({ children, className }) => {
  return (
    <div className="w-full md:py-10">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0 text-black">
          <div className="text-[28px] md:text-[34px] mb-0 font-semibold leading-tight">
            Shopping Cart
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-[2]">
            <div className="text-lg font-bold">
              Cart Items
            </div>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>

          <div className="flex-[1]">
            <div className="text-lg font-bold">
              Summary
            </div>

            <div className="p-5 my-5 bg-black/[0.05] rounded-xl text-black">
              <div className="flex justify-between">
                <div className="uppercase text-md md:text-lg font-medium text-black">
                  Subtotal
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


            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center">
              Checkout
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Cart