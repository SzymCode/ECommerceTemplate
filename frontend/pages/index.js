import Image from 'next/image'
import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

import { HeroBanner, ProductCard, Wrapper } from "@/components"
import { fetchDataFromApi } from "@/utils/api"


export default function Home({ products }) {
  return (
    <div>
      <HeroBanner/>
      <Wrapper>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px] text-black">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Simplified Shopping Bliss
          </div>
          <div className="text-md md:text-xl">
            Experience effortless browsing and seamless purchases on our meticulously designed website, ensuring a comfortable and enjoyable online shopping journey.
          </div>
        </motion.div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 my-14 px-5 md:px-0 justify-center">
          {products?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </motion.div>
      </Wrapper>
    </div>
  )
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*")

  return {
    props: { products }
  }
}
