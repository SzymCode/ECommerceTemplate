import Image from 'next/image'
import React, { useState, useEffect } from "react"
import { HeroBanner, ProductCard, Wrapper } from "@/components"
import { fetchDataFromApi } from "@/utils/api"

export default function Home({ products }) {
  return (
    <>
      <HeroBanner/>
      <h1 className="text-black">{products?.[0]?.attributes.name}</h1>
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px] text-black">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Simplified Shopping Bliss
          </div>
          <div className="text-md md:text-xl">
            Experience effortless browsing and seamless purchases on our meticulously designed website, ensuring a comfortable and enjoyable online shopping journey.
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 my-14 px-5 md:px-0 justify-center">
          {products?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </div>
      </Wrapper>
    </>
  )
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*")

  return {
    props: { products }
  }
}
